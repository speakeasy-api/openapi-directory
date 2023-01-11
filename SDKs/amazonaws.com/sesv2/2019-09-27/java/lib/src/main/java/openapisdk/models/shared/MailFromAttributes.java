package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MailFromAttributes
 * A list of attributes that are associated with a MAIL FROM domain.
**/
public class MailFromAttributes {
    @JsonProperty("BehaviorOnMxFailure")
    public BehaviorOnMxFailureEnum behaviorOnMxFailure;
    public MailFromAttributes withBehaviorOnMxFailure(BehaviorOnMxFailureEnum behaviorOnMxFailure) {
        this.behaviorOnMxFailure = behaviorOnMxFailure;
        return this;
    }
    @JsonProperty("MailFromDomain")
    public String mailFromDomain;
    public MailFromAttributes withMailFromDomain(String mailFromDomain) {
        this.mailFromDomain = mailFromDomain;
        return this;
    }
    @JsonProperty("MailFromDomainStatus")
    public MailFromDomainStatusEnum mailFromDomainStatus;
    public MailFromAttributes withMailFromDomainStatus(MailFromDomainStatusEnum mailFromDomainStatus) {
        this.mailFromDomainStatus = mailFromDomainStatus;
        return this;
    }
}