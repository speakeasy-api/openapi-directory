package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOutgoingCertificatesResponse
 * The output from the ListOutgoingCertificates operation.
**/
public class ListOutgoingCertificatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextMarker")
    public String nextMarker;
    public ListOutgoingCertificatesResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outgoingCertificates")
    public OutgoingCertificate[] outgoingCertificates;
    public ListOutgoingCertificatesResponse withOutgoingCertificates(OutgoingCertificate[] outgoingCertificates) {
        this.outgoingCertificates = outgoingCertificates;
        return this;
    }
}