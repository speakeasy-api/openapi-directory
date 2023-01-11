package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PdfOcrPdfToWordsWithLocationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=language")
    public String language;
    public PdfOcrPdfToWordsWithLocationHeaders withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=preprocessing")
    public String preprocessing;
    public PdfOcrPdfToWordsWithLocationHeaders withPreprocessing(String preprocessing) {
        this.preprocessing = preprocessing;
        return this;
    }
}