package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPhotoRecognizeReceiptRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public ImageOcrPhotoRecognizeReceiptRequestBodyImageFile imageFile;
    public ImageOcrPhotoRecognizeReceiptRequestBody withImageFile(ImageOcrPhotoRecognizeReceiptRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}