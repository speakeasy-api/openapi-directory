package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateReturnPolicySecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeApiAuth apiAuth;
    public UpdateReturnPolicySecurity withApiAuth(openapisdk.models.shared.SchemeApiAuth apiAuth) {
        this.apiAuth = apiAuth;
        return this;
    }
}