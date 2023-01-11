package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFindingStatisticsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingCriteria")
    public GetFindingStatisticsRequestBodyFindingCriteria findingCriteria;
    public GetFindingStatisticsRequestBody withFindingCriteria(GetFindingStatisticsRequestBodyFindingCriteria findingCriteria) {
        this.findingCriteria = findingCriteria;
        return this;
    }
    @JsonProperty("groupBy")
    public GetFindingStatisticsRequestBodyGroupByEnum groupBy;
    public GetFindingStatisticsRequestBody withGroupBy(GetFindingStatisticsRequestBodyGroupByEnum groupBy) {
        this.groupBy = groupBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public GetFindingStatisticsRequestBody withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortCriteria")
    public GetFindingStatisticsRequestBodySortCriteria sortCriteria;
    public GetFindingStatisticsRequestBody withSortCriteria(GetFindingStatisticsRequestBodySortCriteria sortCriteria) {
        this.sortCriteria = sortCriteria;
        return this;
    }
}