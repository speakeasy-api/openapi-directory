package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateTemplateActiveVersionRequestBody {
    @JsonProperty("TemplateActiveVersionRequest")
    public UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest templateActiveVersionRequest;
    public UpdateTemplateActiveVersionRequestBody withTemplateActiveVersionRequest(UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest templateActiveVersionRequest) {
        this.templateActiveVersionRequest = templateActiveVersionRequest;
        return this;
    }
}