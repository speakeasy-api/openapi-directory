package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCharginglocationsCharginglocationidRequest {
    public PutCharginglocationsCharginglocationidPathParams pathParams;
    public PutCharginglocationsCharginglocationidRequest withPathParams(PutCharginglocationsCharginglocationidPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput request;
    public PutCharginglocationsCharginglocationidRequest withRequest(openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput request) {
        this.request = request;
        return this;
    }
    public PutCharginglocationsCharginglocationidSecurity security;
    public PutCharginglocationsCharginglocationidRequest withSecurity(PutCharginglocationsCharginglocationidSecurity security) {
        this.security = security;
        return this;
    }
}