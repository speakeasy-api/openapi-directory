package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPhotoRecognizeBusinessCardRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile imageFile;
    public ImageOcrPhotoRecognizeBusinessCardRequestBody withImageFile(ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}