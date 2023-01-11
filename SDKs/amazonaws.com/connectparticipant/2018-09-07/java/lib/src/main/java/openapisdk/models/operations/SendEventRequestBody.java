package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendEventRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientToken")
    public String clientToken;
    public SendEventRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Content")
    public String content;
    public SendEventRequestBody withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonProperty("ContentType")
    public String contentType;
    public SendEventRequestBody withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}