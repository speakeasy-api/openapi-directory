package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListenerTlsSdsCertificate
 * An object that represents the listener's Secret Discovery Service certificate. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.
**/
public class ListenerTlsSdsCertificate {
    @JsonProperty("secretName")
    public String secretName;
    public ListenerTlsSdsCertificate withSecretName(String secretName) {
        this.secretName = secretName;
        return this;
    }
}