package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterRobotRequest {
    public RegisterRobotHeaders headers;
    public RegisterRobotRequest withHeaders(RegisterRobotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RegisterRobotRequestBody request;
    public RegisterRobotRequest withRequest(RegisterRobotRequestBody request) {
        this.request = request;
        return this;
    }
}