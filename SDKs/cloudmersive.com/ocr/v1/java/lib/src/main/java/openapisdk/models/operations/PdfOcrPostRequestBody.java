package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PdfOcrPostRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PdfOcrPostRequestBodyImageFile imageFile;
    public PdfOcrPostRequestBody withImageFile(PdfOcrPostRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}