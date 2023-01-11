package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ValidationOutput
 * Contains validation output.
**/
public class ValidationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appValidationOutput")
    public AppValidationOutput appValidationOutput;
    public ValidationOutput withAppValidationOutput(AppValidationOutput appValidationOutput) {
        this.appValidationOutput = appValidationOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("latestValidationTime")
    public OffsetDateTime latestValidationTime;
    public ValidationOutput withLatestValidationTime(OffsetDateTime latestValidationTime) {
        this.latestValidationTime = latestValidationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ValidationOutput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverValidationOutput")
    public ServerValidationOutput serverValidationOutput;
    public ValidationOutput withServerValidationOutput(ServerValidationOutput serverValidationOutput) {
        this.serverValidationOutput = serverValidationOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ValidationStatusEnum status;
    public ValidationOutput withStatus(ValidationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public ValidationOutput withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validationId")
    public String validationId;
    public ValidationOutput withValidationId(String validationId) {
        this.validationId = validationId;
        return this;
    }
}