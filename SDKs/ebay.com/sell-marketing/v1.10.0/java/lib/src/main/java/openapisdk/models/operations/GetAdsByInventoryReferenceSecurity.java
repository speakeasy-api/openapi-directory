package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdsByInventoryReferenceSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeApiAuth apiAuth;
    public GetAdsByInventoryReferenceSecurity withApiAuth(openapisdk.models.shared.SchemeApiAuth apiAuth) {
        this.apiAuth = apiAuth;
        return this;
    }
}