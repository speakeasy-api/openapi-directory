package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack {
    @JsonProperty("channel")
    public String channel;
    public ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack withUrl(String url) {
        this.url = url;
        return this;
    }
}