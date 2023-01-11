package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAlarmModelRequest {
    public UpdateAlarmModelPathParams pathParams;
    public UpdateAlarmModelRequest withPathParams(UpdateAlarmModelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAlarmModelHeaders headers;
    public UpdateAlarmModelRequest withHeaders(UpdateAlarmModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAlarmModelRequestBody request;
    public UpdateAlarmModelRequest withRequest(UpdateAlarmModelRequestBody request) {
        this.request = request;
        return this;
    }
}