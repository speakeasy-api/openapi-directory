package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsRemoveOutsideCollaboratorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsRemoveOutsideCollaboratorPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public OrgsRemoveOutsideCollaboratorPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}