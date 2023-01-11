package openapisdk.models.shared;



/**
 * ApplicationVersionLifecycleConfig
 * <p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p>
**/
public class ApplicationVersionLifecycleConfig {
    public MaxAgeRule maxAgeRule;
    public ApplicationVersionLifecycleConfig withMaxAgeRule(MaxAgeRule maxAgeRule) {
        this.maxAgeRule = maxAgeRule;
        return this;
    }
    public MaxCountRule maxCountRule;
    public ApplicationVersionLifecycleConfig withMaxCountRule(MaxCountRule maxCountRule) {
        this.maxCountRule = maxCountRule;
        return this;
    }
}