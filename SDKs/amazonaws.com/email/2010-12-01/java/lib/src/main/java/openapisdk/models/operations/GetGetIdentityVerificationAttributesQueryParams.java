package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetIdentityVerificationAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetIdentityVerificationAttributesActionEnum action;
    public GetGetIdentityVerificationAttributesQueryParams withAction(GetGetIdentityVerificationAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identities")
    public String[] identities;
    public GetGetIdentityVerificationAttributesQueryParams withIdentities(String[] identities) {
        this.identities = identities;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetIdentityVerificationAttributesVersionEnum version;
    public GetGetIdentityVerificationAttributesQueryParams withVersion(GetGetIdentityVerificationAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}