package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GrantListEntry
 * Contains information about a grant.
**/
public class GrantListEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Constraints")
    public GrantConstraints constraints;
    public GrantListEntry withConstraints(GrantConstraints constraints) {
        this.constraints = constraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationDate")
    public OffsetDateTime creationDate;
    public GrantListEntry withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrantId")
    public String grantId;
    public GrantListEntry withGrantId(String grantId) {
        this.grantId = grantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GranteePrincipal")
    public String granteePrincipal;
    public GrantListEntry withGranteePrincipal(String granteePrincipal) {
        this.granteePrincipal = granteePrincipal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IssuingAccount")
    public String issuingAccount;
    public GrantListEntry withIssuingAccount(String issuingAccount) {
        this.issuingAccount = issuingAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public GrantListEntry withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public GrantListEntry withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Operations")
    public GrantOperationEnum[] operations;
    public GrantListEntry withOperations(GrantOperationEnum[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetiringPrincipal")
    public String retiringPrincipal;
    public GrantListEntry withRetiringPrincipal(String retiringPrincipal) {
        this.retiringPrincipal = retiringPrincipal;
        return this;
    }
}