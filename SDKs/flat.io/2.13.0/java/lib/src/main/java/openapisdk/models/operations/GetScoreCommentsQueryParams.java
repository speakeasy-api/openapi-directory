package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScoreCommentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetScoreCommentsDirectionEnum direction;
    public GetScoreCommentsQueryParams withDirection(GetScoreCommentsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public GetScoreCommentsQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetScoreCommentsSortEnum sort;
    public GetScoreCommentsQueryParams withSort(GetScoreCommentsSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetScoreCommentsTypeEnum type;
    public GetScoreCommentsQueryParams withType(GetScoreCommentsTypeEnum type) {
        this.type = type;
        return this;
    }
}