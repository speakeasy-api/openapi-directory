package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateExclusionsPreviewResponse {
    @JsonProperty("previewToken")
    public String previewToken;
    public CreateExclusionsPreviewResponse withPreviewToken(String previewToken) {
        this.previewToken = previewToken;
        return this;
    }
}