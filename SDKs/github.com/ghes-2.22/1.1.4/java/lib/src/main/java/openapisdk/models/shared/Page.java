package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Page
 * The configuration for GitHub Pages for a repository.
**/
public class Page {
    @JsonProperty("cname")
    public String cname;
    public Page withCname(String cname) {
        this.cname = cname;
        return this;
    }
    @JsonProperty("custom_404")
    public Boolean custom404;
    public Page withCustom404(Boolean custom404) {
        this.custom404 = custom404;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;
    public Page withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("https_certificate")
    public PagesHttpsCertificate httpsCertificate;
    public Page withHttpsCertificate(PagesHttpsCertificate httpsCertificate) {
        this.httpsCertificate = httpsCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("https_enforced")
    public Boolean httpsEnforced;
    public Page withHttpsEnforced(Boolean httpsEnforced) {
        this.httpsEnforced = httpsEnforced;
        return this;
    }
    @JsonProperty("public")
    public Boolean public_;
    public Page withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public PagesSourceHash source;
    public Page withSource(PagesSourceHash source) {
        this.source = source;
        return this;
    }
    @JsonProperty("status")
    public PageStatusEnum status;
    public Page withStatus(PageStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Page withUrl(String url) {
        this.url = url;
        return this;
    }
}