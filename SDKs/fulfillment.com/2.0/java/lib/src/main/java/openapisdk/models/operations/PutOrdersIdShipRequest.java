package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOrdersIdShipRequest {
    public PutOrdersIdShipPathParams pathParams;
    public PutOrdersIdShipRequest withPathParams(PutOrdersIdShipPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutOrdersIdShipOrderShipV2 request;
    public PutOrdersIdShipRequest withRequest(PutOrdersIdShipOrderShipV2 request) {
        this.request = request;
        return this;
    }
    public PutOrdersIdShipSecurity security;
    public PutOrdersIdShipRequest withSecurity(PutOrdersIdShipSecurity security) {
        this.security = security;
        return this;
    }
}