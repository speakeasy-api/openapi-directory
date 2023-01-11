package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGifByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gifId")
    public Integer gifId;
    public GetGifByIdPathParams withGifId(Integer gifId) {
        this.gifId = gifId;
        return this;
    }
}