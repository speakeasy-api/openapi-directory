package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchBehaviorsIdRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PatchBehaviorsIdRequestBodyAttachmentFile attachmentFile;
    public PatchBehaviorsIdRequestBody withAttachmentFile(PatchBehaviorsIdRequestBodyAttachmentFile attachmentFile) {
        this.attachmentFile = attachmentFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=behavior")
    public String behavior;
    public PatchBehaviorsIdRequestBody withBehavior(String behavior) {
        this.behavior = behavior;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public PatchBehaviorsIdRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=value")
    public String value;
    public PatchBehaviorsIdRequestBody withValue(String value) {
        this.value = value;
        return this;
    }
}