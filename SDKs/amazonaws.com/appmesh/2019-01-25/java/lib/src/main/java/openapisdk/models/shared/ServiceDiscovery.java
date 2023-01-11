package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceDiscovery
 * An object that represents the service discovery information for a virtual node.
**/
public class ServiceDiscovery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsCloudMap")
    public AwsCloudMapServiceDiscovery awsCloudMap;
    public ServiceDiscovery withAwsCloudMap(AwsCloudMapServiceDiscovery awsCloudMap) {
        this.awsCloudMap = awsCloudMap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dns")
    public DnsServiceDiscovery dns;
    public ServiceDiscovery withDns(DnsServiceDiscovery dns) {
        this.dns = dns;
        return this;
    }
}