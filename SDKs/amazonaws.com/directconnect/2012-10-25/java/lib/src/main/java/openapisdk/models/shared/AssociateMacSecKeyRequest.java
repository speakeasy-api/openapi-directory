package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateMacSecKeyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cak")
    public String cak;
    public AssociateMacSecKeyRequest withCak(String cak) {
        this.cak = cak;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ckn")
    public String ckn;
    public AssociateMacSecKeyRequest withCkn(String ckn) {
        this.ckn = ckn;
        return this;
    }
    @JsonProperty("connectionId")
    public String connectionId;
    public AssociateMacSecKeyRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretARN")
    public String secretARN;
    public AssociateMacSecKeyRequest withSecretArn(String secretARN) {
        this.secretARN = secretARN;
        return this;
    }
}