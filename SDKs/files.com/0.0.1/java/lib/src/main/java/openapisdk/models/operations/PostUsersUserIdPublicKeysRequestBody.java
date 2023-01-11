package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUserIdPublicKeysRequestBody {
    @SpeakeasyMetadata("multipartForm:name=public_key")
    public String publicKey;
    public PostUsersUserIdPublicKeysRequestBody withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=title")
    public String title;
    public PostUsersUserIdPublicKeysRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
}