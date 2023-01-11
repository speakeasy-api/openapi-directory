package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BeezUpCommonSuccessSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public BeezUpCommonSuccessSummary withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyName")
    public String propertyName;
    public BeezUpCommonSuccessSummary withPropertyName(String propertyName) {
        this.propertyName = propertyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyValue")
    public String propertyValue;
    public BeezUpCommonSuccessSummary withPropertyValue(String propertyValue) {
        this.propertyValue = propertyValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successArguments")
    public java.util.Map<String, String> successArguments;
    public BeezUpCommonSuccessSummary withSuccessArguments(java.util.Map<String, String> successArguments) {
        this.successArguments = successArguments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successCode")
    public String successCode;
    public BeezUpCommonSuccessSummary withSuccessCode(String successCode) {
        this.successCode = successCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successMessage")
    public String successMessage;
    public BeezUpCommonSuccessSummary withSuccessMessage(String successMessage) {
        this.successMessage = successMessage;
        return this;
    }
}