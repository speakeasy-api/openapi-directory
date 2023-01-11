package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileActionBeginUploadRequestBody {
    @SpeakeasyMetadata("multipartForm:name=mkdir_parents")
    public Boolean mkdirParents;
    public FileActionBeginUploadRequestBody withMkdirParents(Boolean mkdirParents) {
        this.mkdirParents = mkdirParents;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=part")
    public Integer part;
    public FileActionBeginUploadRequestBody withPart(Integer part) {
        this.part = part;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=parts")
    public Integer parts;
    public FileActionBeginUploadRequestBody withParts(Integer parts) {
        this.parts = parts;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ref")
    public String ref;
    public FileActionBeginUploadRequestBody withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=restart")
    public Integer restart;
    public FileActionBeginUploadRequestBody withRestart(Integer restart) {
        this.restart = restart;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=with_rename")
    public Boolean withRename;
    public FileActionBeginUploadRequestBody withWithRename(Boolean withRename) {
        this.withRename = withRename;
        return this;
    }
}