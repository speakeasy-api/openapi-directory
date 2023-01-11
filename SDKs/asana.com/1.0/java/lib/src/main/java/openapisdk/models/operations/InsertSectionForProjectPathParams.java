package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InsertSectionForProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public InsertSectionForProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}