package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResumeGameServerGroupRequest {
    public ResumeGameServerGroupHeaders headers;
    public ResumeGameServerGroupRequest withHeaders(ResumeGameServerGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResumeGameServerGroupInput request;
    public ResumeGameServerGroupRequest withRequest(openapisdk.models.shared.ResumeGameServerGroupInput request) {
        this.request = request;
        return this;
    }
}