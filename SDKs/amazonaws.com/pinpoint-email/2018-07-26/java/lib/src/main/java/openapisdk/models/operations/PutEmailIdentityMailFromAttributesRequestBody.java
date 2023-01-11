package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutEmailIdentityMailFromAttributesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BehaviorOnMxFailure")
    public PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum behaviorOnMxFailure;
    public PutEmailIdentityMailFromAttributesRequestBody withBehaviorOnMxFailure(PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum behaviorOnMxFailure) {
        this.behaviorOnMxFailure = behaviorOnMxFailure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MailFromDomain")
    public String mailFromDomain;
    public PutEmailIdentityMailFromAttributesRequestBody withMailFromDomain(String mailFromDomain) {
        this.mailFromDomain = mailFromDomain;
        return this;
    }
}