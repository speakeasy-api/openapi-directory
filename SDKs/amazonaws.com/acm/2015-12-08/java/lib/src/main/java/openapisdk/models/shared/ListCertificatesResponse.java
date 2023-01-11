package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCertificatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateSummaryList")
    public CertificateSummary[] certificateSummaryList;
    public ListCertificatesResponse withCertificateSummaryList(CertificateSummary[] certificateSummaryList) {
        this.certificateSummaryList = certificateSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCertificatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}