package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3VideosIdDownloadhistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetV3VideosIdDownloadhistoryPathParams withId(String id) {
        this.id = id;
        return this;
    }
}