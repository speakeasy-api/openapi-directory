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
 * WorkspaceBundle
 * Describes a WorkSpace bundle.
**/
public class WorkspaceBundle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BundleId")
    public String bundleId;
    public WorkspaceBundle withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputeType")
    public ComputeType computeType;
    public WorkspaceBundle withComputeType(ComputeType computeType) {
        this.computeType = computeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public WorkspaceBundle withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public WorkspaceBundle withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageId")
    public String imageId;
    public WorkspaceBundle withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedTime")
    public OffsetDateTime lastUpdatedTime;
    public WorkspaceBundle withLastUpdatedTime(OffsetDateTime lastUpdatedTime) {
        this.lastUpdatedTime = lastUpdatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public WorkspaceBundle withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Owner")
    public String owner;
    public WorkspaceBundle withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RootStorage")
    public RootStorage rootStorage;
    public WorkspaceBundle withRootStorage(RootStorage rootStorage) {
        this.rootStorage = rootStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserStorage")
    public UserStorage userStorage;
    public WorkspaceBundle withUserStorage(UserStorage userStorage) {
        this.userStorage = userStorage;
        return this;
    }
}