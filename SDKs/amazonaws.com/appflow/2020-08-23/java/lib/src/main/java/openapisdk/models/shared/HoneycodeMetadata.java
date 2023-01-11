package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HoneycodeMetadata
 *  The connector metadata specific to Amazon Honeycode. 
**/
public class HoneycodeMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oAuthScopes")
    public String[] oAuthScopes;
    public HoneycodeMetadata withOAuthScopes(String[] oAuthScopes) {
        this.oAuthScopes = oAuthScopes;
        return this;
    }
}