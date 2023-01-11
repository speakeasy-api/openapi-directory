package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTruststorePkcs12RequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostTruststorePkcs12RequestBodyTruststoreP12 truststoreP12;
    public PostTruststorePkcs12RequestBody withTruststoreP12(PostTruststorePkcs12RequestBodyTruststoreP12 truststoreP12) {
        this.truststoreP12 = truststoreP12;
        return this;
    }
}