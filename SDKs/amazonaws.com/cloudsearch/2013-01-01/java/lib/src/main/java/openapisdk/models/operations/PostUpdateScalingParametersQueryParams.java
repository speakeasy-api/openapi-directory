package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateScalingParametersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateScalingParametersActionEnum action;
    public PostUpdateScalingParametersQueryParams withAction(PostUpdateScalingParametersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateScalingParametersVersionEnum version;
    public PostUpdateScalingParametersQueryParams withVersion(PostUpdateScalingParametersVersionEnum version) {
        this.version = version;
        return this;
    }
}