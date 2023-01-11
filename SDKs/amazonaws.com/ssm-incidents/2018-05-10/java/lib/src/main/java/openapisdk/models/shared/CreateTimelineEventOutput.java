package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateTimelineEventOutput {
    @JsonProperty("eventId")
    public String eventId;
    public CreateTimelineEventOutput withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonProperty("incidentRecordArn")
    public String incidentRecordArn;
    public CreateTimelineEventOutput withIncidentRecordArn(String incidentRecordArn) {
        this.incidentRecordArn = incidentRecordArn;
        return this;
    }
}