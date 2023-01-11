package openapisdk.models.shared;



public class TransportDescriptor {
    public String protocol;
    public TransportDescriptor withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    public Object security;
    public TransportDescriptor withSecurity(Object security) {
        this.security = security;
        return this;
    }
    public String type;
    public TransportDescriptor withType(String type) {
        this.type = type;
        return this;
    }
    public String version;
    public TransportDescriptor withVersion(String version) {
        this.version = version;
        return this;
    }
}