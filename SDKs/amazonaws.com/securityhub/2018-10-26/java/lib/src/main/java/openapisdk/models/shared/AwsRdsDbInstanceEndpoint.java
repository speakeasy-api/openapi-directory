package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRdsDbInstanceEndpoint
 * Specifies the connection endpoint.
**/
public class AwsRdsDbInstanceEndpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address")
    public String address;
    public AwsRdsDbInstanceEndpoint withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HostedZoneId")
    public String hostedZoneId;
    public AwsRdsDbInstanceEndpoint withHostedZoneId(String hostedZoneId) {
        this.hostedZoneId = hostedZoneId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public AwsRdsDbInstanceEndpoint withPort(Long port) {
        this.port = port;
        return this;
    }
}