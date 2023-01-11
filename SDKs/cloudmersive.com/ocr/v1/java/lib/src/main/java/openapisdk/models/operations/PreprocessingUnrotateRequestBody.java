package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprocessingUnrotateRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PreprocessingUnrotateRequestBodyImageFile imageFile;
    public PreprocessingUnrotateRequestBody withImageFile(PreprocessingUnrotateRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}