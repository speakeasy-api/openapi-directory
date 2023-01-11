package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizableKeystoreRequestBodyCertChain {
    @SpeakeasyMetadata("multipartForm:name=cert-chain")
    public String certChain;
    public PostAuthorizableKeystoreRequestBodyCertChain withCertChain(String certChain) {
        this.certChain = certChain;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostAuthorizableKeystoreRequestBodyCertChain withContent(byte[] content) {
        this.content = content;
        return this;
    }
}