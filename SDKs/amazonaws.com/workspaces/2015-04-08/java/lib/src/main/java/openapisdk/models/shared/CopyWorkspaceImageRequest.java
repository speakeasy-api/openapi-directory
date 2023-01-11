package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CopyWorkspaceImageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CopyWorkspaceImageRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CopyWorkspaceImageRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SourceImageId")
    public String sourceImageId;
    public CopyWorkspaceImageRequest withSourceImageId(String sourceImageId) {
        this.sourceImageId = sourceImageId;
        return this;
    }
    @JsonProperty("SourceRegion")
    public String sourceRegion;
    public CopyWorkspaceImageRequest withSourceRegion(String sourceRegion) {
        this.sourceRegion = sourceRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CopyWorkspaceImageRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}