package openapisdk.models.shared;



/**
 * CustomOriginConfig
 * A customer origin.
**/
public class CustomOriginConfig {
    public Long httpPort;
    public CustomOriginConfig withHttpPort(Long httpPort) {
        this.httpPort = httpPort;
        return this;
    }
    public Long httpsPort;
    public CustomOriginConfig withHttpsPort(Long httpsPort) {
        this.httpsPort = httpsPort;
        return this;
    }
    public OriginProtocolPolicyEnum originProtocolPolicy;
    public CustomOriginConfig withOriginProtocolPolicy(OriginProtocolPolicyEnum originProtocolPolicy) {
        this.originProtocolPolicy = originProtocolPolicy;
        return this;
    }
    public OriginSslProtocols originSslProtocols;
    public CustomOriginConfig withOriginSslProtocols(OriginSslProtocols originSslProtocols) {
        this.originSslProtocols = originSslProtocols;
        return this;
    }
}