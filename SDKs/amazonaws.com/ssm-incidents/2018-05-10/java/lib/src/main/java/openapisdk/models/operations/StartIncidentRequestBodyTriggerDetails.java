package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * StartIncidentRequestBodyTriggerDetails
 * Details about what caused the incident to be created in Incident Manager.
**/
public class StartIncidentRequestBodyTriggerDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawData")
    public String rawData;
    public StartIncidentRequestBodyTriggerDetails withRawData(String rawData) {
        this.rawData = rawData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public StartIncidentRequestBodyTriggerDetails withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public StartIncidentRequestBodyTriggerDetails withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerArn")
    public String triggerArn;
    public StartIncidentRequestBodyTriggerDetails withTriggerArn(String triggerArn) {
        this.triggerArn = triggerArn;
        return this;
    }
}