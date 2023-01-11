package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFindingsReportsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profilingGroupName")
    public String profilingGroupName;
    public ListFindingsReportsPathParams withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
}