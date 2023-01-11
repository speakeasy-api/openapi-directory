package openapisdk.models.shared;



/**
 * InstanceMetadataOptions
 * The metadata options for the instances. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds">Configuring the Instance Metadata Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
**/
public class InstanceMetadataOptions {
    public InstanceMetadataEndpointStateEnum httpEndpoint;
    public InstanceMetadataOptions withHttpEndpoint(InstanceMetadataEndpointStateEnum httpEndpoint) {
        this.httpEndpoint = httpEndpoint;
        return this;
    }
    public Long httpPutResponseHopLimit;
    public InstanceMetadataOptions withHttpPutResponseHopLimit(Long httpPutResponseHopLimit) {
        this.httpPutResponseHopLimit = httpPutResponseHopLimit;
        return this;
    }
    public InstanceMetadataHttpTokensStateEnum httpTokens;
    public InstanceMetadataOptions withHttpTokens(InstanceMetadataHttpTokensStateEnum httpTokens) {
        this.httpTokens = httpTokens;
        return this;
    }
}