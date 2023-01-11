package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeMapResponse {
    @JsonProperty("Configuration")
    public MapConfiguration configuration;
    public DescribeMapResponse withConfiguration(MapConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public DescribeMapResponse withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonProperty("DataSource")
    public String dataSource;
    public DescribeMapResponse withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public DescribeMapResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("MapArn")
    public String mapArn;
    public DescribeMapResponse withMapArn(String mapArn) {
        this.mapArn = mapArn;
        return this;
    }
    @JsonProperty("MapName")
    public String mapName;
    public DescribeMapResponse withMapName(String mapName) {
        this.mapName = mapName;
        return this;
    }
    @JsonProperty("PricingPlan")
    public PricingPlanEnum pricingPlan;
    public DescribeMapResponse withPricingPlan(PricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public DescribeMapResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public DescribeMapResponse withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}