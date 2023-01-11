package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCertificatesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificatesInfo")
    public CertificateInfo[] certificatesInfo;
    public ListCertificatesResult withCertificatesInfo(CertificateInfo[] certificatesInfo) {
        this.certificatesInfo = certificatesInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCertificatesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}