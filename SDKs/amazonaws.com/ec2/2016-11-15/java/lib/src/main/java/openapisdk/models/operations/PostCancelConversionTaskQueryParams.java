package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelConversionTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCancelConversionTaskActionEnum action;
    public PostCancelConversionTaskQueryParams withAction(PostCancelConversionTaskActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCancelConversionTaskVersionEnum version;
    public PostCancelConversionTaskQueryParams withVersion(PostCancelConversionTaskVersionEnum version) {
        this.version = version;
        return this;
    }
}