package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListAccountAliasesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListAccountAliasesActionEnum action;
    public PostListAccountAliasesQueryParams withAction(PostListAccountAliasesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListAccountAliasesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListAccountAliasesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListAccountAliasesVersionEnum version;
    public PostListAccountAliasesQueryParams withVersion(PostListAccountAliasesVersionEnum version) {
        this.version = version;
        return this;
    }
}