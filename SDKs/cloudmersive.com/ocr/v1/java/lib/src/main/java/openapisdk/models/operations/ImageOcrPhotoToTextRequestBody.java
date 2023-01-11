package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPhotoToTextRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public ImageOcrPhotoToTextRequestBodyImageFile imageFile;
    public ImageOcrPhotoToTextRequestBody withImageFile(ImageOcrPhotoToTextRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}