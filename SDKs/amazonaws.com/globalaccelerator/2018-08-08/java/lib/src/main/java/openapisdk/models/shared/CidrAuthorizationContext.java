package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CidrAuthorizationContext
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific AWS account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
**/
public class CidrAuthorizationContext {
    @JsonProperty("Message")
    public String message;
    public CidrAuthorizationContext withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("Signature")
    public String signature;
    public CidrAuthorizationContext withSignature(String signature) {
        this.signature = signature;
        return this;
    }
}