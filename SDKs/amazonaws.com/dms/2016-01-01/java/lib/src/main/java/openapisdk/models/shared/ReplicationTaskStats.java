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
 * ReplicationTaskStats
 * In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task.
**/
public class ReplicationTaskStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElapsedTimeMillis")
    public Long elapsedTimeMillis;
    public ReplicationTaskStats withElapsedTimeMillis(Long elapsedTimeMillis) {
        this.elapsedTimeMillis = elapsedTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FreshStartDate")
    public OffsetDateTime freshStartDate;
    public ReplicationTaskStats withFreshStartDate(OffsetDateTime freshStartDate) {
        this.freshStartDate = freshStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FullLoadFinishDate")
    public OffsetDateTime fullLoadFinishDate;
    public ReplicationTaskStats withFullLoadFinishDate(OffsetDateTime fullLoadFinishDate) {
        this.fullLoadFinishDate = fullLoadFinishDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FullLoadProgressPercent")
    public Long fullLoadProgressPercent;
    public ReplicationTaskStats withFullLoadProgressPercent(Long fullLoadProgressPercent) {
        this.fullLoadProgressPercent = fullLoadProgressPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FullLoadStartDate")
    public OffsetDateTime fullLoadStartDate;
    public ReplicationTaskStats withFullLoadStartDate(OffsetDateTime fullLoadStartDate) {
        this.fullLoadStartDate = fullLoadStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartDate")
    public OffsetDateTime startDate;
    public ReplicationTaskStats withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StopDate")
    public OffsetDateTime stopDate;
    public ReplicationTaskStats withStopDate(OffsetDateTime stopDate) {
        this.stopDate = stopDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TablesErrored")
    public Long tablesErrored;
    public ReplicationTaskStats withTablesErrored(Long tablesErrored) {
        this.tablesErrored = tablesErrored;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TablesLoaded")
    public Long tablesLoaded;
    public ReplicationTaskStats withTablesLoaded(Long tablesLoaded) {
        this.tablesLoaded = tablesLoaded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TablesLoading")
    public Long tablesLoading;
    public ReplicationTaskStats withTablesLoading(Long tablesLoading) {
        this.tablesLoading = tablesLoading;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TablesQueued")
    public Long tablesQueued;
    public ReplicationTaskStats withTablesQueued(Long tablesQueued) {
        this.tablesQueued = tablesQueued;
        return this;
    }
}