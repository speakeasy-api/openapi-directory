package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprocessingUnrotateAdvancedRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PreprocessingUnrotateAdvancedRequestBodyImageFile imageFile;
    public PreprocessingUnrotateAdvancedRequestBody withImageFile(PreprocessingUnrotateAdvancedRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}