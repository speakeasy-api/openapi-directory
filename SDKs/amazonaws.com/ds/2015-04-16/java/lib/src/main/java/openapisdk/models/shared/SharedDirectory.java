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
 * SharedDirectory
 * Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted.
**/
public class SharedDirectory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDateTime")
    public OffsetDateTime createdDateTime;
    public SharedDirectory withCreatedDateTime(OffsetDateTime createdDateTime) {
        this.createdDateTime = createdDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public SharedDirectory withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerAccountId")
    public String ownerAccountId;
    public SharedDirectory withOwnerAccountId(String ownerAccountId) {
        this.ownerAccountId = ownerAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerDirectoryId")
    public String ownerDirectoryId;
    public SharedDirectory withOwnerDirectoryId(String ownerDirectoryId) {
        this.ownerDirectoryId = ownerDirectoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareMethod")
    public ShareMethodEnum shareMethod;
    public SharedDirectory withShareMethod(ShareMethodEnum shareMethod) {
        this.shareMethod = shareMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareNotes")
    public String shareNotes;
    public SharedDirectory withShareNotes(String shareNotes) {
        this.shareNotes = shareNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareStatus")
    public ShareStatusEnum shareStatus;
    public SharedDirectory withShareStatus(ShareStatusEnum shareStatus) {
        this.shareStatus = shareStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SharedAccountId")
    public String sharedAccountId;
    public SharedDirectory withSharedAccountId(String sharedAccountId) {
        this.sharedAccountId = sharedAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SharedDirectoryId")
    public String sharedDirectoryId;
    public SharedDirectory withSharedDirectoryId(String sharedDirectoryId) {
        this.sharedDirectoryId = sharedDirectoryId;
        return this;
    }
}