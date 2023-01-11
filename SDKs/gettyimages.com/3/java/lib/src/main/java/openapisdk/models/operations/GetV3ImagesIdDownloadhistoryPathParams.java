package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3ImagesIdDownloadhistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetV3ImagesIdDownloadhistoryPathParams withId(String id) {
        this.id = id;
        return this;
    }
}