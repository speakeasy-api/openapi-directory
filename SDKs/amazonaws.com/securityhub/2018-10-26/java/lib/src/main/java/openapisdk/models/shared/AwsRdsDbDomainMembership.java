package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRdsDbDomainMembership
 * Information about an Active Directory domain membership record associated with the DB instance.
**/
public class AwsRdsDbDomainMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domain")
    public String domain;
    public AwsRdsDbDomainMembership withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Fqdn")
    public String fqdn;
    public AwsRdsDbDomainMembership withFqdn(String fqdn) {
        this.fqdn = fqdn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamRoleName")
    public String iamRoleName;
    public AwsRdsDbDomainMembership withIamRoleName(String iamRoleName) {
        this.iamRoleName = iamRoleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public AwsRdsDbDomainMembership withStatus(String status) {
        this.status = status;
        return this;
    }
}