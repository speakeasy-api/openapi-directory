package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PortProbeDetail
 * A port scan that was part of the port probe. For each scan, PortProbeDetails provides information about the local IP address and port that were scanned, and the remote IP address that the scan originated from.
**/
public class PortProbeDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalIpDetails")
    public ActionLocalIpDetails localIpDetails;
    public PortProbeDetail withLocalIpDetails(ActionLocalIpDetails localIpDetails) {
        this.localIpDetails = localIpDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalPortDetails")
    public ActionLocalPortDetails localPortDetails;
    public PortProbeDetail withLocalPortDetails(ActionLocalPortDetails localPortDetails) {
        this.localPortDetails = localPortDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoteIpDetails")
    public ActionRemoteIpDetails remoteIpDetails;
    public PortProbeDetail withRemoteIpDetails(ActionRemoteIpDetails remoteIpDetails) {
        this.remoteIpDetails = remoteIpDetails;
        return this;
    }
}