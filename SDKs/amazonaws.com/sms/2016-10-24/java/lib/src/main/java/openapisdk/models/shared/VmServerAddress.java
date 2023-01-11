package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VmServerAddress
 * Represents a VM server location.
**/
public class VmServerAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmId")
    public String vmId;
    public VmServerAddress withVmId(String vmId) {
        this.vmId = vmId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmManagerId")
    public String vmManagerId;
    public VmServerAddress withVmManagerId(String vmManagerId) {
        this.vmManagerId = vmManagerId;
        return this;
    }
}