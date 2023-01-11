package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFileCommentsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=body")
    public String body;
    public PostFileCommentsRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public PostFileCommentsRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
}