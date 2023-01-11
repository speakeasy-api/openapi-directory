package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMessageCommentReactionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetMessageCommentReactionsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=message_comment_id")
    public Integer messageCommentId;
    public GetMessageCommentReactionsQueryParams withMessageCommentId(Integer messageCommentId) {
        this.messageCommentId = messageCommentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetMessageCommentReactionsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public Integer userId;
    public GetMessageCommentReactionsQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}