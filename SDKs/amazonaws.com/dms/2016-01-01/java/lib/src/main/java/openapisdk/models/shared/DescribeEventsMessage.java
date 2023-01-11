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
 * DescribeEventsMessage
 * <p/>
**/
public class DescribeEventsMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Duration")
    public Long duration;
    public DescribeEventsMessage withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public DescribeEventsMessage withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventCategories")
    public String[] eventCategories;
    public DescribeEventsMessage withEventCategories(String[] eventCategories) {
        this.eventCategories = eventCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public Filter[] filters;
    public DescribeEventsMessage withFilters(Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeEventsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxRecords")
    public Long maxRecords;
    public DescribeEventsMessage withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceIdentifier")
    public String sourceIdentifier;
    public DescribeEventsMessage withSourceIdentifier(String sourceIdentifier) {
        this.sourceIdentifier = sourceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceType")
    public SourceTypeEnum sourceType;
    public DescribeEventsMessage withSourceType(SourceTypeEnum sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public DescribeEventsMessage withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}