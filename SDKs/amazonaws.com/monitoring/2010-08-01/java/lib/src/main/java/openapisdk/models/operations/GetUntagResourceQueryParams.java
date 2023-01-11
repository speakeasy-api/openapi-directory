package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntagResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUntagResourceActionEnum action;
    public GetUntagResourceQueryParams withAction(GetUntagResourceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ResourceARN")
    public String resourceARN;
    public GetUntagResourceQueryParams withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TagKeys")
    public String[] tagKeys;
    public GetUntagResourceQueryParams withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUntagResourceVersionEnum version;
    public GetUntagResourceQueryParams withVersion(GetUntagResourceVersionEnum version) {
        this.version = version;
        return this;
    }
}