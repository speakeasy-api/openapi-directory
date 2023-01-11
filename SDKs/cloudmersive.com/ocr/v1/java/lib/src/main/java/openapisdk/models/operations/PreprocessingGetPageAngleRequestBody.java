package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprocessingGetPageAngleRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PreprocessingGetPageAngleRequestBodyImageFile imageFile;
    public PreprocessingGetPageAngleRequestBody withImageFile(PreprocessingGetPageAngleRequestBodyImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}