package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ForkScoreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public ForkScoreQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
}