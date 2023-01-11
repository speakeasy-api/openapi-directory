package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAnomalyDetectorQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteAnomalyDetectorActionEnum action;
    public PostDeleteAnomalyDetectorQueryParams withAction(PostDeleteAnomalyDetectorActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteAnomalyDetectorVersionEnum version;
    public PostDeleteAnomalyDetectorQueryParams withVersion(PostDeleteAnomalyDetectorVersionEnum version) {
        this.version = version;
        return this;
    }
}