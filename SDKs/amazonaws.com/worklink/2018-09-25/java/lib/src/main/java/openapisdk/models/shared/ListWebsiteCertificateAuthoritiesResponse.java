package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWebsiteCertificateAuthoritiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListWebsiteCertificateAuthoritiesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebsiteCertificateAuthorities")
    public WebsiteCaSummary[] websiteCertificateAuthorities;
    public ListWebsiteCertificateAuthoritiesResponse withWebsiteCertificateAuthorities(WebsiteCaSummary[] websiteCertificateAuthorities) {
        this.websiteCertificateAuthorities = websiteCertificateAuthorities;
        return this;
    }
}