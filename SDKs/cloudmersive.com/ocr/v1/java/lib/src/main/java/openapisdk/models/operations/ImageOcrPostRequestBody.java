package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPostRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public ImageOcrPostRequestBodyImageFile imageFile;
    public ImageOcrPostRequestBody withImageFile(ImageOcrPostRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}