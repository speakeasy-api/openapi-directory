package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV3BoardsBoardIdCommentsRequest {
    public PostV3BoardsBoardIdCommentsPathParams pathParams;
    public PostV3BoardsBoardIdCommentsRequest withPathParams(PostV3BoardsBoardIdCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CommentRequest request;
    public PostV3BoardsBoardIdCommentsRequest withRequest(openapisdk.models.shared.CommentRequest request) {
        this.request = request;
        return this;
    }
}