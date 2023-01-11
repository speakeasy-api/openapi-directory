package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddCustomFieldSettingForProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public AddCustomFieldSettingForProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}