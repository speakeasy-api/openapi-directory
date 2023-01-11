package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCloudFrontDistributionDetails
 * A distribution configuration.
**/
public class AwsCloudFrontDistributionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CacheBehaviors")
    public AwsCloudFrontDistributionCacheBehaviors cacheBehaviors;
    public AwsCloudFrontDistributionDetails withCacheBehaviors(AwsCloudFrontDistributionCacheBehaviors cacheBehaviors) {
        this.cacheBehaviors = cacheBehaviors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultCacheBehavior")
    public AwsCloudFrontDistributionDefaultCacheBehavior defaultCacheBehavior;
    public AwsCloudFrontDistributionDetails withDefaultCacheBehavior(AwsCloudFrontDistributionDefaultCacheBehavior defaultCacheBehavior) {
        this.defaultCacheBehavior = defaultCacheBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultRootObject")
    public String defaultRootObject;
    public AwsCloudFrontDistributionDetails withDefaultRootObject(String defaultRootObject) {
        this.defaultRootObject = defaultRootObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainName")
    public String domainName;
    public AwsCloudFrontDistributionDetails withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ETag")
    public String eTag;
    public AwsCloudFrontDistributionDetails withETag(String eTag) {
        this.eTag = eTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModifiedTime")
    public String lastModifiedTime;
    public AwsCloudFrontDistributionDetails withLastModifiedTime(String lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Logging")
    public AwsCloudFrontDistributionLogging logging;
    public AwsCloudFrontDistributionDetails withLogging(AwsCloudFrontDistributionLogging logging) {
        this.logging = logging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OriginGroups")
    public AwsCloudFrontDistributionOriginGroups originGroups;
    public AwsCloudFrontDistributionDetails withOriginGroups(AwsCloudFrontDistributionOriginGroups originGroups) {
        this.originGroups = originGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Origins")
    public AwsCloudFrontDistributionOrigins origins;
    public AwsCloudFrontDistributionDetails withOrigins(AwsCloudFrontDistributionOrigins origins) {
        this.origins = origins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public AwsCloudFrontDistributionDetails withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebAclId")
    public String webAclId;
    public AwsCloudFrontDistributionDetails withWebAclId(String webAclId) {
        this.webAclId = webAclId;
        return this;
    }
}