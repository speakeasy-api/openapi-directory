package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetConsoleScreenshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetConsoleScreenshotActionEnum action;
    public PostGetConsoleScreenshotQueryParams withAction(PostGetConsoleScreenshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetConsoleScreenshotVersionEnum version;
    public PostGetConsoleScreenshotQueryParams withVersion(PostGetConsoleScreenshotVersionEnum version) {
        this.version = version;
        return this;
    }
}