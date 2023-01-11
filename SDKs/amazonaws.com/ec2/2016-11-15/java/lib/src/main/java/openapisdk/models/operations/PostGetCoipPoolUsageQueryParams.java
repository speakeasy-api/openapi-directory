package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetCoipPoolUsageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetCoipPoolUsageActionEnum action;
    public PostGetCoipPoolUsageQueryParams withAction(PostGetCoipPoolUsageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetCoipPoolUsageVersionEnum version;
    public PostGetCoipPoolUsageQueryParams withVersion(PostGetCoipPoolUsageVersionEnum version) {
        this.version = version;
        return this;
    }
}