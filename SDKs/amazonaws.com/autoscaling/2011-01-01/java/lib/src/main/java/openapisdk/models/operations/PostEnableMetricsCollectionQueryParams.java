package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableMetricsCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableMetricsCollectionActionEnum action;
    public PostEnableMetricsCollectionQueryParams withAction(PostEnableMetricsCollectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableMetricsCollectionVersionEnum version;
    public PostEnableMetricsCollectionQueryParams withVersion(PostEnableMetricsCollectionVersionEnum version) {
        this.version = version;
        return this;
    }
}