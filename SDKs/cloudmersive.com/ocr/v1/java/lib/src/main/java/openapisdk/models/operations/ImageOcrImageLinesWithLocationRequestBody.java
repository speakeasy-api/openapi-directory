package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrImageLinesWithLocationRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public ImageOcrImageLinesWithLocationRequestBodyImageFile imageFile;
    public ImageOcrImageLinesWithLocationRequestBody withImageFile(ImageOcrImageLinesWithLocationRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}