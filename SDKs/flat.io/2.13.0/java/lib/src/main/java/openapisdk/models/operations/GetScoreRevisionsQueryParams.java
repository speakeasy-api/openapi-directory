package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScoreRevisionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public GetScoreRevisionsQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
}