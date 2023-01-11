package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ClassifyDocumentRequest {
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public ClassifyDocumentRequest withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
    @JsonProperty("Text")
    public String text;
    public ClassifyDocumentRequest withText(String text) {
        this.text = text;
        return this;
    }
}