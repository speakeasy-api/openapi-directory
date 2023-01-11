package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectEntitiesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public DetectEntitiesRequest withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public DetectEntitiesRequest withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonProperty("Text")
    public String text;
    public DetectEntitiesRequest withText(String text) {
        this.text = text;
        return this;
    }
}