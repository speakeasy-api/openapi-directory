package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReceiptsPhotoToCsvRequestBodyImageFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public ReceiptsPhotoToCsvRequestBodyImageFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=imageFile")
    public String imageFile;
    public ReceiptsPhotoToCsvRequestBodyImageFile withImageFile(String imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}