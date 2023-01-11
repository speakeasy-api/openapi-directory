package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteTimelineEventRequestBody {
    @JsonProperty("eventId")
    public String eventId;
    public DeleteTimelineEventRequestBody withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonProperty("incidentRecordArn")
    public String incidentRecordArn;
    public DeleteTimelineEventRequestBody withIncidentRecordArn(String incidentRecordArn) {
        this.incidentRecordArn = incidentRecordArn;
        return this;
    }
}