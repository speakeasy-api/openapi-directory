package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTemplatesResponse {
    @JsonProperty("TemplatesResponse")
    public TemplatesResponse templatesResponse;
    public ListTemplatesResponse withTemplatesResponse(TemplatesResponse templatesResponse) {
        this.templatesResponse = templatesResponse;
        return this;
    }
}