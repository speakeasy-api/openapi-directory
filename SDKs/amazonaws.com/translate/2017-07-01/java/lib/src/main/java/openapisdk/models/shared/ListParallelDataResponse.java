package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListParallelDataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListParallelDataResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParallelDataPropertiesList")
    public ParallelDataProperties[] parallelDataPropertiesList;
    public ListParallelDataResponse withParallelDataPropertiesList(ParallelDataProperties[] parallelDataPropertiesList) {
        this.parallelDataPropertiesList = parallelDataPropertiesList;
        return this;
    }
}