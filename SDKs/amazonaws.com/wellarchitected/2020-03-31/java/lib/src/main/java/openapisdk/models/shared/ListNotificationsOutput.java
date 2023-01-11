package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListNotificationsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListNotificationsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationSummaries")
    public NotificationSummary[] notificationSummaries;
    public ListNotificationsOutput withNotificationSummaries(NotificationSummary[] notificationSummaries) {
        this.notificationSummaries = notificationSummaries;
        return this;
    }
}