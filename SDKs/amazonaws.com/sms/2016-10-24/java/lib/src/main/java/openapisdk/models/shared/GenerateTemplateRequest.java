package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenerateTemplateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public GenerateTemplateRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateFormat")
    public OutputFormatEnum templateFormat;
    public GenerateTemplateRequest withTemplateFormat(OutputFormatEnum templateFormat) {
        this.templateFormat = templateFormat;
        return this;
    }
}