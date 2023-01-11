package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PdfOcrPostRequestBodyImageFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PdfOcrPostRequestBodyImageFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=imageFile")
    public String imageFile;
    public PdfOcrPostRequestBodyImageFile withImageFile(String imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}