package openapisdk.models.shared;



/**
 * DeprovisionByoipCidrResultByoipCidr
 * Information about the address range.
**/
public class DeprovisionByoipCidrResultByoipCidr {
    public java.util.Map<String, Object> cidr;
    public DeprovisionByoipCidrResultByoipCidr withCidr(java.util.Map<String, Object> cidr) {
        this.cidr = cidr;
        return this;
    }
    public java.util.Map<String, Object> description;
    public DeprovisionByoipCidrResultByoipCidr withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> state;
    public DeprovisionByoipCidrResultByoipCidr withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> statusMessage;
    public DeprovisionByoipCidrResultByoipCidr withStatusMessage(java.util.Map<String, Object> statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}