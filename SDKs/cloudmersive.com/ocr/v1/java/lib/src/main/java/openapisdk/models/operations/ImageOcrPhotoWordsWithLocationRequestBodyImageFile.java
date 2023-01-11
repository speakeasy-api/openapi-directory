package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPhotoWordsWithLocationRequestBodyImageFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public ImageOcrPhotoWordsWithLocationRequestBodyImageFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=imageFile")
    public String imageFile;
    public ImageOcrPhotoWordsWithLocationRequestBodyImageFile withImageFile(String imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}