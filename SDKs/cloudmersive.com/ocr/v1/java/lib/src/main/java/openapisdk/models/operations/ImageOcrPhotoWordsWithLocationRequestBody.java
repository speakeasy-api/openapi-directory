package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPhotoWordsWithLocationRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public ImageOcrPhotoWordsWithLocationRequestBodyImageFile imageFile;
    public ImageOcrPhotoWordsWithLocationRequestBody withImageFile(ImageOcrPhotoWordsWithLocationRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}