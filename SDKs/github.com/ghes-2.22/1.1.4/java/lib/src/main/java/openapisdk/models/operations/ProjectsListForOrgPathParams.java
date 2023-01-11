package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsListForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ProjectsListForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}