package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTimelineEventQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=eventId")
    public String eventId;
    public GetTimelineEventQueryParams withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=incidentRecordArn")
    public String incidentRecordArn;
    public GetTimelineEventQueryParams withIncidentRecordArn(String incidentRecordArn) {
        this.incidentRecordArn = incidentRecordArn;
        return this;
    }
}