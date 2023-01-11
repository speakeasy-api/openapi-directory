package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePlaceIndexRequestBody {
    @JsonProperty("DataSource")
    public String dataSource;
    public CreatePlaceIndexRequestBody withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSourceConfiguration")
    public CreatePlaceIndexRequestBodyDataSourceConfiguration dataSourceConfiguration;
    public CreatePlaceIndexRequestBody withDataSourceConfiguration(CreatePlaceIndexRequestBodyDataSourceConfiguration dataSourceConfiguration) {
        this.dataSourceConfiguration = dataSourceConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreatePlaceIndexRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("IndexName")
    public String indexName;
    public CreatePlaceIndexRequestBody withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonProperty("PricingPlan")
    public CreatePlaceIndexRequestBodyPricingPlanEnum pricingPlan;
    public CreatePlaceIndexRequestBody withPricingPlan(CreatePlaceIndexRequestBodyPricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreatePlaceIndexRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}