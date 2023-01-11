package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MacSecKey
 * Information about the MAC Security (MACsec) secret key.
**/
public class MacSecKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ckn")
    public String ckn;
    public MacSecKey withCkn(String ckn) {
        this.ckn = ckn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretARN")
    public String secretARN;
    public MacSecKey withSecretArn(String secretARN) {
        this.secretARN = secretARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startOn")
    public String startOn;
    public MacSecKey withStartOn(String startOn) {
        this.startOn = startOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public MacSecKey withState(String state) {
        this.state = state;
        return this;
    }
}