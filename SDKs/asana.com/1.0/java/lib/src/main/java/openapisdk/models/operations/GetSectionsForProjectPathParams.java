package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSectionsForProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public GetSectionsForProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}