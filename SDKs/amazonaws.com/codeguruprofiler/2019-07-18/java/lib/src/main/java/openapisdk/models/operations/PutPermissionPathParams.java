package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionGroup")
    public PutPermissionActionGroupEnum actionGroup;
    public PutPermissionPathParams withActionGroup(PutPermissionActionGroupEnum actionGroup) {
        this.actionGroup = actionGroup;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profilingGroupName")
    public String profilingGroupName;
    public PutPermissionPathParams withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
}