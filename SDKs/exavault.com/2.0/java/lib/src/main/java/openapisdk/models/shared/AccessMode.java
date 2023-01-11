package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessMode
 * An object defining what a not-logged-in visitor can do with the share contents
**/
public class AccessMode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public Boolean delete;
    public AccessMode withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public AccessMode withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modify")
    public Boolean modify;
    public AccessMode withModify(Boolean modify) {
        this.modify = modify;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upload")
    public Boolean upload;
    public AccessMode withUpload(Boolean upload) {
        this.upload = upload;
        return this;
    }
}