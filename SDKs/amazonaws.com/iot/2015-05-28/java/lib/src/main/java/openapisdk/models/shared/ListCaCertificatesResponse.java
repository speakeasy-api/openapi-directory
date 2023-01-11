package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCaCertificatesResponse
 * The output from the ListCACertificates operation.
**/
public class ListCaCertificatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificates")
    public CaCertificate[] certificates;
    public ListCaCertificatesResponse withCertificates(CaCertificate[] certificates) {
        this.certificates = certificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextMarker")
    public String nextMarker;
    public ListCaCertificatesResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}