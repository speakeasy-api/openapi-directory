package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizableKeystoreRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostAuthorizableKeystoreRequestBodyCertChain certChain;
    public PostAuthorizableKeystoreRequestBody withCertChain(PostAuthorizableKeystoreRequestBodyCertChain certChain) {
        this.certChain = certChain;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public PostAuthorizableKeystoreRequestBodyKeyStore keyStore;
    public PostAuthorizableKeystoreRequestBody withKeyStore(PostAuthorizableKeystoreRequestBodyKeyStore keyStore) {
        this.keyStore = keyStore;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public PostAuthorizableKeystoreRequestBodyPk pk;
    public PostAuthorizableKeystoreRequestBody withPk(PostAuthorizableKeystoreRequestBodyPk pk) {
        this.pk = pk;
        return this;
    }
}