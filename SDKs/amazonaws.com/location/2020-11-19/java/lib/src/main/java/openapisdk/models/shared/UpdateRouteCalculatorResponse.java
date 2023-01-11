package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdateRouteCalculatorResponse {
    @JsonProperty("CalculatorArn")
    public String calculatorArn;
    public UpdateRouteCalculatorResponse withCalculatorArn(String calculatorArn) {
        this.calculatorArn = calculatorArn;
        return this;
    }
    @JsonProperty("CalculatorName")
    public String calculatorName;
    public UpdateRouteCalculatorResponse withCalculatorName(String calculatorName) {
        this.calculatorName = calculatorName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public UpdateRouteCalculatorResponse withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}