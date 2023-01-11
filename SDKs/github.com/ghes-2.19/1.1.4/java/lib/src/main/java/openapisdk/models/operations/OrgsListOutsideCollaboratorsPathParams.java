package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListOutsideCollaboratorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsListOutsideCollaboratorsPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}