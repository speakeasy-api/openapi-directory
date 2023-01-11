package openapisdk.models.shared;



/**
 * CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions
 * The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
public class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions {
    public java.util.Map<String, Object> httpEndpoint;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions withHttpEndpoint(java.util.Map<String, Object> httpEndpoint) {
        this.httpEndpoint = httpEndpoint;
        return this;
    }
    public java.util.Map<String, Object> httpProtocolIpv6;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions withHttpProtocolIpv6(java.util.Map<String, Object> httpProtocolIpv6) {
        this.httpProtocolIpv6 = httpProtocolIpv6;
        return this;
    }
    public java.util.Map<String, Object> httpPutResponseHopLimit;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions withHttpPutResponseHopLimit(java.util.Map<String, Object> httpPutResponseHopLimit) {
        this.httpPutResponseHopLimit = httpPutResponseHopLimit;
        return this;
    }
    public java.util.Map<String, Object> httpTokens;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions withHttpTokens(java.util.Map<String, Object> httpTokens) {
        this.httpTokens = httpTokens;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
}