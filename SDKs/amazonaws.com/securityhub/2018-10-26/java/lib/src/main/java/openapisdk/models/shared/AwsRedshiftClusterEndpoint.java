package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRedshiftClusterEndpoint
 * The connection endpoint for an Amazon Redshift cluster.
**/
public class AwsRedshiftClusterEndpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address")
    public String address;
    public AwsRedshiftClusterEndpoint withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public AwsRedshiftClusterEndpoint withPort(Long port) {
        this.port = port;
        return this;
    }
}