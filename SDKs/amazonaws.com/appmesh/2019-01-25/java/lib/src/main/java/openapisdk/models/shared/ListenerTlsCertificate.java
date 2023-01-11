package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListenerTlsCertificate
 * An object that represents a listener's Transport Layer Security (TLS) certificate.
**/
public class ListenerTlsCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acm")
    public ListenerTlsAcmCertificate acm;
    public ListenerTlsCertificate withAcm(ListenerTlsAcmCertificate acm) {
        this.acm = acm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public ListenerTlsFileCertificate file;
    public ListenerTlsCertificate withFile(ListenerTlsFileCertificate file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sds")
    public ListenerTlsSdsCertificate sds;
    public ListenerTlsCertificate withSds(ListenerTlsSdsCertificate sds) {
        this.sds = sds;
        return this;
    }
}