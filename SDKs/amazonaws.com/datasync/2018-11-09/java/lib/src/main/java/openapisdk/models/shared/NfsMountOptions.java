package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NfsMountOptions
 * Represents the mount options that are available for DataSync to access an NFS location.
**/
public class NfsMountOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public NfsVersionEnum version;
    public NfsMountOptions withVersion(NfsVersionEnum version) {
        this.version = version;
        return this;
    }
}