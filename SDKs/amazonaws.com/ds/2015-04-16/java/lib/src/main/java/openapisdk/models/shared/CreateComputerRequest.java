package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateComputerRequest
 * Contains the inputs for the <a>CreateComputer</a> operation.
**/
public class CreateComputerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputerAttributes")
    public Attribute[] computerAttributes;
    public CreateComputerRequest withComputerAttributes(Attribute[] computerAttributes) {
        this.computerAttributes = computerAttributes;
        return this;
    }
    @JsonProperty("ComputerName")
    public String computerName;
    public CreateComputerRequest withComputerName(String computerName) {
        this.computerName = computerName;
        return this;
    }
    @JsonProperty("DirectoryId")
    public String directoryId;
    public CreateComputerRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationalUnitDistinguishedName")
    public String organizationalUnitDistinguishedName;
    public CreateComputerRequest withOrganizationalUnitDistinguishedName(String organizationalUnitDistinguishedName) {
        this.organizationalUnitDistinguishedName = organizationalUnitDistinguishedName;
        return this;
    }
    @JsonProperty("Password")
    public String password;
    public CreateComputerRequest withPassword(String password) {
        this.password = password;
        return this;
    }
}