package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_id")
    public String eventId;
    public GetEventPathParams withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
}