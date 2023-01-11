package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDatasetGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetGroups")
    public DatasetGroupSummary[] datasetGroups;
    public ListDatasetGroupsResponse withDatasetGroups(DatasetGroupSummary[] datasetGroups) {
        this.datasetGroups = datasetGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDatasetGroupsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}