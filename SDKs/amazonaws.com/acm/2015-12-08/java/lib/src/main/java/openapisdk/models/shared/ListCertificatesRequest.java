package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCertificatesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateStatuses")
    public CertificateStatusEnum[] certificateStatuses;
    public ListCertificatesRequest withCertificateStatuses(CertificateStatusEnum[] certificateStatuses) {
        this.certificateStatuses = certificateStatuses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Includes")
    public Filters includes;
    public ListCertificatesRequest withIncludes(Filters includes) {
        this.includes = includes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxItems")
    public Long maxItems;
    public ListCertificatesRequest withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCertificatesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}