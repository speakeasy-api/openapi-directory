package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBehaviorsRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostBehaviorsRequestBodyAttachmentFile attachmentFile;
    public PostBehaviorsRequestBody withAttachmentFile(PostBehaviorsRequestBodyAttachmentFile attachmentFile) {
        this.attachmentFile = attachmentFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=behavior")
    public String behavior;
    public PostBehaviorsRequestBody withBehavior(String behavior) {
        this.behavior = behavior;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public PostBehaviorsRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=value")
    public String value;
    public PostBehaviorsRequestBody withValue(String value) {
        this.value = value;
        return this;
    }
}