package openapisdk.models.shared;



public class IdentityMailFromDomainAttributes {
    public BehaviorOnMxFailureEnum behaviorOnMXFailure;
    public IdentityMailFromDomainAttributes withBehaviorOnMxFailure(BehaviorOnMxFailureEnum behaviorOnMXFailure) {
        this.behaviorOnMXFailure = behaviorOnMXFailure;
        return this;
    }
    public String mailFromDomain;
    public IdentityMailFromDomainAttributes withMailFromDomain(String mailFromDomain) {
        this.mailFromDomain = mailFromDomain;
        return this;
    }
    public CustomMailFromStatusEnum mailFromDomainStatus;
    public IdentityMailFromDomainAttributes withMailFromDomainStatus(CustomMailFromStatusEnum mailFromDomainStatus) {
        this.mailFromDomainStatus = mailFromDomainStatus;
        return this;
    }
}