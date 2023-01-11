package openapisdk.models.shared;



/**
 * ProvisionByoipCidrResultByoipCidr
 * Information about the address range.
**/
public class ProvisionByoipCidrResultByoipCidr {
    public java.util.Map<String, Object> cidr;
    public ProvisionByoipCidrResultByoipCidr withCidr(java.util.Map<String, Object> cidr) {
        this.cidr = cidr;
        return this;
    }
    public java.util.Map<String, Object> description;
    public ProvisionByoipCidrResultByoipCidr withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> state;
    public ProvisionByoipCidrResultByoipCidr withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> statusMessage;
    public ProvisionByoipCidrResultByoipCidr withStatusMessage(java.util.Map<String, Object> statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}