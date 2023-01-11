package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetImportationReportResponseImportationInfo {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("beginUtcDate")
    public OffsetDateTime beginUtcDate;
    public GetImportationReportResponseImportationInfo withBeginUtcDate(OffsetDateTime beginUtcDate) {
        this.beginUtcDate = beginUtcDate;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endUtcDate")
    public OffsetDateTime endUtcDate;
    public GetImportationReportResponseImportationInfo withEndUtcDate(OffsetDateTime endUtcDate) {
        this.endUtcDate = endUtcDate;
        return this;
    }
    @JsonProperty("inputConfiguration")
    public InputFileConfiguration inputConfiguration;
    public GetImportationReportResponseImportationInfo withInputConfiguration(InputFileConfiguration inputConfiguration) {
        this.inputConfiguration = inputConfiguration;
        return this;
    }
    @JsonProperty("userId")
    public String userId;
    public GetImportationReportResponseImportationInfo withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}