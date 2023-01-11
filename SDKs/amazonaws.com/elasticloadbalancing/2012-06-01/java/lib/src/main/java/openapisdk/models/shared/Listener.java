package openapisdk.models.shared;



/**
 * Listener
 * <p>Information about a listener.</p> <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
**/
public class Listener {
    public Long instancePort;
    public Listener withInstancePort(Long instancePort) {
        this.instancePort = instancePort;
        return this;
    }
    public String instanceProtocol;
    public Listener withInstanceProtocol(String instanceProtocol) {
        this.instanceProtocol = instanceProtocol;
        return this;
    }
    public Long loadBalancerPort;
    public Listener withLoadBalancerPort(Long loadBalancerPort) {
        this.loadBalancerPort = loadBalancerPort;
        return this;
    }
    public String protocol;
    public Listener withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    public String sslCertificateId;
    public Listener withSslCertificateId(String sslCertificateId) {
        this.sslCertificateId = sslCertificateId;
        return this;
    }
}