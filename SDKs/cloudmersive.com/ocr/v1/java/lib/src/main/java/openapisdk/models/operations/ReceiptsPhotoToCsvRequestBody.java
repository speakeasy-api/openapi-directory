package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReceiptsPhotoToCsvRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public ReceiptsPhotoToCsvRequestBodyImageFile imageFile;
    public ReceiptsPhotoToCsvRequestBody withImageFile(ReceiptsPhotoToCsvRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}