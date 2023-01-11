package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRepositoriesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeRepositoriesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeRepositoriesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public DescribeRepositoriesRequest withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryNames")
    public String[] repositoryNames;
    public DescribeRepositoriesRequest withRepositoryNames(String[] repositoryNames) {
        this.repositoryNames = repositoryNames;
        return this;
    }
}