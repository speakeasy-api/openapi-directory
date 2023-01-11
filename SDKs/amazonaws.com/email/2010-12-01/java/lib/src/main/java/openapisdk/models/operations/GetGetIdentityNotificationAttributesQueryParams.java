package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetIdentityNotificationAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetIdentityNotificationAttributesActionEnum action;
    public GetGetIdentityNotificationAttributesQueryParams withAction(GetGetIdentityNotificationAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identities")
    public String[] identities;
    public GetGetIdentityNotificationAttributesQueryParams withIdentities(String[] identities) {
        this.identities = identities;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetIdentityNotificationAttributesVersionEnum version;
    public GetGetIdentityNotificationAttributesQueryParams withVersion(GetGetIdentityNotificationAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}