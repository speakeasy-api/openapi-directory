package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PostFilesPathRequestBody {
    @SpeakeasyMetadata("multipartForm:name=action")
    public String action;
    public PostFilesPathRequestBody withAction(String action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=etags[etag],json")
    public String[] etagsEtag;
    public PostFilesPathRequestBody withEtagsEtag(String[] etagsEtag) {
        this.etagsEtag = etagsEtag;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=etags[part],json")
    public Integer[] etagsPart;
    public PostFilesPathRequestBody withEtagsPart(Integer[] etagsPart) {
        this.etagsPart = etagsPart;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=length")
    public Integer length;
    public PostFilesPathRequestBody withLength(Integer length) {
        this.length = length;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=mkdir_parents")
    public Boolean mkdirParents;
    public PostFilesPathRequestBody withMkdirParents(Boolean mkdirParents) {
        this.mkdirParents = mkdirParents;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=part")
    public Integer part;
    public PostFilesPathRequestBody withPart(Integer part) {
        this.part = part;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=parts")
    public Integer parts;
    public PostFilesPathRequestBody withParts(Integer parts) {
        this.parts = parts;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=provided_mtime")
    public OffsetDateTime providedMtime;
    public PostFilesPathRequestBody withProvidedMtime(OffsetDateTime providedMtime) {
        this.providedMtime = providedMtime;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ref")
    public String ref;
    public PostFilesPathRequestBody withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=restart")
    public Integer restart;
    public PostFilesPathRequestBody withRestart(Integer restart) {
        this.restart = restart;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=size")
    public Integer size;
    public PostFilesPathRequestBody withSize(Integer size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=structure")
    public String structure;
    public PostFilesPathRequestBody withStructure(String structure) {
        this.structure = structure;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=with_rename")
    public Boolean withRename;
    public PostFilesPathRequestBody withWithRename(Boolean withRename) {
        this.withRename = withRename;
        return this;
    }
}