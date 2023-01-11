package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FileId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_id")
    public Long fileId;
    public FileId withFileId(Long fileId) {
        this.fileId = fileId;
        return this;
    }
}