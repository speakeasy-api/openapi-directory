package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrImageWordsWithLocationRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public ImageOcrImageWordsWithLocationRequestBodyImageFile imageFile;
    public ImageOcrImageWordsWithLocationRequestBody withImageFile(ImageOcrImageWordsWithLocationRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}