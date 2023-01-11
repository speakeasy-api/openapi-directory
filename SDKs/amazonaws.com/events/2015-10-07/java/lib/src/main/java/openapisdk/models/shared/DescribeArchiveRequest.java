package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeArchiveRequest {
    @JsonProperty("ArchiveName")
    public String archiveName;
    public DescribeArchiveRequest withArchiveName(String archiveName) {
        this.archiveName = archiveName;
        return this;
    }
}