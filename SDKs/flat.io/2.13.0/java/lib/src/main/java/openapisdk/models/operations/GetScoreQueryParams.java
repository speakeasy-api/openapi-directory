package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScoreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public GetScoreQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
}