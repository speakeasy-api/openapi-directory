package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeSubscribersForNotificationResponse
 *  Response of DescribeSubscribersForNotification 
**/
public class DescribeSubscribersForNotificationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeSubscribersForNotificationResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subscribers")
    public Subscriber[] subscribers;
    public DescribeSubscribersForNotificationResponse withSubscribers(Subscriber[] subscribers) {
        this.subscribers = subscribers;
        return this;
    }
}