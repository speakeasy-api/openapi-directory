package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBucketsAggregationRequestBody {
    @JsonProperty("aggregationField")
    public String aggregationField;
    public GetBucketsAggregationRequestBody withAggregationField(String aggregationField) {
        this.aggregationField = aggregationField;
        return this;
    }
    @JsonProperty("bucketsAggregationType")
    public GetBucketsAggregationRequestBodyBucketsAggregationType bucketsAggregationType;
    public GetBucketsAggregationRequestBody withBucketsAggregationType(GetBucketsAggregationRequestBodyBucketsAggregationType bucketsAggregationType) {
        this.bucketsAggregationType = bucketsAggregationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexName")
    public String indexName;
    public GetBucketsAggregationRequestBody withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonProperty("queryString")
    public String queryString;
    public GetBucketsAggregationRequestBody withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryVersion")
    public String queryVersion;
    public GetBucketsAggregationRequestBody withQueryVersion(String queryVersion) {
        this.queryVersion = queryVersion;
        return this;
    }
}