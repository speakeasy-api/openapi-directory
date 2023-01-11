package openapisdk.models.shared;



/**
 * ResourceQuotas
 * A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect Elastic Beanstalk resource limits for this account.
**/
public class ResourceQuotas {
    public ResourceQuota applicationQuota;
    public ResourceQuotas withApplicationQuota(ResourceQuota applicationQuota) {
        this.applicationQuota = applicationQuota;
        return this;
    }
    public ResourceQuota applicationVersionQuota;
    public ResourceQuotas withApplicationVersionQuota(ResourceQuota applicationVersionQuota) {
        this.applicationVersionQuota = applicationVersionQuota;
        return this;
    }
    public ResourceQuota configurationTemplateQuota;
    public ResourceQuotas withConfigurationTemplateQuota(ResourceQuota configurationTemplateQuota) {
        this.configurationTemplateQuota = configurationTemplateQuota;
        return this;
    }
    public ResourceQuota customPlatformQuota;
    public ResourceQuotas withCustomPlatformQuota(ResourceQuota customPlatformQuota) {
        this.customPlatformQuota = customPlatformQuota;
        return this;
    }
    public ResourceQuota environmentQuota;
    public ResourceQuotas withEnvironmentQuota(ResourceQuota environmentQuota) {
        this.environmentQuota = environmentQuota;
        return this;
    }
}