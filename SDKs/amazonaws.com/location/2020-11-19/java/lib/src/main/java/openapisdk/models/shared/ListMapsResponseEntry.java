package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ListMapsResponseEntry
 * Contains details of an existing map resource in your AWS account.
**/
public class ListMapsResponseEntry {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public ListMapsResponseEntry withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonProperty("DataSource")
    public String dataSource;
    public ListMapsResponseEntry withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public ListMapsResponseEntry withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("MapName")
    public String mapName;
    public ListMapsResponseEntry withMapName(String mapName) {
        this.mapName = mapName;
        return this;
    }
    @JsonProperty("PricingPlan")
    public PricingPlanEnum pricingPlan;
    public ListMapsResponseEntry withPricingPlan(PricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public ListMapsResponseEntry withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}