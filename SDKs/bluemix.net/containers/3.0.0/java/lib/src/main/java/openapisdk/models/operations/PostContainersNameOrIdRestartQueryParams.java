package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersNameOrIdRestartQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t")
    public Long t;
    public PostContainersNameOrIdRestartQueryParams withT(Long t) {
        this.t = t;
        return this;
    }
}