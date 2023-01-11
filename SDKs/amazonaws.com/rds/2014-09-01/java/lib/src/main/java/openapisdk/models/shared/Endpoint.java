package openapisdk.models.shared;



public class Endpoint {
    public String address;
    public Endpoint withAddress(String address) {
        this.address = address;
        return this;
    }
    public Long port;
    public Endpoint withPort(Long port) {
        this.port = port;
        return this;
    }
}