package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRobotApplicationRequest {
    public UpdateRobotApplicationHeaders headers;
    public UpdateRobotApplicationRequest withHeaders(UpdateRobotApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateRobotApplicationRequestBody request;
    public UpdateRobotApplicationRequest withRequest(UpdateRobotApplicationRequestBody request) {
        this.request = request;
        return this;
    }
}