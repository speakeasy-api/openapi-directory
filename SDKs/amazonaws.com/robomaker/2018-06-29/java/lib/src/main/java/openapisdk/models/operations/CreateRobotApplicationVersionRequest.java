package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRobotApplicationVersionRequest {
    public CreateRobotApplicationVersionHeaders headers;
    public CreateRobotApplicationVersionRequest withHeaders(CreateRobotApplicationVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateRobotApplicationVersionRequestBody request;
    public CreateRobotApplicationVersionRequest withRequest(CreateRobotApplicationVersionRequestBody request) {
        this.request = request;
        return this;
    }
}