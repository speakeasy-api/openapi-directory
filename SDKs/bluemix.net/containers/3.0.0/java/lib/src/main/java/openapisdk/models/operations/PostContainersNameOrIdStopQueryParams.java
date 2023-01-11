package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersNameOrIdStopQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t")
    public Long t;
    public PostContainersNameOrIdStopQueryParams withT(Long t) {
        this.t = t;
        return this;
    }
}