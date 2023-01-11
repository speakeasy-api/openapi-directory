package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDownloadDbLogFilePortionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDownloadDbLogFilePortionActionEnum action;
    public PostDownloadDbLogFilePortionQueryParams withAction(PostDownloadDbLogFilePortionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDownloadDbLogFilePortionVersionEnum version;
    public PostDownloadDbLogFilePortionQueryParams withVersion(PostDownloadDbLogFilePortionVersionEnum version) {
        this.version = version;
        return this;
    }
}