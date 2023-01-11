package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=imageFile")
    public String imageFile;
    public ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile withImageFile(String imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}