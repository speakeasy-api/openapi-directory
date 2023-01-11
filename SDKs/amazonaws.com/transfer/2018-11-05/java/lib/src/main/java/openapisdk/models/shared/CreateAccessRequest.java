package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAccessRequest {
    @JsonProperty("ExternalId")
    public String externalId;
    public CreateAccessRequest withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeDirectory")
    public String homeDirectory;
    public CreateAccessRequest withHomeDirectory(String homeDirectory) {
        this.homeDirectory = homeDirectory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeDirectoryMappings")
    public HomeDirectoryMapEntry[] homeDirectoryMappings;
    public CreateAccessRequest withHomeDirectoryMappings(HomeDirectoryMapEntry[] homeDirectoryMappings) {
        this.homeDirectoryMappings = homeDirectoryMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeDirectoryType")
    public HomeDirectoryTypeEnum homeDirectoryType;
    public CreateAccessRequest withHomeDirectoryType(HomeDirectoryTypeEnum homeDirectoryType) {
        this.homeDirectoryType = homeDirectoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public String policy;
    public CreateAccessRequest withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PosixProfile")
    public PosixProfile posixProfile;
    public CreateAccessRequest withPosixProfile(PosixProfile posixProfile) {
        this.posixProfile = posixProfile;
        return this;
    }
    @JsonProperty("Role")
    public String role;
    public CreateAccessRequest withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonProperty("ServerId")
    public String serverId;
    public CreateAccessRequest withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
}