package openapisdk.models.shared;



/**
 * ResourceQuota
 * The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account.
**/
public class ResourceQuota {
    public Long maximum;
    public ResourceQuota withMaximum(Long maximum) {
        this.maximum = maximum;
        return this;
    }
}