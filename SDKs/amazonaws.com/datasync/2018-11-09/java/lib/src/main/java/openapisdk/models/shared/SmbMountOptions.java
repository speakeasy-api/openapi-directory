package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SmbMountOptions
 * Represents the mount options that are available for DataSync to access an SMB location.
**/
public class SmbMountOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public SmbVersionEnum version;
    public SmbMountOptions withVersion(SmbVersionEnum version) {
        this.version = version;
        return this;
    }
}