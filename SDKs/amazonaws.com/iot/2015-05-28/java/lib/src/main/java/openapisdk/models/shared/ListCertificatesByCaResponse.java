package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCertificatesByCaResponse
 * The output of the ListCertificatesByCA operation.
**/
public class ListCertificatesByCaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificates")
    public Certificate[] certificates;
    public ListCertificatesByCaResponse withCertificates(Certificate[] certificates) {
        this.certificates = certificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextMarker")
    public String nextMarker;
    public ListCertificatesByCaResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}