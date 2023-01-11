package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemConditionPoliciesSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeApiAuth apiAuth;
    public GetItemConditionPoliciesSecurity withApiAuth(openapisdk.models.shared.SchemeApiAuth apiAuth) {
        this.apiAuth = apiAuth;
        return this;
    }
}