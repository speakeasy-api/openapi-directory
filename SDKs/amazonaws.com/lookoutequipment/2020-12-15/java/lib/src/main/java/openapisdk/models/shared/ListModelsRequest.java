package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListModelsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetNameBeginsWith")
    public String datasetNameBeginsWith;
    public ListModelsRequest withDatasetNameBeginsWith(String datasetNameBeginsWith) {
        this.datasetNameBeginsWith = datasetNameBeginsWith;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListModelsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelNameBeginsWith")
    public String modelNameBeginsWith;
    public ListModelsRequest withModelNameBeginsWith(String modelNameBeginsWith) {
        this.modelNameBeginsWith = modelNameBeginsWith;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListModelsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ModelStatusEnum status;
    public ListModelsRequest withStatus(ModelStatusEnum status) {
        this.status = status;
        return this;
    }
}