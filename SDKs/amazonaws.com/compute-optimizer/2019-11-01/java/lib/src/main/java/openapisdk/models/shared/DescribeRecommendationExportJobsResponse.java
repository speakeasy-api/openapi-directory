package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRecommendationExportJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeRecommendationExportJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationExportJobs")
    public RecommendationExportJob[] recommendationExportJobs;
    public DescribeRecommendationExportJobsResponse withRecommendationExportJobs(RecommendationExportJob[] recommendationExportJobs) {
        this.recommendationExportJobs = recommendationExportJobs;
        return this;
    }
}