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
 * Bucket
 * Describes an Amazon Lightsail bucket.
**/
public class Bucket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ableToUpdateBundle")
    public Boolean ableToUpdateBundle;
    public Bucket withAbleToUpdateBundle(Boolean ableToUpdateBundle) {
        this.ableToUpdateBundle = ableToUpdateBundle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessRules")
    public AccessRules accessRules;
    public Bucket withAccessRules(AccessRules accessRules) {
        this.accessRules = accessRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Bucket withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleId")
    public String bundleId;
    public Bucket withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Bucket withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public ResourceLocation location;
    public Bucket withLocation(ResourceLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Bucket withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectVersioning")
    public String objectVersioning;
    public Bucket withObjectVersioning(String objectVersioning) {
        this.objectVersioning = objectVersioning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readonlyAccessAccounts")
    public String[] readonlyAccessAccounts;
    public Bucket withReadonlyAccessAccounts(String[] readonlyAccessAccounts) {
        this.readonlyAccessAccounts = readonlyAccessAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public String resourceType;
    public Bucket withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourcesReceivingAccess")
    public ResourceReceivingAccess[] resourcesReceivingAccess;
    public Bucket withResourcesReceivingAccess(ResourceReceivingAccess[] resourcesReceivingAccess) {
        this.resourcesReceivingAccess = resourcesReceivingAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public BucketState state;
    public Bucket withState(BucketState state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportCode")
    public String supportCode;
    public Bucket withSupportCode(String supportCode) {
        this.supportCode = supportCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public Bucket withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Bucket withUrl(String url) {
        this.url = url;
        return this;
    }
}