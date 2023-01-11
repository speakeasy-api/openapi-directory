package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StandardsSubscription
 * A resource that represents your subscription to a supported standard.
**/
public class StandardsSubscription {
    @JsonProperty("StandardsArn")
    public String standardsArn;
    public StandardsSubscription withStandardsArn(String standardsArn) {
        this.standardsArn = standardsArn;
        return this;
    }
    @JsonProperty("StandardsInput")
    public java.util.Map<String, String> standardsInput;
    public StandardsSubscription withStandardsInput(java.util.Map<String, String> standardsInput) {
        this.standardsInput = standardsInput;
        return this;
    }
    @JsonProperty("StandardsStatus")
    public StandardsStatusEnum standardsStatus;
    public StandardsSubscription withStandardsStatus(StandardsStatusEnum standardsStatus) {
        this.standardsStatus = standardsStatus;
        return this;
    }
    @JsonProperty("StandardsSubscriptionArn")
    public String standardsSubscriptionArn;
    public StandardsSubscription withStandardsSubscriptionArn(String standardsSubscriptionArn) {
        this.standardsSubscriptionArn = standardsSubscriptionArn;
        return this;
    }
}