package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListImagePackagesRequestBody {
    @JsonProperty("imageBuildVersionArn")
    public String imageBuildVersionArn;
    public ListImagePackagesRequestBody withImageBuildVersionArn(String imageBuildVersionArn) {
        this.imageBuildVersionArn = imageBuildVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListImagePackagesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListImagePackagesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}