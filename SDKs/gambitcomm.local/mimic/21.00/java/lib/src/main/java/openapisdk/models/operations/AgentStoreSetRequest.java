package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AgentStoreSetRequest {
    public AgentStoreSetPathParams pathParams;
    public AgentStoreSetRequest withPathParams(AgentStoreSetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public AgentStoreSetRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}