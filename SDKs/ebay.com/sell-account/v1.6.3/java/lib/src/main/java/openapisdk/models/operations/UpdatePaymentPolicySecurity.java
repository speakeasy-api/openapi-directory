package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentPolicySecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeApiAuth apiAuth;
    public UpdatePaymentPolicySecurity withApiAuth(openapisdk.models.shared.SchemeApiAuth apiAuth) {
        this.apiAuth = apiAuth;
        return this;
    }
}