package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPhotoToTextHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=language")
    public String language;
    public ImageOcrPhotoToTextHeaders withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=recognitionMode")
    public String recognitionMode;
    public ImageOcrPhotoToTextHeaders withRecognitionMode(String recognitionMode) {
        this.recognitionMode = recognitionMode;
        return this;
    }
}