package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeExportConfigurationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportIds")
    public String[] exportIds;
    public DescribeExportConfigurationsRequest withExportIds(String[] exportIds) {
        this.exportIds = exportIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeExportConfigurationsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeExportConfigurationsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}