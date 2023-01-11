package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemoveTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRemoveTagsActionEnum action;
    public GetRemoveTagsQueryParams withAction(GetRemoveTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ResourceArns")
    public String[] resourceArns;
    public GetRemoveTagsQueryParams withResourceArns(String[] resourceArns) {
        this.resourceArns = resourceArns;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TagKeys")
    public String[] tagKeys;
    public GetRemoveTagsQueryParams withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRemoveTagsVersionEnum version;
    public GetRemoveTagsQueryParams withVersion(GetRemoveTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}