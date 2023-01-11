package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ListRouteCalculatorsResponseEntry
 * A route calculator resource listed in your AWS account.
**/
public class ListRouteCalculatorsResponseEntry {
    @JsonProperty("CalculatorName")
    public String calculatorName;
    public ListRouteCalculatorsResponseEntry withCalculatorName(String calculatorName) {
        this.calculatorName = calculatorName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public ListRouteCalculatorsResponseEntry withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonProperty("DataSource")
    public String dataSource;
    public ListRouteCalculatorsResponseEntry withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public ListRouteCalculatorsResponseEntry withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("PricingPlan")
    public PricingPlanEnum pricingPlan;
    public ListRouteCalculatorsResponseEntry withPricingPlan(PricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public ListRouteCalculatorsResponseEntry withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}