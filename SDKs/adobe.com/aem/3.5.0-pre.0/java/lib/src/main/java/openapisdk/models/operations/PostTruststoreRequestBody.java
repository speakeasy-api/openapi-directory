package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTruststoreRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostTruststoreRequestBodyCertificate certificate;
    public PostTruststoreRequestBody withCertificate(PostTruststoreRequestBodyCertificate certificate) {
        this.certificate = certificate;
        return this;
    }
}