package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListJobsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arrayJobId")
    public String arrayJobId;
    public ListJobsRequestBody withArrayJobId(String arrayJobId) {
        this.arrayJobId = arrayJobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public openapisdk.models.shared.KeyValuesPair[] filters;
    public ListJobsRequestBody withFilters(openapisdk.models.shared.KeyValuesPair[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobQueue")
    public String jobQueue;
    public ListJobsRequestBody withJobQueue(String jobQueue) {
        this.jobQueue = jobQueue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobStatus")
    public ListJobsRequestBodyJobStatusEnum jobStatus;
    public ListJobsRequestBody withJobStatus(ListJobsRequestBodyJobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListJobsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiNodeJobId")
    public String multiNodeJobId;
    public ListJobsRequestBody withMultiNodeJobId(String multiNodeJobId) {
        this.multiNodeJobId = multiNodeJobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListJobsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}