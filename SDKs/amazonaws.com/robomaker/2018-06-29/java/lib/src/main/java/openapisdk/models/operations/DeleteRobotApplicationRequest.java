package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRobotApplicationRequest {
    public DeleteRobotApplicationHeaders headers;
    public DeleteRobotApplicationRequest withHeaders(DeleteRobotApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteRobotApplicationRequestBody request;
    public DeleteRobotApplicationRequest withRequest(DeleteRobotApplicationRequestBody request) {
        this.request = request;
        return this;
    }
}