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
 * Disk
 * Describes a block storage disk.
**/
public class Disk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addOns")
    public AddOn[] addOns;
    public Disk withAddOns(AddOn[] addOns) {
        this.addOns = addOns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Disk withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachedTo")
    public String attachedTo;
    public Disk withAttachedTo(String attachedTo) {
        this.attachedTo = attachedTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachmentState")
    public java.util.Map<String, Object> attachmentState;
    public Disk withAttachmentState(java.util.Map<String, Object> attachmentState) {
        this.attachmentState = attachmentState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Disk withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gbInUse")
    public java.util.Map<String, Object> gbInUse;
    public Disk withGbInUse(java.util.Map<String, Object> gbInUse) {
        this.gbInUse = gbInUse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iops")
    public Long iops;
    public Disk withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAttached")
    public Boolean isAttached;
    public Disk withIsAttached(Boolean isAttached) {
        this.isAttached = isAttached;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSystemDisk")
    public Boolean isSystemDisk;
    public Disk withIsSystemDisk(Boolean isSystemDisk) {
        this.isSystemDisk = isSystemDisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public ResourceLocation location;
    public Disk withLocation(ResourceLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Disk withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public Disk withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;
    public Disk withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeInGb")
    public Long sizeInGb;
    public Disk withSizeInGb(Long sizeInGb) {
        this.sizeInGb = sizeInGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public DiskStateEnum state;
    public Disk withState(DiskStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportCode")
    public String supportCode;
    public Disk withSupportCode(String supportCode) {
        this.supportCode = supportCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public Disk withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}