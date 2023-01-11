package openapisdk.models.shared;



/**
 * ViewerCertificate
 * <p>A complex type that specifies the following:</p> <ul> <li> <p>Which SSL/TLS certificate to use when viewers request objects using HTTPS</p> </li> <li> <p>Whether you want CloudFront to use dedicated IP addresses or SNI when you're using alternate domain names in your object names</p> </li> <li> <p>The minimum protocol version that you want CloudFront to use when communicating with viewers</p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html">Using an HTTPS Connection to Access Your Objects</a> in the <i>Amazon Amazon CloudFront Developer Guide</i>.</p>
**/
public class ViewerCertificate {
    public String acmCertificateArn;
    public ViewerCertificate withAcmCertificateArn(String acmCertificateArn) {
        this.acmCertificateArn = acmCertificateArn;
        return this;
    }
    public java.util.Map<String, Object> certificate;
    public ViewerCertificate withCertificate(java.util.Map<String, Object> certificate) {
        this.certificate = certificate;
        return this;
    }
    public java.util.Map<String, Object> certificateSource;
    public ViewerCertificate withCertificateSource(java.util.Map<String, Object> certificateSource) {
        this.certificateSource = certificateSource;
        return this;
    }
    public Boolean cloudFrontDefaultCertificate;
    public ViewerCertificate withCloudFrontDefaultCertificate(Boolean cloudFrontDefaultCertificate) {
        this.cloudFrontDefaultCertificate = cloudFrontDefaultCertificate;
        return this;
    }
    public String iamCertificateId;
    public ViewerCertificate withIamCertificateId(String iamCertificateId) {
        this.iamCertificateId = iamCertificateId;
        return this;
    }
    public MinimumProtocolVersionEnum minimumProtocolVersion;
    public ViewerCertificate withMinimumProtocolVersion(MinimumProtocolVersionEnum minimumProtocolVersion) {
        this.minimumProtocolVersion = minimumProtocolVersion;
        return this;
    }
    public SslSupportMethodEnum sslSupportMethod;
    public ViewerCertificate withSslSupportMethod(SslSupportMethodEnum sslSupportMethod) {
        this.sslSupportMethod = sslSupportMethod;
        return this;
    }
}