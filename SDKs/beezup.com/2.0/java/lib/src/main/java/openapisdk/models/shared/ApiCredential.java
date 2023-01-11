package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiCredential
 * Your api credential
**/
public class ApiCredential {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryToken")
    public String primaryToken;
    public ApiCredential withPrimaryToken(String primaryToken) {
        this.primaryToken = primaryToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productName")
    public String productName;
    public ApiCredential withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryToken")
    public String secondaryToken;
    public ApiCredential withSecondaryToken(String secondaryToken) {
        this.secondaryToken = secondaryToken;
        return this;
    }
}