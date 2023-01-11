package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ListPlaceIndexesResponseEntry
 * A place index resource listed in your AWS account.
**/
public class ListPlaceIndexesResponseEntry {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public ListPlaceIndexesResponseEntry withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonProperty("DataSource")
    public String dataSource;
    public ListPlaceIndexesResponseEntry withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public ListPlaceIndexesResponseEntry withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("IndexName")
    public String indexName;
    public ListPlaceIndexesResponseEntry withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonProperty("PricingPlan")
    public PricingPlanEnum pricingPlan;
    public ListPlaceIndexesResponseEntry withPricingPlan(PricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public ListPlaceIndexesResponseEntry withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}