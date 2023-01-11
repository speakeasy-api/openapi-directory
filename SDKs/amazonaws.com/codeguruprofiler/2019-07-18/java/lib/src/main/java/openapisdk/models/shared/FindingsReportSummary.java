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
 * FindingsReportSummary
 *  Information about potential recommendations that might be created from the analysis of profiling data. 
**/
public class FindingsReportSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FindingsReportSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("profileEndTime")
    public OffsetDateTime profileEndTime;
    public FindingsReportSummary withProfileEndTime(OffsetDateTime profileEndTime) {
        this.profileEndTime = profileEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("profileStartTime")
    public OffsetDateTime profileStartTime;
    public FindingsReportSummary withProfileStartTime(OffsetDateTime profileStartTime) {
        this.profileStartTime = profileStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profilingGroupName")
    public String profilingGroupName;
    public FindingsReportSummary withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalNumberOfFindings")
    public Long totalNumberOfFindings;
    public FindingsReportSummary withTotalNumberOfFindings(Long totalNumberOfFindings) {
        this.totalNumberOfFindings = totalNumberOfFindings;
        return this;
    }
}