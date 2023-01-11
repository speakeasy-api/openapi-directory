package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTruststoreRequestBodyCertificate {
    @SpeakeasyMetadata("multipartForm:name=certificate")
    public String certificate;
    public PostTruststoreRequestBodyCertificate withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostTruststoreRequestBodyCertificate withContent(byte[] content) {
        this.content = content;
        return this;
    }
}