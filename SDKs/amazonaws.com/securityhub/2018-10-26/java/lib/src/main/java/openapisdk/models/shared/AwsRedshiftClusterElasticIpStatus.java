package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRedshiftClusterElasticIpStatus
 * The status of the elastic IP (EIP) address for an Amazon Redshift cluster.
**/
public class AwsRedshiftClusterElasticIpStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElasticIp")
    public String elasticIp;
    public AwsRedshiftClusterElasticIpStatus withElasticIp(String elasticIp) {
        this.elasticIp = elasticIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public AwsRedshiftClusterElasticIpStatus withStatus(String status) {
        this.status = status;
        return this;
    }
}