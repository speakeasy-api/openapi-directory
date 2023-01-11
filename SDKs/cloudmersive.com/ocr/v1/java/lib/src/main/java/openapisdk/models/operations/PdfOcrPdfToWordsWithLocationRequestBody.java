package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PdfOcrPdfToWordsWithLocationRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PdfOcrPdfToWordsWithLocationRequestBodyImageFile imageFile;
    public PdfOcrPdfToWordsWithLocationRequestBody withImageFile(PdfOcrPdfToWordsWithLocationRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}