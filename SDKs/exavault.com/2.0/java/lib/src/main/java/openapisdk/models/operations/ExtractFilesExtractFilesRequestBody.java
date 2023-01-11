package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ExtractFilesExtractFilesRequestBody {
    @JsonProperty("parentResource")
    public String parentResource;
    public ExtractFilesExtractFilesRequestBody withParentResource(String parentResource) {
        this.parentResource = parentResource;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public ExtractFilesExtractFilesRequestBody withResource(String resource) {
        this.resource = resource;
        return this;
    }
}