package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPhotoRecognizeFormAdvancedRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile imageFile;
    public ImageOcrPhotoRecognizeFormAdvancedRequestBody withImageFile(ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}