package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutItemsRequestBody {
    @JsonProperty("datasetArn")
    public String datasetArn;
    public PutItemsRequestBody withDatasetArn(String datasetArn) {
        this.datasetArn = datasetArn;
        return this;
    }
    @JsonProperty("items")
    public openapisdk.models.shared.Item[] items;
    public PutItemsRequestBody withItems(openapisdk.models.shared.Item[] items) {
        this.items = items;
        return this;
    }
}