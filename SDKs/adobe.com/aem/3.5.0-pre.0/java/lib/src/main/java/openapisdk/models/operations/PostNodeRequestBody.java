package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNodeRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostNodeRequestBodyFile file;
    public PostNodeRequestBody withFile(PostNodeRequestBodyFile file) {
        this.file = file;
        return this;
    }
}