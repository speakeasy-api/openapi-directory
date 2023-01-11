package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientTlsCertificate
 * An object that represents the client's certificate.
**/
public class ClientTlsCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public ListenerTlsFileCertificate file;
    public ClientTlsCertificate withFile(ListenerTlsFileCertificate file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sds")
    public ListenerTlsSdsCertificate sds;
    public ClientTlsCertificate withSds(ListenerTlsSdsCertificate sds) {
        this.sds = sds;
        return this;
    }
}