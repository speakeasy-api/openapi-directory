package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetIdentityMailFromDomainAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetIdentityMailFromDomainAttributesActionEnum action;
    public GetGetIdentityMailFromDomainAttributesQueryParams withAction(GetGetIdentityMailFromDomainAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identities")
    public String[] identities;
    public GetGetIdentityMailFromDomainAttributesQueryParams withIdentities(String[] identities) {
        this.identities = identities;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetIdentityMailFromDomainAttributesVersionEnum version;
    public GetGetIdentityMailFromDomainAttributesQueryParams withVersion(GetGetIdentityMailFromDomainAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}