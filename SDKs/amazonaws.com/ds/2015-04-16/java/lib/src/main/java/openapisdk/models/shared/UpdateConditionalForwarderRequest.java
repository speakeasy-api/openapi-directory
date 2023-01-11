package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateConditionalForwarderRequest
 * Updates a conditional forwarder.
**/
public class UpdateConditionalForwarderRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public UpdateConditionalForwarderRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("DnsIpAddrs")
    public String[] dnsIpAddrs;
    public UpdateConditionalForwarderRequest withDnsIpAddrs(String[] dnsIpAddrs) {
        this.dnsIpAddrs = dnsIpAddrs;
        return this;
    }
    @JsonProperty("RemoteDomainName")
    public String remoteDomainName;
    public UpdateConditionalForwarderRequest withRemoteDomainName(String remoteDomainName) {
        this.remoteDomainName = remoteDomainName;
        return this;
    }
}