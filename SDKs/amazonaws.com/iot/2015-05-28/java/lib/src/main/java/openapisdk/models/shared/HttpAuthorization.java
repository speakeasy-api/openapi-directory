package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpAuthorization
 * The authorization method used to send messages.
**/
public class HttpAuthorization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sigv4")
    public SigV4Authorization sigv4;
    public HttpAuthorization withSigv4(SigV4Authorization sigv4) {
        this.sigv4 = sigv4;
        return this;
    }
}