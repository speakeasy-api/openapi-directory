package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFileCommentReactionsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=emoji")
    public String emoji;
    public PostFileCommentReactionsRequestBody withEmoji(String emoji) {
        this.emoji = emoji;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file_comment_id")
    public Integer fileCommentId;
    public PostFileCommentReactionsRequestBody withFileCommentId(Integer fileCommentId) {
        this.fileCommentId = fileCommentId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostFileCommentReactionsRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}