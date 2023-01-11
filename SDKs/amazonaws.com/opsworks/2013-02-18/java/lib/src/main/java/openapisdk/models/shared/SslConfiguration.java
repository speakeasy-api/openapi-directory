package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SslConfiguration
 * Describes an app's SSL configuration.
**/
public class SslConfiguration {
    @JsonProperty("Certificate")
    public String certificate;
    public SslConfiguration withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Chain")
    public String chain;
    public SslConfiguration withChain(String chain) {
        this.chain = chain;
        return this;
    }
    @JsonProperty("PrivateKey")
    public String privateKey;
    public SslConfiguration withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
}