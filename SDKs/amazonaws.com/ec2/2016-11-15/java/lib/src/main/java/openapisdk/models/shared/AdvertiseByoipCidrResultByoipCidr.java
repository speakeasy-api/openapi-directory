package openapisdk.models.shared;



/**
 * AdvertiseByoipCidrResultByoipCidr
 * Information about the address range.
**/
public class AdvertiseByoipCidrResultByoipCidr {
    public java.util.Map<String, Object> cidr;
    public AdvertiseByoipCidrResultByoipCidr withCidr(java.util.Map<String, Object> cidr) {
        this.cidr = cidr;
        return this;
    }
    public java.util.Map<String, Object> description;
    public AdvertiseByoipCidrResultByoipCidr withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> state;
    public AdvertiseByoipCidrResultByoipCidr withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> statusMessage;
    public AdvertiseByoipCidrResultByoipCidr withStatusMessage(java.util.Map<String, Object> statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}