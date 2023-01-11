package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetStatisticsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationField")
    public String aggregationField;
    public GetStatisticsRequestBody withAggregationField(String aggregationField) {
        this.aggregationField = aggregationField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexName")
    public String indexName;
    public GetStatisticsRequestBody withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonProperty("queryString")
    public String queryString;
    public GetStatisticsRequestBody withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryVersion")
    public String queryVersion;
    public GetStatisticsRequestBody withQueryVersion(String queryVersion) {
        this.queryVersion = queryVersion;
        return this;
    }
}