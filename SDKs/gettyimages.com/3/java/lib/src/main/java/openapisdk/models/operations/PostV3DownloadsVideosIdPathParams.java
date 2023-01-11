package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV3DownloadsVideosIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PostV3DownloadsVideosIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}