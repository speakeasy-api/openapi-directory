package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCertificatesResponse
 * The output of the ListCertificates operation.
**/
public class ListCertificatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificates")
    public Certificate[] certificates;
    public ListCertificatesResponse withCertificates(Certificate[] certificates) {
        this.certificates = certificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextMarker")
    public String nextMarker;
    public ListCertificatesResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}