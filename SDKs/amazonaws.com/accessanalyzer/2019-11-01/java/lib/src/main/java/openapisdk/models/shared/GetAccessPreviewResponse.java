package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAccessPreviewResponse {
    @JsonProperty("accessPreview")
    public AccessPreview accessPreview;
    public GetAccessPreviewResponse withAccessPreview(AccessPreview accessPreview) {
        this.accessPreview = accessPreview;
        return this;
    }
}