package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemoveTagsFromResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRemoveTagsFromResourceActionEnum action;
    public GetRemoveTagsFromResourceQueryParams withAction(GetRemoveTagsFromResourceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ResourceName")
    public String resourceName;
    public GetRemoveTagsFromResourceQueryParams withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TagKeys")
    public String[] tagKeys;
    public GetRemoveTagsFromResourceQueryParams withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRemoveTagsFromResourceVersionEnum version;
    public GetRemoveTagsFromResourceQueryParams withVersion(GetRemoveTagsFromResourceVersionEnum version) {
        this.version = version;
        return this;
    }
}