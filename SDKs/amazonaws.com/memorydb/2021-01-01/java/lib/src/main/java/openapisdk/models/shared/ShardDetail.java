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
 * ShardDetail
 * Provides details of a shard in a snapshot
**/
public class ShardDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Configuration")
    public ShardConfiguration configuration;
    public ShardDetail withConfiguration(ShardConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ShardDetail withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Size")
    public String size;
    public ShardDetail withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SnapshotCreationTime")
    public OffsetDateTime snapshotCreationTime;
    public ShardDetail withSnapshotCreationTime(OffsetDateTime snapshotCreationTime) {
        this.snapshotCreationTime = snapshotCreationTime;
        return this;
    }
}