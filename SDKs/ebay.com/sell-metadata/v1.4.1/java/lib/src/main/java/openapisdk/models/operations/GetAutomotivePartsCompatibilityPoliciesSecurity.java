package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomotivePartsCompatibilityPoliciesSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeApiAuth apiAuth;
    public GetAutomotivePartsCompatibilityPoliciesSecurity withApiAuth(openapisdk.models.shared.SchemeApiAuth apiAuth) {
        this.apiAuth = apiAuth;
        return this;
    }
}