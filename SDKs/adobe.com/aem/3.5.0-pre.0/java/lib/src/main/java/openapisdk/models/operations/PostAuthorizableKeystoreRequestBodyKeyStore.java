package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizableKeystoreRequestBodyKeyStore {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostAuthorizableKeystoreRequestBodyKeyStore withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=keyStore")
    public String keyStore;
    public PostAuthorizableKeystoreRequestBodyKeyStore withKeyStore(String keyStore) {
        this.keyStore = keyStore;
        return this;
    }
}