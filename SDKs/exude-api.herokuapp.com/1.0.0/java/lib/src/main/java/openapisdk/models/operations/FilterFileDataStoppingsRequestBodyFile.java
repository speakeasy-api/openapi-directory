package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilterFileDataStoppingsRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public FilterFileDataStoppingsRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public FilterFileDataStoppingsRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}