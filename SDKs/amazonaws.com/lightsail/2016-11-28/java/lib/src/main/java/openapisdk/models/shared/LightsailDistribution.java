package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * LightsailDistribution
 * Describes an Amazon Lightsail content delivery network (CDN) distribution.
**/
public class LightsailDistribution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ableToUpdateBundle")
    public Boolean ableToUpdateBundle;
    public LightsailDistribution withAbleToUpdateBundle(Boolean ableToUpdateBundle) {
        this.ableToUpdateBundle = ableToUpdateBundle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternativeDomainNames")
    public String[] alternativeDomainNames;
    public LightsailDistribution withAlternativeDomainNames(String[] alternativeDomainNames) {
        this.alternativeDomainNames = alternativeDomainNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public LightsailDistribution withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleId")
    public String bundleId;
    public LightsailDistribution withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheBehaviorSettings")
    public CacheSettings cacheBehaviorSettings;
    public LightsailDistribution withCacheBehaviorSettings(CacheSettings cacheBehaviorSettings) {
        this.cacheBehaviorSettings = cacheBehaviorSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheBehaviors")
    public CacheBehaviorPerPath[] cacheBehaviors;
    public LightsailDistribution withCacheBehaviors(CacheBehaviorPerPath[] cacheBehaviors) {
        this.cacheBehaviors = cacheBehaviors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateName")
    public String certificateName;
    public LightsailDistribution withCertificateName(String certificateName) {
        this.certificateName = certificateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public LightsailDistribution withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultCacheBehavior")
    public CacheBehavior defaultCacheBehavior;
    public LightsailDistribution withDefaultCacheBehavior(CacheBehavior defaultCacheBehavior) {
        this.defaultCacheBehavior = defaultCacheBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public LightsailDistribution withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddressType")
    public IpAddressTypeEnum ipAddressType;
    public LightsailDistribution withIpAddressType(IpAddressTypeEnum ipAddressType) {
        this.ipAddressType = ipAddressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEnabled")
    public Boolean isEnabled;
    public LightsailDistribution withIsEnabled(Boolean isEnabled) {
        this.isEnabled = isEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public ResourceLocation location;
    public LightsailDistribution withLocation(ResourceLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LightsailDistribution withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin")
    public Origin origin;
    public LightsailDistribution withOrigin(Origin origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originPublicDNS")
    public String originPublicDNS;
    public LightsailDistribution withOriginPublicDns(String originPublicDNS) {
        this.originPublicDNS = originPublicDNS;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;
    public LightsailDistribution withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public LightsailDistribution withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportCode")
    public String supportCode;
    public LightsailDistribution withSupportCode(String supportCode) {
        this.supportCode = supportCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public LightsailDistribution withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}