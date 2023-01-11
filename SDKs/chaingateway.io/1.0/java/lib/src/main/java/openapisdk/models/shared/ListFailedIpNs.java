package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListFailedIpNs {
    @JsonProperty("failed_ipns")
    public FailedIpn[] failedIpns;
    public ListFailedIpNs withFailedIpns(FailedIpn[] failedIpns) {
        this.failedIpns = failedIpns;
        return this;
    }
    @JsonProperty("ok")
    public Boolean ok;
    public ListFailedIpNs withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
}