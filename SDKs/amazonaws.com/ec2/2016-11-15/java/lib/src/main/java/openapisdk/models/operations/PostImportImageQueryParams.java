package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImportImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostImportImageActionEnum action;
    public PostImportImageQueryParams withAction(PostImportImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostImportImageVersionEnum version;
    public PostImportImageQueryParams withVersion(PostImportImageVersionEnum version) {
        this.version = version;
        return this;
    }
}