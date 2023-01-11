package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMessageReactionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetMessageReactionsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=message_id")
    public Integer messageId;
    public GetMessageReactionsQueryParams withMessageId(Integer messageId) {
        this.messageId = messageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetMessageReactionsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public Integer userId;
    public GetMessageReactionsQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}