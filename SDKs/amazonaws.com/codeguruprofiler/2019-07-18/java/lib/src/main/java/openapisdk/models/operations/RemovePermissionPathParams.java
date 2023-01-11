package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemovePermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionGroup")
    public RemovePermissionActionGroupEnum actionGroup;
    public RemovePermissionPathParams withActionGroup(RemovePermissionActionGroupEnum actionGroup) {
        this.actionGroup = actionGroup;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profilingGroupName")
    public String profilingGroupName;
    public RemovePermissionPathParams withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
}