package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLocationSmbRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AgentArns")
    public String[] agentArns;
    public UpdateLocationSmbRequest withAgentArns(String[] agentArns) {
        this.agentArns = agentArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domain")
    public String domain;
    public UpdateLocationSmbRequest withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("LocationArn")
    public String locationArn;
    public UpdateLocationSmbRequest withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MountOptions")
    public SmbMountOptions mountOptions;
    public UpdateLocationSmbRequest withMountOptions(SmbMountOptions mountOptions) {
        this.mountOptions = mountOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public UpdateLocationSmbRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subdirectory")
    public String subdirectory;
    public UpdateLocationSmbRequest withSubdirectory(String subdirectory) {
        this.subdirectory = subdirectory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("User")
    public String user;
    public UpdateLocationSmbRequest withUser(String user) {
        this.user = user;
        return this;
    }
}