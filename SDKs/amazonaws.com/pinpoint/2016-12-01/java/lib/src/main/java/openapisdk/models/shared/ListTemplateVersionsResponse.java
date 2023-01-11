package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTemplateVersionsResponse {
    @JsonProperty("TemplateVersionsResponse")
    public TemplateVersionsResponse templateVersionsResponse;
    public ListTemplateVersionsResponse withTemplateVersionsResponse(TemplateVersionsResponse templateVersionsResponse) {
        this.templateVersionsResponse = templateVersionsResponse;
        return this;
    }
}