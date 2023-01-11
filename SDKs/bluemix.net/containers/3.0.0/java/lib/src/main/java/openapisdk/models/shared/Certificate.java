package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Certificate {
    @JsonProperty("ca_cert")
    public String caCert;
    public Certificate withCaCert(String caCert) {
        this.caCert = caCert;
        return this;
    }
    @JsonProperty("server_cert")
    public String serverCert;
    public Certificate withServerCert(String serverCert) {
        this.serverCert = serverCert;
        return this;
    }
    @JsonProperty("user_cert")
    public String userCert;
    public Certificate withUserCert(String userCert) {
        this.userCert = userCert;
        return this;
    }
    @JsonProperty("user_key")
    public String userKey;
    public Certificate withUserKey(String userKey) {
        this.userKey = userKey;
        return this;
    }
}