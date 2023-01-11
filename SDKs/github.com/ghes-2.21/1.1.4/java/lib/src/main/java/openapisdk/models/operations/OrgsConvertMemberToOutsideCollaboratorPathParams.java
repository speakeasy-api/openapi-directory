package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsConvertMemberToOutsideCollaboratorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsConvertMemberToOutsideCollaboratorPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public OrgsConvertMemberToOutsideCollaboratorPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}