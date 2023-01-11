package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientToken")
    public String clientToken;
    public SendMessageRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("Content")
    public String content;
    public SendMessageRequestBody withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonProperty("ContentType")
    public String contentType;
    public SendMessageRequestBody withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}