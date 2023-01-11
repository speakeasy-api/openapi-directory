package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCertificatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Certificates")
    public Certificate[] certificates;
    public DescribeCertificatesResponse withCertificates(Certificate[] certificates) {
        this.certificates = certificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeCertificatesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}