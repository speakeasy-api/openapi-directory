package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateRouteCalculatorResponse {
    @JsonProperty("CalculatorArn")
    public String calculatorArn;
    public CreateRouteCalculatorResponse withCalculatorArn(String calculatorArn) {
        this.calculatorArn = calculatorArn;
        return this;
    }
    @JsonProperty("CalculatorName")
    public String calculatorName;
    public CreateRouteCalculatorResponse withCalculatorName(String calculatorName) {
        this.calculatorName = calculatorName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public CreateRouteCalculatorResponse withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
}