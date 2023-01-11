package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * EventSubscriptionsList
 * Describes event subscriptions.
**/
public class EventSubscriptionsList {
    public String custSubscriptionId;
    public EventSubscriptionsList withCustSubscriptionId(String custSubscriptionId) {
        this.custSubscriptionId = custSubscriptionId;
        return this;
    }
    public String customerAwsId;
    public EventSubscriptionsList withCustomerAwsId(String customerAwsId) {
        this.customerAwsId = customerAwsId;
        return this;
    }
    public Boolean enabled;
    public EventSubscriptionsList withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public java.util.Map<String, Object>[] eventCategoriesList;
    public EventSubscriptionsList withEventCategoriesList(java.util.Map<String, Object>[] eventCategoriesList) {
        this.eventCategoriesList = eventCategoriesList;
        return this;
    }
    public String severity;
    public EventSubscriptionsList withSeverity(String severity) {
        this.severity = severity;
        return this;
    }
    public String snsTopicArn;
    public EventSubscriptionsList withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
    public java.util.Map<String, Object>[] sourceIdsList;
    public EventSubscriptionsList withSourceIdsList(java.util.Map<String, Object>[] sourceIdsList) {
        this.sourceIdsList = sourceIdsList;
        return this;
    }
    public String sourceType;
    public EventSubscriptionsList withSourceType(String sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    public String status;
    public EventSubscriptionsList withStatus(String status) {
        this.status = status;
        return this;
    }
    public OffsetDateTime subscriptionCreationTime;
    public EventSubscriptionsList withSubscriptionCreationTime(OffsetDateTime subscriptionCreationTime) {
        this.subscriptionCreationTime = subscriptionCreationTime;
        return this;
    }
    public TagList[] tags;
    public EventSubscriptionsList withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
}