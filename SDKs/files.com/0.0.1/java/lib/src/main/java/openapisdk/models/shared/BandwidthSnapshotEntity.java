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
 * BandwidthSnapshotEntity
 * List Bandwidth Snapshots
**/
public class BandwidthSnapshotEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bytes_received")
    public Double bytesReceived;
    public BandwidthSnapshotEntity withBytesReceived(Double bytesReceived) {
        this.bytesReceived = bytesReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bytes_sent")
    public Double bytesSent;
    public BandwidthSnapshotEntity withBytesSent(Double bytesSent) {
        this.bytesSent = bytesSent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public BandwidthSnapshotEntity withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public BandwidthSnapshotEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("logged_at")
    public OffsetDateTime loggedAt;
    public BandwidthSnapshotEntity withLoggedAt(OffsetDateTime loggedAt) {
        this.loggedAt = loggedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests_get")
    public Double requestsGet;
    public BandwidthSnapshotEntity withRequestsGet(Double requestsGet) {
        this.requestsGet = requestsGet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests_other")
    public Double requestsOther;
    public BandwidthSnapshotEntity withRequestsOther(Double requestsOther) {
        this.requestsOther = requestsOther;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests_put")
    public Double requestsPut;
    public BandwidthSnapshotEntity withRequestsPut(Double requestsPut) {
        this.requestsPut = requestsPut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sync_bytes_received")
    public Double syncBytesReceived;
    public BandwidthSnapshotEntity withSyncBytesReceived(Double syncBytesReceived) {
        this.syncBytesReceived = syncBytesReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sync_bytes_sent")
    public Double syncBytesSent;
    public BandwidthSnapshotEntity withSyncBytesSent(Double syncBytesSent) {
        this.syncBytesSent = syncBytesSent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public BandwidthSnapshotEntity withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}