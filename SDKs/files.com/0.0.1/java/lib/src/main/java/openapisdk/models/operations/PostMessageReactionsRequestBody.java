package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMessageReactionsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=emoji")
    public String emoji;
    public PostMessageReactionsRequestBody withEmoji(String emoji) {
        this.emoji = emoji;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostMessageReactionsRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}