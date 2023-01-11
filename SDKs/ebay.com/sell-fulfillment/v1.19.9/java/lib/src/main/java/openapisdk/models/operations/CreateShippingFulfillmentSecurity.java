package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateShippingFulfillmentSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeApiAuth apiAuth;
    public CreateShippingFulfillmentSecurity withApiAuth(openapisdk.models.shared.SchemeApiAuth apiAuth) {
        this.apiAuth = apiAuth;
        return this;
    }
}