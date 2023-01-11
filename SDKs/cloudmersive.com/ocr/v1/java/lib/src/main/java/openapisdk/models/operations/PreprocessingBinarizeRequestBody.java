package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprocessingBinarizeRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PreprocessingBinarizeRequestBodyImageFile imageFile;
    public PreprocessingBinarizeRequestBody withImageFile(PreprocessingBinarizeRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}