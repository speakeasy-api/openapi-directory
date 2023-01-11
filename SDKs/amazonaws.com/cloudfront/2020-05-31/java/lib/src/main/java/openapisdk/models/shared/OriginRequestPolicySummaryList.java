package openapisdk.models.shared;



/**
 * OriginRequestPolicySummaryList
 * Contains an origin request policy.
**/
public class OriginRequestPolicySummaryList {
    public OriginRequestPolicy originRequestPolicy;
    public OriginRequestPolicySummaryList withOriginRequestPolicy(OriginRequestPolicy originRequestPolicy) {
        this.originRequestPolicy = originRequestPolicy;
        return this;
    }
    public OriginRequestPolicyTypeEnum type;
    public OriginRequestPolicySummaryList withType(OriginRequestPolicyTypeEnum type) {
        this.type = type;
        return this;
    }
}