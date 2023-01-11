package openapisdk.models.shared;



public class EventSubscription {
    public String custSubscriptionId;
    public EventSubscription withCustSubscriptionId(String custSubscriptionId) {
        this.custSubscriptionId = custSubscriptionId;
        return this;
    }
    public String customerAwsId;
    public EventSubscription withCustomerAwsId(String customerAwsId) {
        this.customerAwsId = customerAwsId;
        return this;
    }
    public Boolean enabled;
    public EventSubscription withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public java.util.Map<String, Object>[] eventCategoriesList;
    public EventSubscription withEventCategoriesList(java.util.Map<String, Object>[] eventCategoriesList) {
        this.eventCategoriesList = eventCategoriesList;
        return this;
    }
    public String id;
    public EventSubscription withId(String id) {
        this.id = id;
        return this;
    }
    public String snsTopicArn;
    public EventSubscription withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
    public java.util.Map<String, Object>[] sourceIdsList;
    public EventSubscription withSourceIdsList(java.util.Map<String, Object>[] sourceIdsList) {
        this.sourceIdsList = sourceIdsList;
        return this;
    }
    public String sourceType;
    public EventSubscription withSourceType(String sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    public String status;
    public EventSubscription withStatus(String status) {
        this.status = status;
        return this;
    }
    public String subscriptionCreationTime;
    public EventSubscription withSubscriptionCreationTime(String subscriptionCreationTime) {
        this.subscriptionCreationTime = subscriptionCreationTime;
        return this;
    }
}