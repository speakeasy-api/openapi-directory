package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListAlertPolicies200ApplicationJsonPoliciesAlerts {
    @JsonProperty("email")
    public String[] email;
    public ListAlertPolicies200ApplicationJsonPoliciesAlerts withEmail(String[] email) {
        this.email = email;
        return this;
    }
    @JsonProperty("slack")
    public ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack[] slack;
    public ListAlertPolicies200ApplicationJsonPoliciesAlerts withSlack(ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack[] slack) {
        this.slack = slack;
        return this;
    }
}