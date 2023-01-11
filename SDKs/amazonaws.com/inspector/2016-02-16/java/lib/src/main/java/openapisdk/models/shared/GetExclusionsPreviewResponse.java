package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetExclusionsPreviewResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusionPreviews")
    public ExclusionPreview[] exclusionPreviews;
    public GetExclusionsPreviewResponse withExclusionPreviews(ExclusionPreview[] exclusionPreviews) {
        this.exclusionPreviews = exclusionPreviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetExclusionsPreviewResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("previewStatus")
    public PreviewStatusEnum previewStatus;
    public GetExclusionsPreviewResponse withPreviewStatus(PreviewStatusEnum previewStatus) {
        this.previewStatus = previewStatus;
        return this;
    }
}