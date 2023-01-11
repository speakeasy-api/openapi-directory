package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateTrustRequest
 * <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain.</p>
**/
public class CreateTrustRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConditionalForwarderIpAddrs")
    public String[] conditionalForwarderIpAddrs;
    public CreateTrustRequest withConditionalForwarderIpAddrs(String[] conditionalForwarderIpAddrs) {
        this.conditionalForwarderIpAddrs = conditionalForwarderIpAddrs;
        return this;
    }
    @JsonProperty("DirectoryId")
    public String directoryId;
    public CreateTrustRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("RemoteDomainName")
    public String remoteDomainName;
    public CreateTrustRequest withRemoteDomainName(String remoteDomainName) {
        this.remoteDomainName = remoteDomainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SelectiveAuth")
    public SelectiveAuthEnum selectiveAuth;
    public CreateTrustRequest withSelectiveAuth(SelectiveAuthEnum selectiveAuth) {
        this.selectiveAuth = selectiveAuth;
        return this;
    }
    @JsonProperty("TrustDirection")
    public TrustDirectionEnum trustDirection;
    public CreateTrustRequest withTrustDirection(TrustDirectionEnum trustDirection) {
        this.trustDirection = trustDirection;
        return this;
    }
    @JsonProperty("TrustPassword")
    public String trustPassword;
    public CreateTrustRequest withTrustPassword(String trustPassword) {
        this.trustPassword = trustPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrustType")
    public TrustTypeEnum trustType;
    public CreateTrustRequest withTrustType(TrustTypeEnum trustType) {
        this.trustType = trustType;
        return this;
    }
}