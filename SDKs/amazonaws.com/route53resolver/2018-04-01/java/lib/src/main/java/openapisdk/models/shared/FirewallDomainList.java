package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirewallDomainList
 * <p>High-level information about a list of firewall domains for use in a <a>FirewallRule</a>. This is returned by <a>GetFirewallDomainList</a>.</p> <p>To retrieve the domains that are defined for this domain list, call <a>ListFirewallDomains</a>.</p>
**/
public class FirewallDomainList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public FirewallDomainList withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationTime")
    public String creationTime;
    public FirewallDomainList withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatorRequestId")
    public String creatorRequestId;
    public FirewallDomainList withCreatorRequestId(String creatorRequestId) {
        this.creatorRequestId = creatorRequestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainCount")
    public Long domainCount;
    public FirewallDomainList withDomainCount(Long domainCount) {
        this.domainCount = domainCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public FirewallDomainList withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManagedOwnerName")
    public String managedOwnerName;
    public FirewallDomainList withManagedOwnerName(String managedOwnerName) {
        this.managedOwnerName = managedOwnerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModificationTime")
    public String modificationTime;
    public FirewallDomainList withModificationTime(String modificationTime) {
        this.modificationTime = modificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public FirewallDomainList withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public FirewallDomainListStatusEnum status;
    public FirewallDomainList withStatus(FirewallDomainListStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusMessage")
    public String statusMessage;
    public FirewallDomainList withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}