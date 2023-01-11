package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizableKeystoreRequestBodyPk {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostAuthorizableKeystoreRequestBodyPk withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=pk")
    public String pk;
    public PostAuthorizableKeystoreRequestBodyPk withPk(String pk) {
        this.pk = pk;
        return this;
    }
}