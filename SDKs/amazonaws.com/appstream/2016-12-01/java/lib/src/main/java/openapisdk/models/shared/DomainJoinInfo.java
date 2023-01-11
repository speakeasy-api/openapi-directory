package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainJoinInfo
 * Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
**/
public class DomainJoinInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryName")
    public String directoryName;
    public DomainJoinInfo withDirectoryName(String directoryName) {
        this.directoryName = directoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationalUnitDistinguishedName")
    public String organizationalUnitDistinguishedName;
    public DomainJoinInfo withOrganizationalUnitDistinguishedName(String organizationalUnitDistinguishedName) {
        this.organizationalUnitDistinguishedName = organizationalUnitDistinguishedName;
        return this;
    }
}