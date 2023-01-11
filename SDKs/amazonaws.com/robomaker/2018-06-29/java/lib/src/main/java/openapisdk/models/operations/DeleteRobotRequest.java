package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRobotRequest {
    public DeleteRobotHeaders headers;
    public DeleteRobotRequest withHeaders(DeleteRobotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteRobotRequestBody request;
    public DeleteRobotRequest withRequest(DeleteRobotRequestBody request) {
        this.request = request;
        return this;
    }
}