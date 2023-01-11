package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRobotApplicationRequest {
    public CreateRobotApplicationHeaders headers;
    public CreateRobotApplicationRequest withHeaders(CreateRobotApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateRobotApplicationRequestBody request;
    public CreateRobotApplicationRequest withRequest(CreateRobotApplicationRequestBody request) {
        this.request = request;
        return this;
    }
}