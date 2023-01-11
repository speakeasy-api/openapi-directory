package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Message {
    @JsonProperty("content")
    public String content;
    public Message withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public Message withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("to")
    public String[] to;
    public Message withTo(String[] to) {
        this.to = to;
        return this;
    }
}