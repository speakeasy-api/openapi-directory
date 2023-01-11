package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SalesforceMetadata
 *  The connector metadata specific to Salesforce. 
**/
public class SalesforceMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oAuthScopes")
    public String[] oAuthScopes;
    public SalesforceMetadata withOAuthScopes(String[] oAuthScopes) {
        this.oAuthScopes = oAuthScopes;
        return this;
    }
}