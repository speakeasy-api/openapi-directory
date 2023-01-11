package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSwapEnvironmentCnamEsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSwapEnvironmentCnamEsActionEnum action;
    public PostSwapEnvironmentCnamEsQueryParams withAction(PostSwapEnvironmentCnamEsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSwapEnvironmentCnamEsVersionEnum version;
    public PostSwapEnvironmentCnamEsQueryParams withVersion(PostSwapEnvironmentCnamEsVersionEnum version) {
        this.version = version;
        return this;
    }
}