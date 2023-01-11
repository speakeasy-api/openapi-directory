package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAlarmModelRequest {
    public CreateAlarmModelHeaders headers;
    public CreateAlarmModelRequest withHeaders(CreateAlarmModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAlarmModelRequestBody request;
    public CreateAlarmModelRequest withRequest(CreateAlarmModelRequestBody request) {
        this.request = request;
        return this;
    }
}