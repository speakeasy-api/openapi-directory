package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DistributionSummaryList
 * A summary of the information about a CloudFront distribution.
**/
public class DistributionSummaryList {
    public String arn;
    public DistributionSummaryList withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public Aliases aliases;
    public DistributionSummaryList withAliases(Aliases aliases) {
        this.aliases = aliases;
        return this;
    }
    public CacheBehaviors cacheBehaviors;
    public DistributionSummaryList withCacheBehaviors(CacheBehaviors cacheBehaviors) {
        this.cacheBehaviors = cacheBehaviors;
        return this;
    }
    public String comment;
    public DistributionSummaryList withComment(String comment) {
        this.comment = comment;
        return this;
    }
    public CustomErrorResponses customErrorResponses;
    public DistributionSummaryList withCustomErrorResponses(CustomErrorResponses customErrorResponses) {
        this.customErrorResponses = customErrorResponses;
        return this;
    }
    public DefaultCacheBehavior defaultCacheBehavior;
    public DistributionSummaryList withDefaultCacheBehavior(DefaultCacheBehavior defaultCacheBehavior) {
        this.defaultCacheBehavior = defaultCacheBehavior;
        return this;
    }
    public String domainName;
    public DistributionSummaryList withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    public Boolean enabled;
    public DistributionSummaryList withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public HttpVersionEnum httpVersion;
    public DistributionSummaryList withHttpVersion(HttpVersionEnum httpVersion) {
        this.httpVersion = httpVersion;
        return this;
    }
    public String id;
    public DistributionSummaryList withId(String id) {
        this.id = id;
        return this;
    }
    public Boolean isIpv6Enabled;
    public DistributionSummaryList withIsIpv6Enabled(Boolean isIpv6Enabled) {
        this.isIpv6Enabled = isIpv6Enabled;
        return this;
    }
    public OffsetDateTime lastModifiedTime;
    public DistributionSummaryList withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    public Origins origins;
    public DistributionSummaryList withOrigins(Origins origins) {
        this.origins = origins;
        return this;
    }
    public PriceClassEnum priceClass;
    public DistributionSummaryList withPriceClass(PriceClassEnum priceClass) {
        this.priceClass = priceClass;
        return this;
    }
    public Restrictions restrictions;
    public DistributionSummaryList withRestrictions(Restrictions restrictions) {
        this.restrictions = restrictions;
        return this;
    }
    public String status;
    public DistributionSummaryList withStatus(String status) {
        this.status = status;
        return this;
    }
    public ViewerCertificate viewerCertificate;
    public DistributionSummaryList withViewerCertificate(ViewerCertificate viewerCertificate) {
        this.viewerCertificate = viewerCertificate;
        return this;
    }
    public String webACLId;
    public DistributionSummaryList withWebAclId(String webACLId) {
        this.webACLId = webACLId;
        return this;
    }
}