package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecommendationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profilingGroupName")
    public String profilingGroupName;
    public GetRecommendationsPathParams withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
}