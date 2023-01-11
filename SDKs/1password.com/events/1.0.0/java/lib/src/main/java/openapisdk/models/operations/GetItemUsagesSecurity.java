package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemUsagesSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeJwtsa jwtsa;
    public GetItemUsagesSecurity withJwtsa(openapisdk.models.shared.SchemeJwtsa jwtsa) {
        this.jwtsa = jwtsa;
        return this;
    }
}