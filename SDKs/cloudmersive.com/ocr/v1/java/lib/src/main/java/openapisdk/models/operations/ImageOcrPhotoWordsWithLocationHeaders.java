package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPhotoWordsWithLocationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=diagnostics")
    public String diagnostics;
    public ImageOcrPhotoWordsWithLocationHeaders withDiagnostics(String diagnostics) {
        this.diagnostics = diagnostics;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=language")
    public String language;
    public ImageOcrPhotoWordsWithLocationHeaders withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=preprocessing")
    public String preprocessing;
    public ImageOcrPhotoWordsWithLocationHeaders withPreprocessing(String preprocessing) {
        this.preprocessing = preprocessing;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=recognitionMode")
    public String recognitionMode;
    public ImageOcrPhotoWordsWithLocationHeaders withRecognitionMode(String recognitionMode) {
        this.recognitionMode = recognitionMode;
        return this;
    }
}