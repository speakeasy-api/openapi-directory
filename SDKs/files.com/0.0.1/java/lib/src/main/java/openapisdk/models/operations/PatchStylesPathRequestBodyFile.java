package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchStylesPathRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PatchStylesPathRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public PatchStylesPathRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}