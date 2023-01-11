package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFleetMetricRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationField")
    public String aggregationField;
    public UpdateFleetMetricRequestBody withAggregationField(String aggregationField) {
        this.aggregationField = aggregationField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationType")
    public UpdateFleetMetricRequestBodyAggregationType aggregationType;
    public UpdateFleetMetricRequestBody withAggregationType(UpdateFleetMetricRequestBodyAggregationType aggregationType) {
        this.aggregationType = aggregationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateFleetMetricRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedVersion")
    public Long expectedVersion;
    public UpdateFleetMetricRequestBody withExpectedVersion(Long expectedVersion) {
        this.expectedVersion = expectedVersion;
        return this;
    }
    @JsonProperty("indexName")
    public String indexName;
    public UpdateFleetMetricRequestBody withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public Long period;
    public UpdateFleetMetricRequestBody withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryString")
    public String queryString;
    public UpdateFleetMetricRequestBody withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryVersion")
    public String queryVersion;
    public UpdateFleetMetricRequestBody withQueryVersion(String queryVersion) {
        this.queryVersion = queryVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public UpdateFleetMetricRequestBodyUnitEnum unit;
    public UpdateFleetMetricRequestBody withUnit(UpdateFleetMetricRequestBodyUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}