package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupBeneficiaryRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostSetupBeneficiaryRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostSetupBeneficiarySecurity security;
    public PostSetupBeneficiaryRequest withSecurity(PostSetupBeneficiarySecurity security) {
        this.security = security;
        return this;
    }
}