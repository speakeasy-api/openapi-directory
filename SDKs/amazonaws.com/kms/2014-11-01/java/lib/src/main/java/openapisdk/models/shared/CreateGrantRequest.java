package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGrantRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Constraints")
    public GrantConstraints constraints;
    public CreateGrantRequest withConstraints(GrantConstraints constraints) {
        this.constraints = constraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrantTokens")
    public String[] grantTokens;
    public CreateGrantRequest withGrantTokens(String[] grantTokens) {
        this.grantTokens = grantTokens;
        return this;
    }
    @JsonProperty("GranteePrincipal")
    public String granteePrincipal;
    public CreateGrantRequest withGranteePrincipal(String granteePrincipal) {
        this.granteePrincipal = granteePrincipal;
        return this;
    }
    @JsonProperty("KeyId")
    public String keyId;
    public CreateGrantRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CreateGrantRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Operations")
    public GrantOperationEnum[] operations;
    public CreateGrantRequest withOperations(GrantOperationEnum[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetiringPrincipal")
    public String retiringPrincipal;
    public CreateGrantRequest withRetiringPrincipal(String retiringPrincipal) {
        this.retiringPrincipal = retiringPrincipal;
        return this;
    }
}