package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("css")
    public String css;
    public CustomSettings withCss(String css) {
        this.css = css;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("css_link")
    public String cssLink;
    public CustomSettings withCssLink(String cssLink) {
        this.cssLink = cssLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public CustomSettings withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_footer")
    public String htmlFooter;
    public CustomSettings withHtmlFooter(String htmlFooter) {
        this.htmlFooter = htmlFooter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_nav")
    public String htmlNav;
    public CustomSettings withHtmlNav(String htmlNav) {
        this.htmlNav = htmlNav;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("java_script_link")
    public String javaScriptLink;
    public CustomSettings withJavaScriptLink(String javaScriptLink) {
        this.javaScriptLink = javaScriptLink;
        return this;
    }
}