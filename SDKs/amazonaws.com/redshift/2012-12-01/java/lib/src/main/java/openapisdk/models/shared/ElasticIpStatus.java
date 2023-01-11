package openapisdk.models.shared;



/**
 * ElasticIpStatus
 * Describes the status of the elastic IP (EIP) address.
**/
public class ElasticIpStatus {
    public String elasticIp;
    public ElasticIpStatus withElasticIp(String elasticIp) {
        this.elasticIp = elasticIp;
        return this;
    }
    public String status;
    public ElasticIpStatus withStatus(String status) {
        this.status = status;
        return this;
    }
}