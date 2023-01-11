package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostScoreCommentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public PostScoreCommentQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
}