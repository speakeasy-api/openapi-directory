package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMessageCommentsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=body")
    public String body;
    public PostMessageCommentsRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostMessageCommentsRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}