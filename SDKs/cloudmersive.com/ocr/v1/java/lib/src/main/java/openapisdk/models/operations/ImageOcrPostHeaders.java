package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPostHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=language")
    public String language;
    public ImageOcrPostHeaders withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=preprocessing")
    public String preprocessing;
    public ImageOcrPostHeaders withPreprocessing(String preprocessing) {
        this.preprocessing = preprocessing;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=recognitionMode")
    public String recognitionMode;
    public ImageOcrPostHeaders withRecognitionMode(String recognitionMode) {
        this.recognitionMode = recognitionMode;
        return this;
    }
}