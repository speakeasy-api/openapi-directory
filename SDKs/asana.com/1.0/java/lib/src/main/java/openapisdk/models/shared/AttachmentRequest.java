package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachmentRequest {
    @SpeakeasyMetadata("multipartForm:file")
    public AttachmentRequestFile file;
    public AttachmentRequest withFile(AttachmentRequestFile file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public AttachmentRequest withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=resource_subtype")
    public AttachmentRequestResourceSubtypeEnum resourceSubtype;
    public AttachmentRequest withResourceSubtype(AttachmentRequestResourceSubtypeEnum resourceSubtype) {
        this.resourceSubtype = resourceSubtype;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=url")
    public String url;
    public AttachmentRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}