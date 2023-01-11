package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListImagePipelineImagesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public openapisdk.models.shared.Filter[] filters;
    public ListImagePipelineImagesRequestBody withFilters(openapisdk.models.shared.Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonProperty("imagePipelineArn")
    public String imagePipelineArn;
    public ListImagePipelineImagesRequestBody withImagePipelineArn(String imagePipelineArn) {
        this.imagePipelineArn = imagePipelineArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListImagePipelineImagesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListImagePipelineImagesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}