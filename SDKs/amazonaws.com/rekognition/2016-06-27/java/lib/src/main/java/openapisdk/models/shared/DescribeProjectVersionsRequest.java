package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeProjectVersionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeProjectVersionsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeProjectVersionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ProjectArn")
    public String projectArn;
    public DescribeProjectVersionsRequest withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionNames")
    public String[] versionNames;
    public DescribeProjectVersionsRequest withVersionNames(String[] versionNames) {
        this.versionNames = versionNames;
        return this;
    }
}