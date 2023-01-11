package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomFieldSettingsForProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public GetCustomFieldSettingsForProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}