package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MarkScoreCommentUnresolvedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public MarkScoreCommentUnresolvedQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
}