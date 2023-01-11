package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprocessingGetPageAngleRequestBodyImageFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PreprocessingGetPageAngleRequestBodyImageFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=imageFile")
    public String imageFile;
    public PreprocessingGetPageAngleRequestBodyImageFile withImageFile(String imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}