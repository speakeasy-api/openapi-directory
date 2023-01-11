package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SendSmsRequest
 * Send SMS Request
**/
public class SendSmsRequest {
    @JsonProperty("content")
    public String content;
    public SendSmsRequest withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendSmsRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("to")
    public Long to;
    public SendSmsRequest withTo(Long to) {
        this.to = to;
        return this;
    }
}