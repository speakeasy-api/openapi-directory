package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PdfOcrPdfToLinesWithLocationRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PdfOcrPdfToLinesWithLocationRequestBodyImageFile imageFile;
    public PdfOcrPdfToLinesWithLocationRequestBody withImageFile(PdfOcrPdfToLinesWithLocationRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}