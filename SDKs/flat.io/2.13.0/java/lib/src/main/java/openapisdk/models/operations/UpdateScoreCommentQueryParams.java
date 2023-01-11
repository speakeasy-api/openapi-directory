package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateScoreCommentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public UpdateScoreCommentQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
}