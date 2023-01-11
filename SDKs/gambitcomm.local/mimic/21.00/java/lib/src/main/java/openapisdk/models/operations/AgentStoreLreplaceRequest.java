package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AgentStoreLreplaceRequest {
    public AgentStoreLreplacePathParams pathParams;
    public AgentStoreLreplaceRequest withPathParams(AgentStoreLreplacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public AgentStoreLreplaceRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}