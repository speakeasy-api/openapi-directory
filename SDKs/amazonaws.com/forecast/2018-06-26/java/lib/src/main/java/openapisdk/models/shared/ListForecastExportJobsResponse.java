package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListForecastExportJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastExportJobs")
    public ForecastExportJobSummary[] forecastExportJobs;
    public ListForecastExportJobsResponse withForecastExportJobs(ForecastExportJobSummary[] forecastExportJobs) {
        this.forecastExportJobs = forecastExportJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListForecastExportJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}