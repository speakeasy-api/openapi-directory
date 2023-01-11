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
 * InputSummary
 * Information about the input.
**/
public class InputSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public InputSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputArn")
    public String inputArn;
    public InputSummary withInputArn(String inputArn) {
        this.inputArn = inputArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputDescription")
    public String inputDescription;
    public InputSummary withInputDescription(String inputDescription) {
        this.inputDescription = inputDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputName")
    public String inputName;
    public InputSummary withInputName(String inputName) {
        this.inputName = inputName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public InputSummary withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public InputStatusEnum status;
    public InputSummary withStatus(InputStatusEnum status) {
        this.status = status;
        return this;
    }
}