package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeOrderV3Request {
    public ChangeOrderV3PathParams pathParams;
    public ChangeOrderV3Request withPathParams(ChangeOrderV3PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ChangeOrderV3QueryParams queryParams;
    public ChangeOrderV3Request withQueryParams(ChangeOrderV3QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, String> request;
    public ChangeOrderV3Request withRequest(java.util.Map<String, String> request) {
        this.request = request;
        return this;
    }
}