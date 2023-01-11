package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPhotoRecognizeReceiptRequestBodyImageFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public ImageOcrPhotoRecognizeReceiptRequestBodyImageFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=imageFile")
    public String imageFile;
    public ImageOcrPhotoRecognizeReceiptRequestBodyImageFile withImageFile(String imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}