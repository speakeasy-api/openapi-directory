package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMessageCommentReactionsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=emoji")
    public String emoji;
    public PostMessageCommentReactionsRequestBody withEmoji(String emoji) {
        this.emoji = emoji;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostMessageCommentReactionsRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}