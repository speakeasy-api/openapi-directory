package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRobotRequest {
    public CreateRobotHeaders headers;
    public CreateRobotRequest withHeaders(CreateRobotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateRobotRequestBody request;
    public CreateRobotRequest withRequest(CreateRobotRequestBody request) {
        this.request = request;
        return this;
    }
}