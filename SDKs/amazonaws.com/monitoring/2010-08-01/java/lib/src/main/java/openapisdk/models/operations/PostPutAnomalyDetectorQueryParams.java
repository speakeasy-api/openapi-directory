package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutAnomalyDetectorQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutAnomalyDetectorActionEnum action;
    public PostPutAnomalyDetectorQueryParams withAction(PostPutAnomalyDetectorActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutAnomalyDetectorVersionEnum version;
    public PostPutAnomalyDetectorQueryParams withVersion(PostPutAnomalyDetectorVersionEnum version) {
        this.version = version;
        return this;
    }
}