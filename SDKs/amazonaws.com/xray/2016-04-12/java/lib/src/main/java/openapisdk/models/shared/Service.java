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
 * Service
 * Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
**/
public class Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public Service withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DurationHistogram")
    public HistogramEntry[] durationHistogram;
    public Service withDurationHistogram(HistogramEntry[] durationHistogram) {
        this.durationHistogram = durationHistogram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Edges")
    public Edge[] edges;
    public Service withEdges(Edge[] edges) {
        this.edges = edges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public Service withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Service withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Names")
    public String[] names;
    public Service withNames(String[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReferenceId")
    public Long referenceId;
    public Service withReferenceId(Long referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseTimeHistogram")
    public HistogramEntry[] responseTimeHistogram;
    public Service withResponseTimeHistogram(HistogramEntry[] responseTimeHistogram) {
        this.responseTimeHistogram = responseTimeHistogram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Root")
    public Boolean root;
    public Service withRoot(Boolean root) {
        this.root = root;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public Service withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public Service withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SummaryStatistics")
    public ServiceStatistics summaryStatistics;
    public Service withSummaryStatistics(ServiceStatistics summaryStatistics) {
        this.summaryStatistics = summaryStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public Service withType(String type) {
        this.type = type;
        return this;
    }
}