package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAccessRequest {
    @JsonProperty("ExternalId")
    public String externalId;
    public UpdateAccessRequest withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeDirectory")
    public String homeDirectory;
    public UpdateAccessRequest withHomeDirectory(String homeDirectory) {
        this.homeDirectory = homeDirectory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeDirectoryMappings")
    public HomeDirectoryMapEntry[] homeDirectoryMappings;
    public UpdateAccessRequest withHomeDirectoryMappings(HomeDirectoryMapEntry[] homeDirectoryMappings) {
        this.homeDirectoryMappings = homeDirectoryMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeDirectoryType")
    public HomeDirectoryTypeEnum homeDirectoryType;
    public UpdateAccessRequest withHomeDirectoryType(HomeDirectoryTypeEnum homeDirectoryType) {
        this.homeDirectoryType = homeDirectoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public String policy;
    public UpdateAccessRequest withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PosixProfile")
    public PosixProfile posixProfile;
    public UpdateAccessRequest withPosixProfile(PosixProfile posixProfile) {
        this.posixProfile = posixProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Role")
    public String role;
    public UpdateAccessRequest withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonProperty("ServerId")
    public String serverId;
    public UpdateAccessRequest withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
}