package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModifyLunaClientRequest {
    @JsonProperty("Certificate")
    public String certificate;
    public ModifyLunaClientRequest withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonProperty("ClientArn")
    public String clientArn;
    public ModifyLunaClientRequest withClientArn(String clientArn) {
        this.clientArn = clientArn;
        return this;
    }
}