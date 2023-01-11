package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFindingsRequestBody {
    @JsonProperty("findingIds")
    public String[] findingIds;
    public GetFindingsRequestBody withFindingIds(String[] findingIds) {
        this.findingIds = findingIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortCriteria")
    public GetFindingsRequestBodySortCriteria sortCriteria;
    public GetFindingsRequestBody withSortCriteria(GetFindingsRequestBodySortCriteria sortCriteria) {
        this.sortCriteria = sortCriteria;
        return this;
    }
}