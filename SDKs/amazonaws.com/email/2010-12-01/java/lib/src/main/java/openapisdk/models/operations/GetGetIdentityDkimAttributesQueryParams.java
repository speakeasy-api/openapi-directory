package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetIdentityDkimAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetIdentityDkimAttributesActionEnum action;
    public GetGetIdentityDkimAttributesQueryParams withAction(GetGetIdentityDkimAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identities")
    public String[] identities;
    public GetGetIdentityDkimAttributesQueryParams withIdentities(String[] identities) {
        this.identities = identities;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetIdentityDkimAttributesVersionEnum version;
    public GetGetIdentityDkimAttributesQueryParams withVersion(GetGetIdentityDkimAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}