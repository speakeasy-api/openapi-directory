package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableMetricsCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisableMetricsCollectionActionEnum action;
    public PostDisableMetricsCollectionQueryParams withAction(PostDisableMetricsCollectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisableMetricsCollectionVersionEnum version;
    public PostDisableMetricsCollectionQueryParams withVersion(PostDisableMetricsCollectionVersionEnum version) {
        this.version = version;
        return this;
    }
}