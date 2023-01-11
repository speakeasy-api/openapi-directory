package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSectionForProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public CreateSectionForProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}