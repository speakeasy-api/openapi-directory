package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUserPublicKeysRequestBody {
    @SpeakeasyMetadata("multipartForm:name=public_key")
    public String publicKey;
    public PostUserPublicKeysRequestBody withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=title")
    public String title;
    public PostUserPublicKeysRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostUserPublicKeysRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}