package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprocessingUnskewRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PreprocessingUnskewRequestBodyImageFile imageFile;
    public PreprocessingUnskewRequestBody withImageFile(PreprocessingUnskewRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}