package openapisdk.models.shared;



/**
 * WithdrawByoipCidrResultByoipCidr
 * Information about the address pool.
**/
public class WithdrawByoipCidrResultByoipCidr {
    public java.util.Map<String, Object> cidr;
    public WithdrawByoipCidrResultByoipCidr withCidr(java.util.Map<String, Object> cidr) {
        this.cidr = cidr;
        return this;
    }
    public java.util.Map<String, Object> description;
    public WithdrawByoipCidrResultByoipCidr withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> state;
    public WithdrawByoipCidrResultByoipCidr withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> statusMessage;
    public WithdrawByoipCidrResultByoipCidr withStatusMessage(java.util.Map<String, Object> statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}