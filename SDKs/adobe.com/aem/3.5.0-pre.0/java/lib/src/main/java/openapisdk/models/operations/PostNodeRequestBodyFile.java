package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNodeRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostNodeRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public PostNodeRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}