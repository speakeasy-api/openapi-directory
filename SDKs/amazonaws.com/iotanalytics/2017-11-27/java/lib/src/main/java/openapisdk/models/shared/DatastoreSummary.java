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
 * DatastoreSummary
 * A summary of information about a data store.
**/
public class DatastoreSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public DatastoreSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datastoreName")
    public String datastoreName;
    public DatastoreSummary withDatastoreName(String datastoreName) {
        this.datastoreName = datastoreName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datastorePartitions")
    public DatastorePartitions datastorePartitions;
    public DatastoreSummary withDatastorePartitions(DatastorePartitions datastorePartitions) {
        this.datastorePartitions = datastorePartitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datastoreStorage")
    public DatastoreStorageSummary datastoreStorage;
    public DatastoreSummary withDatastoreStorage(DatastoreStorageSummary datastoreStorage) {
        this.datastoreStorage = datastoreStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileFormatType")
    public FileFormatTypeEnum fileFormatType;
    public DatastoreSummary withFileFormatType(FileFormatTypeEnum fileFormatType) {
        this.fileFormatType = fileFormatType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastMessageArrivalTime")
    public OffsetDateTime lastMessageArrivalTime;
    public DatastoreSummary withLastMessageArrivalTime(OffsetDateTime lastMessageArrivalTime) {
        this.lastMessageArrivalTime = lastMessageArrivalTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public DatastoreSummary withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DatastoreStatusEnum status;
    public DatastoreSummary withStatus(DatastoreStatusEnum status) {
        this.status = status;
        return this;
    }
}