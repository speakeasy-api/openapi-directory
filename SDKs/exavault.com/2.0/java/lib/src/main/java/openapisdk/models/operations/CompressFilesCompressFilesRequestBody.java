package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CompressFilesCompressFilesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archiveName")
    public String archiveName;
    public CompressFilesCompressFilesRequestBody withArchiveName(String archiveName) {
        this.archiveName = archiveName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentResource")
    public String parentResource;
    public CompressFilesCompressFilesRequestBody withParentResource(String parentResource) {
        this.parentResource = parentResource;
        return this;
    }
    @JsonProperty("resources")
    public String[] resources;
    public CompressFilesCompressFilesRequestBody withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
}