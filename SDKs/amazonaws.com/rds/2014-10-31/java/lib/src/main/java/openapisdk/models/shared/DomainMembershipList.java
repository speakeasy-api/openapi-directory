package openapisdk.models.shared;



/**
 * DomainMembershipList
 * An Active Directory Domain membership record associated with the DB instance or cluster.
**/
public class DomainMembershipList {
    public String domain;
    public DomainMembershipList withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    public String fqdn;
    public DomainMembershipList withFqdn(String fqdn) {
        this.fqdn = fqdn;
        return this;
    }
    public String iamRoleName;
    public DomainMembershipList withIamRoleName(String iamRoleName) {
        this.iamRoleName = iamRoleName;
        return this;
    }
    public String status;
    public DomainMembershipList withStatus(String status) {
        this.status = status;
        return this;
    }
}