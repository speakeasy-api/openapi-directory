package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActiveDirectoryConfiguration
 * The configuration for a Microsoft Active Directory (Microsoft AD) studio resource.
**/
public class ActiveDirectoryConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computerAttributes")
    public ActiveDirectoryComputerAttribute[] computerAttributes;
    public ActiveDirectoryConfiguration withComputerAttributes(ActiveDirectoryComputerAttribute[] computerAttributes) {
        this.computerAttributes = computerAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directoryId")
    public String directoryId;
    public ActiveDirectoryConfiguration withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationalUnitDistinguishedName")
    public String organizationalUnitDistinguishedName;
    public ActiveDirectoryConfiguration withOrganizationalUnitDistinguishedName(String organizationalUnitDistinguishedName) {
        this.organizationalUnitDistinguishedName = organizationalUnitDistinguishedName;
        return this;
    }
}