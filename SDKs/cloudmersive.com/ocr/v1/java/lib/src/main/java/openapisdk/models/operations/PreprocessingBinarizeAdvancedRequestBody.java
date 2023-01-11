package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprocessingBinarizeAdvancedRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PreprocessingBinarizeAdvancedRequestBodyImageFile imageFile;
    public PreprocessingBinarizeAdvancedRequestBody withImageFile(PreprocessingBinarizeAdvancedRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}