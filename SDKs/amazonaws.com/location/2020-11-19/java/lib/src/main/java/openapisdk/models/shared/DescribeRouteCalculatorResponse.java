package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeRouteCalculatorResponse {
    @JsonProperty("CalculatorArn")
    public String calculatorArn;
    public DescribeRouteCalculatorResponse withCalculatorArn(String calculatorArn) {
        this.calculatorArn = calculatorArn;
        return this;
    }
    @JsonProperty("CalculatorName")
    public String calculatorName;
    public DescribeRouteCalculatorResponse withCalculatorName(String calculatorName) {
        this.calculatorName = calculatorName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public DescribeRouteCalculatorResponse withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonProperty("DataSource")
    public String dataSource;
    public DescribeRouteCalculatorResponse withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public DescribeRouteCalculatorResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("PricingPlan")
    public PricingPlanEnum pricingPlan;
    public DescribeRouteCalculatorResponse withPricingPlan(PricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public DescribeRouteCalculatorResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public DescribeRouteCalculatorResponse withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}