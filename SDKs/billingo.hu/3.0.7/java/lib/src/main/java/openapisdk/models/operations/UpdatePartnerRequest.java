package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePartnerRequest {
    public UpdatePartnerPathParams pathParams;
    public UpdatePartnerRequest withPathParams(UpdatePartnerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PartnerUpsert request;
    public UpdatePartnerRequest withRequest(openapisdk.models.shared.PartnerUpsert request) {
        this.request = request;
        return this;
    }
}