package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListFhirExportJobsRequest {
    @JsonProperty("DatastoreId")
    public String datastoreId;
    public ListFhirExportJobsRequest withDatastoreId(String datastoreId) {
        this.datastoreId = datastoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobName")
    public String jobName;
    public ListFhirExportJobsRequest withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobStatus")
    public JobStatusEnum jobStatus;
    public ListFhirExportJobsRequest withJobStatus(JobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListFhirExportJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFhirExportJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubmittedAfter")
    public OffsetDateTime submittedAfter;
    public ListFhirExportJobsRequest withSubmittedAfter(OffsetDateTime submittedAfter) {
        this.submittedAfter = submittedAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubmittedBefore")
    public OffsetDateTime submittedBefore;
    public ListFhirExportJobsRequest withSubmittedBefore(OffsetDateTime submittedBefore) {
        this.submittedBefore = submittedBefore;
        return this;
    }
}