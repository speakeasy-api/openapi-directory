package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScoreTrackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public GetScoreTrackQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
}