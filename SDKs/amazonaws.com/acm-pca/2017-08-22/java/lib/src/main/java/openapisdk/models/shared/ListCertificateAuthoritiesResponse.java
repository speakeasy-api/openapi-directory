package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCertificateAuthoritiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateAuthorities")
    public CertificateAuthority[] certificateAuthorities;
    public ListCertificateAuthoritiesResponse withCertificateAuthorities(CertificateAuthority[] certificateAuthorities) {
        this.certificateAuthorities = certificateAuthorities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCertificateAuthoritiesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}