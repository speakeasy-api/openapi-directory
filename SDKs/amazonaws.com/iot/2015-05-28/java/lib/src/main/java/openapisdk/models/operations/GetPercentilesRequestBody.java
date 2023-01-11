package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPercentilesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationField")
    public String aggregationField;
    public GetPercentilesRequestBody withAggregationField(String aggregationField) {
        this.aggregationField = aggregationField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexName")
    public String indexName;
    public GetPercentilesRequestBody withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percents")
    public Double[] percents;
    public GetPercentilesRequestBody withPercents(Double[] percents) {
        this.percents = percents;
        return this;
    }
    @JsonProperty("queryString")
    public String queryString;
    public GetPercentilesRequestBody withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryVersion")
    public String queryVersion;
    public GetPercentilesRequestBody withQueryVersion(String queryVersion) {
        this.queryVersion = queryVersion;
        return this;
    }
}