package openapisdk.models.shared;



/**
 * Listener
 * Describes the properties of a Listener for the LoadBalancer.
**/
public class Listener {
    public Long port;
    public Listener withPort(Long port) {
        this.port = port;
        return this;
    }
    public String protocol;
    public Listener withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
}