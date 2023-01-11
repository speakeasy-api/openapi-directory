package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPublicKeysRequestBody {
    @SpeakeasyMetadata("multipartForm:name=public_key")
    public String publicKey;
    public PostPublicKeysRequestBody withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=title")
    public String title;
    public PostPublicKeysRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostPublicKeysRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}