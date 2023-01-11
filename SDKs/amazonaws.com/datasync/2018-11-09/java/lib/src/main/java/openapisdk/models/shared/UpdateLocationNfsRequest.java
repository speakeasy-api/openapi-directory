package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLocationNfsRequest {
    @JsonProperty("LocationArn")
    public String locationArn;
    public UpdateLocationNfsRequest withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MountOptions")
    public NfsMountOptions mountOptions;
    public UpdateLocationNfsRequest withMountOptions(NfsMountOptions mountOptions) {
        this.mountOptions = mountOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OnPremConfig")
    public OnPremConfig onPremConfig;
    public UpdateLocationNfsRequest withOnPremConfig(OnPremConfig onPremConfig) {
        this.onPremConfig = onPremConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subdirectory")
    public String subdirectory;
    public UpdateLocationNfsRequest withSubdirectory(String subdirectory) {
        this.subdirectory = subdirectory;
        return this;
    }
}