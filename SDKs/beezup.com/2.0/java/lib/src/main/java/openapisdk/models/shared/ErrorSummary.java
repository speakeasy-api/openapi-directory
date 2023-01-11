package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ErrorSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorArguments")
    public java.util.Map<String, String> errorArguments;
    public ErrorSummary withErrorArguments(java.util.Map<String, String> errorArguments) {
        this.errorArguments = errorArguments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public String errorCode;
    public ErrorSummary withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorGuid")
    public String errorGuid;
    public ErrorSummary withErrorGuid(String errorGuid) {
        this.errorGuid = errorGuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public ErrorSummary withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exceptionDetail")
    public ExceptionDetail exceptionDetail;
    public ErrorSummary withExceptionDetail(ExceptionDetail exceptionDetail) {
        this.exceptionDetail = exceptionDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public ErrorSummary withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyName")
    public String propertyName;
    public ErrorSummary withPropertyName(String propertyName) {
        this.propertyName = propertyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyValue")
    public String propertyValue;
    public ErrorSummary withPropertyValue(String propertyValue) {
        this.propertyValue = propertyValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public ErrorSummary withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("technicalErrorMessage")
    public String technicalErrorMessage;
    public ErrorSummary withTechnicalErrorMessage(String technicalErrorMessage) {
        this.technicalErrorMessage = technicalErrorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("utcDate")
    public OffsetDateTime utcDate;
    public ErrorSummary withUtcDate(OffsetDateTime utcDate) {
        this.utcDate = utcDate;
        return this;
    }
}