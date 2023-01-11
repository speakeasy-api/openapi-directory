package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteArchiveRequest {
    @JsonProperty("ArchiveName")
    public String archiveName;
    public DeleteArchiveRequest withArchiveName(String archiveName) {
        this.archiveName = archiveName;
        return this;
    }
}