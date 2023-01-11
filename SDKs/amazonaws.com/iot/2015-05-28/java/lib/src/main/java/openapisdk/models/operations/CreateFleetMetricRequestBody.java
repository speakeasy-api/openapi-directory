package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFleetMetricRequestBody {
    @JsonProperty("aggregationField")
    public String aggregationField;
    public CreateFleetMetricRequestBody withAggregationField(String aggregationField) {
        this.aggregationField = aggregationField;
        return this;
    }
    @JsonProperty("aggregationType")
    public CreateFleetMetricRequestBodyAggregationType aggregationType;
    public CreateFleetMetricRequestBody withAggregationType(CreateFleetMetricRequestBodyAggregationType aggregationType) {
        this.aggregationType = aggregationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateFleetMetricRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexName")
    public String indexName;
    public CreateFleetMetricRequestBody withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonProperty("period")
    public Long period;
    public CreateFleetMetricRequestBody withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonProperty("queryString")
    public String queryString;
    public CreateFleetMetricRequestBody withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryVersion")
    public String queryVersion;
    public CreateFleetMetricRequestBody withQueryVersion(String queryVersion) {
        this.queryVersion = queryVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateFleetMetricRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public CreateFleetMetricRequestBodyUnitEnum unit;
    public CreateFleetMetricRequestBody withUnit(CreateFleetMetricRequestBodyUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}