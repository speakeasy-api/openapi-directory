package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Preview
 * A collection of rich text that will be displayed as a preview to another app.
 * 
 * This is read-only except for a small group of whitelisted apps.
**/
public class Preview {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fallback")
    public String fallback;
    public Preview withFallback(String fallback) {
        this.fallback = fallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("footer")
    public String footer;
    public Preview withFooter(String footer) {
        this.footer = footer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public String header;
    public Preview withHeader(String header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header_link")
    public String headerLink;
    public Preview withHeaderLink(String headerLink) {
        this.headerLink = headerLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_text")
    public String htmlText;
    public Preview withHtmlText(String htmlText) {
        this.htmlText = htmlText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public Preview withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Preview withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title_link")
    public String titleLink;
    public Preview withTitleLink(String titleLink) {
        this.titleLink = titleLink;
        return this;
    }
}