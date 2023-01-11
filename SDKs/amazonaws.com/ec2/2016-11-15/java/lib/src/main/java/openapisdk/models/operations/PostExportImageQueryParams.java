package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExportImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostExportImageActionEnum action;
    public PostExportImageQueryParams withAction(PostExportImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostExportImageVersionEnum version;
    public PostExportImageQueryParams withVersion(PostExportImageVersionEnum version) {
        this.version = version;
        return this;
    }
}