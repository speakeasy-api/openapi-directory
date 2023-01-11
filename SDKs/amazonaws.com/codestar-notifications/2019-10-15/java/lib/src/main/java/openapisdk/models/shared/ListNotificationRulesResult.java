package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListNotificationRulesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListNotificationRulesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationRules")
    public NotificationRuleSummary[] notificationRules;
    public ListNotificationRulesResult withNotificationRules(NotificationRuleSummary[] notificationRules) {
        this.notificationRules = notificationRules;
        return this;
    }
}