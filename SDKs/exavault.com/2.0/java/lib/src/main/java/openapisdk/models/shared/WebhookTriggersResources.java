package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookTriggersResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compress")
    public Boolean compress;
    public WebhookTriggersResources withCompress(Boolean compress) {
        this.compress = compress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copy")
    public Boolean copy;
    public WebhookTriggersResources withCopy(Boolean copy) {
        this.copy = copy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createFolder")
    public Boolean createFolder;
    public WebhookTriggersResources withCreateFolder(Boolean createFolder) {
        this.createFolder = createFolder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public Boolean delete;
    public WebhookTriggersResources withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public WebhookTriggersResources withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extract")
    public Boolean extract;
    public WebhookTriggersResources withExtract(Boolean extract) {
        this.extract = extract;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("move")
    public Boolean move;
    public WebhookTriggersResources withMove(Boolean move) {
        this.move = move;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rename")
    public Boolean rename;
    public WebhookTriggersResources withRename(Boolean rename) {
        this.rename = rename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upload")
    public Boolean upload;
    public WebhookTriggersResources withUpload(Boolean upload) {
        this.upload = upload;
        return this;
    }
}