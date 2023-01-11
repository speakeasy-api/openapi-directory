package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SlackMetadata
 *  The connector metadata specific to Slack. 
**/
public class SlackMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oAuthScopes")
    public String[] oAuthScopes;
    public SlackMetadata withOAuthScopes(String[] oAuthScopes) {
        this.oAuthScopes = oAuthScopes;
        return this;
    }
}