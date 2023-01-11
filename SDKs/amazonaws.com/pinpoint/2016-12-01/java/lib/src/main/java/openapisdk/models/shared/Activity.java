package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Activity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CUSTOM")
    public CustomMessageActivity custom;
    public Activity withCustom(CustomMessageActivity custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConditionalSplit")
    public ConditionalSplitActivity conditionalSplit;
    public Activity withConditionalSplit(ConditionalSplitActivity conditionalSplit) {
        this.conditionalSplit = conditionalSplit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Activity withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EMAIL")
    public EmailMessageActivity email;
    public Activity withEmail(EmailMessageActivity email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Holdout")
    public HoldoutActivity holdout;
    public Activity withHoldout(HoldoutActivity holdout) {
        this.holdout = holdout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiCondition")
    public MultiConditionalSplitActivity multiCondition;
    public Activity withMultiCondition(MultiConditionalSplitActivity multiCondition) {
        this.multiCondition = multiCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PUSH")
    public PushMessageActivity push;
    public Activity withPush(PushMessageActivity push) {
        this.push = push;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RandomSplit")
    public RandomSplitActivity randomSplit;
    public Activity withRandomSplit(RandomSplitActivity randomSplit) {
        this.randomSplit = randomSplit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SMS")
    public SmsMessageActivity sms;
    public Activity withSms(SmsMessageActivity sms) {
        this.sms = sms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Wait")
    public WaitActivity wait;
    public Activity withWait(WaitActivity wait) {
        this.wait = wait;
        return this;
    }
}