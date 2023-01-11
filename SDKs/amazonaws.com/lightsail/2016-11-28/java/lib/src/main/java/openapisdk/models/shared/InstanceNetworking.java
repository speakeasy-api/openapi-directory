package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceNetworking
 * Describes monthly data transfer rates and port information for an instance.
**/
public class InstanceNetworking {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthlyTransfer")
    public MonthlyTransfer monthlyTransfer;
    public InstanceNetworking withMonthlyTransfer(MonthlyTransfer monthlyTransfer) {
        this.monthlyTransfer = monthlyTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ports")
    public InstancePortInfo[] ports;
    public InstanceNetworking withPorts(InstancePortInfo[] ports) {
        this.ports = ports;
        return this;
    }
}