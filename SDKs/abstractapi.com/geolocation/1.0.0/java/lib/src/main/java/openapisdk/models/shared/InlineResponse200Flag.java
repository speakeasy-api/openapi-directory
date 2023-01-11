package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InlineResponse200Flag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emoji")
    public String emoji;
    public InlineResponse200Flag withEmoji(String emoji) {
        this.emoji = emoji;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("png")
    public String png;
    public InlineResponse200Flag withPng(String png) {
        this.png = png;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("svg")
    public String svg;
    public InlineResponse200Flag withSvg(String svg) {
        this.svg = svg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unicode")
    public String unicode;
    public InlineResponse200Flag withUnicode(String unicode) {
        this.unicode = unicode;
        return this;
    }
}