package openapisdk.models.shared;



/**
 * UsageLimit
 * Describes a usage limit object for a cluster. 
**/
public class UsageLimit {
    public Long amount;
    public UsageLimit withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    public UsageLimitBreachActionEnum breachAction;
    public UsageLimit withBreachAction(UsageLimitBreachActionEnum breachAction) {
        this.breachAction = breachAction;
        return this;
    }
    public String clusterIdentifier;
    public UsageLimit withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    public UsageLimitFeatureTypeEnum featureType;
    public UsageLimit withFeatureType(UsageLimitFeatureTypeEnum featureType) {
        this.featureType = featureType;
        return this;
    }
    public UsageLimitLimitTypeEnum limitType;
    public UsageLimit withLimitType(UsageLimitLimitTypeEnum limitType) {
        this.limitType = limitType;
        return this;
    }
    public UsageLimitPeriodEnum period;
    public UsageLimit withPeriod(UsageLimitPeriodEnum period) {
        this.period = period;
        return this;
    }
    public TagList[] tags;
    public UsageLimit withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
    public String usageLimitId;
    public UsageLimit withUsageLimitId(String usageLimitId) {
        this.usageLimitId = usageLimitId;
        return this;
    }
}