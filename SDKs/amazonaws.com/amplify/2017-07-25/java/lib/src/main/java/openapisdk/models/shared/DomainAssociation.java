package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainAssociation
 *  Describes a domain association that associates a custom domain with an Amplify app. 
**/
public class DomainAssociation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoSubDomainCreationPatterns")
    public String[] autoSubDomainCreationPatterns;
    public DomainAssociation withAutoSubDomainCreationPatterns(String[] autoSubDomainCreationPatterns) {
        this.autoSubDomainCreationPatterns = autoSubDomainCreationPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoSubDomainIAMRole")
    public String autoSubDomainIAMRole;
    public DomainAssociation withAutoSubDomainIamRole(String autoSubDomainIAMRole) {
        this.autoSubDomainIAMRole = autoSubDomainIAMRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateVerificationDNSRecord")
    public String certificateVerificationDNSRecord;
    public DomainAssociation withCertificateVerificationDnsRecord(String certificateVerificationDNSRecord) {
        this.certificateVerificationDNSRecord = certificateVerificationDNSRecord;
        return this;
    }
    @JsonProperty("domainAssociationArn")
    public String domainAssociationArn;
    public DomainAssociation withDomainAssociationArn(String domainAssociationArn) {
        this.domainAssociationArn = domainAssociationArn;
        return this;
    }
    @JsonProperty("domainName")
    public String domainName;
    public DomainAssociation withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonProperty("domainStatus")
    public DomainStatusEnum domainStatus;
    public DomainAssociation withDomainStatus(DomainStatusEnum domainStatus) {
        this.domainStatus = domainStatus;
        return this;
    }
    @JsonProperty("enableAutoSubDomain")
    public Boolean enableAutoSubDomain;
    public DomainAssociation withEnableAutoSubDomain(Boolean enableAutoSubDomain) {
        this.enableAutoSubDomain = enableAutoSubDomain;
        return this;
    }
    @JsonProperty("statusReason")
    public String statusReason;
    public DomainAssociation withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonProperty("subDomains")
    public SubDomain[] subDomains;
    public DomainAssociation withSubDomains(SubDomain[] subDomains) {
        this.subDomains = subDomains;
        return this;
    }
}