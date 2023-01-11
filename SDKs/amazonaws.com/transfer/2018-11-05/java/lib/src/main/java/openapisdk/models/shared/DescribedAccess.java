package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribedAccess
 * Describes the properties of the access that was specified.
**/
public class DescribedAccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExternalId")
    public String externalId;
    public DescribedAccess withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeDirectory")
    public String homeDirectory;
    public DescribedAccess withHomeDirectory(String homeDirectory) {
        this.homeDirectory = homeDirectory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeDirectoryMappings")
    public HomeDirectoryMapEntry[] homeDirectoryMappings;
    public DescribedAccess withHomeDirectoryMappings(HomeDirectoryMapEntry[] homeDirectoryMappings) {
        this.homeDirectoryMappings = homeDirectoryMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeDirectoryType")
    public HomeDirectoryTypeEnum homeDirectoryType;
    public DescribedAccess withHomeDirectoryType(HomeDirectoryTypeEnum homeDirectoryType) {
        this.homeDirectoryType = homeDirectoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public String policy;
    public DescribedAccess withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PosixProfile")
    public PosixProfile posixProfile;
    public DescribedAccess withPosixProfile(PosixProfile posixProfile) {
        this.posixProfile = posixProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Role")
    public String role;
    public DescribedAccess withRole(String role) {
        this.role = role;
        return this;
    }
}