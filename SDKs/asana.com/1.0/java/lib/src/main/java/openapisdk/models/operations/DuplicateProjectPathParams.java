package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DuplicateProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public DuplicateProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}