package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLocationNfsRequest
 * CreateLocationNfsRequest
**/
public class CreateLocationNfsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MountOptions")
    public NfsMountOptions mountOptions;
    public CreateLocationNfsRequest withMountOptions(NfsMountOptions mountOptions) {
        this.mountOptions = mountOptions;
        return this;
    }
    @JsonProperty("OnPremConfig")
    public OnPremConfig onPremConfig;
    public CreateLocationNfsRequest withOnPremConfig(OnPremConfig onPremConfig) {
        this.onPremConfig = onPremConfig;
        return this;
    }
    @JsonProperty("ServerHostname")
    public String serverHostname;
    public CreateLocationNfsRequest withServerHostname(String serverHostname) {
        this.serverHostname = serverHostname;
        return this;
    }
    @JsonProperty("Subdirectory")
    public String subdirectory;
    public CreateLocationNfsRequest withSubdirectory(String subdirectory) {
        this.subdirectory = subdirectory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public TagListEntry[] tags;
    public CreateLocationNfsRequest withTags(TagListEntry[] tags) {
        this.tags = tags;
        return this;
    }
}