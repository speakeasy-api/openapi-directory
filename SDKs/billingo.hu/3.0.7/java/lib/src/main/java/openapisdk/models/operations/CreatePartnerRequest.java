package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePartnerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PartnerUpsert request;
    public CreatePartnerRequest withRequest(openapisdk.models.shared.PartnerUpsert request) {
        this.request = request;
        return this;
    }
}