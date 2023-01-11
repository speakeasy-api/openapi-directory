package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SalesforceAction
 * Describes an action to write a message to a Salesforce IoT Cloud Input Stream.
**/
public class SalesforceAction {
    @JsonProperty("token")
    public String token;
    public SalesforceAction withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public SalesforceAction withUrl(String url) {
        this.url = url;
        return this;
    }
}