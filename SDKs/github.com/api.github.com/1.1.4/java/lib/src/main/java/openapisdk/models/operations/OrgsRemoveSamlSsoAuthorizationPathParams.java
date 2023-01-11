package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsRemoveSamlSsoAuthorizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=credential_id")
    public Long credentialId;
    public OrgsRemoveSamlSsoAuthorizationPathParams withCredentialId(Long credentialId) {
        this.credentialId = credentialId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsRemoveSamlSsoAuthorizationPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}