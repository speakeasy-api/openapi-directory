package openapisdk.models.shared;



/**
 * GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions
 * The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
public class GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions {
    public java.util.Map<String, Object> httpEndpoint;
    public GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions withHttpEndpoint(java.util.Map<String, Object> httpEndpoint) {
        this.httpEndpoint = httpEndpoint;
        return this;
    }
    public java.util.Map<String, Object> httpProtocolIpv6;
    public GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions withHttpProtocolIpv6(java.util.Map<String, Object> httpProtocolIpv6) {
        this.httpProtocolIpv6 = httpProtocolIpv6;
        return this;
    }
    public java.util.Map<String, Object> httpPutResponseHopLimit;
    public GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions withHttpPutResponseHopLimit(java.util.Map<String, Object> httpPutResponseHopLimit) {
        this.httpPutResponseHopLimit = httpPutResponseHopLimit;
        return this;
    }
    public java.util.Map<String, Object> httpTokens;
    public GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions withHttpTokens(java.util.Map<String, Object> httpTokens) {
        this.httpTokens = httpTokens;
        return this;
    }
    public java.util.Map<String, Object> state;
    public GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
}