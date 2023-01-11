package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRouteCalculatorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CalculatorName")
    public String calculatorName;
    public DescribeRouteCalculatorPathParams withCalculatorName(String calculatorName) {
        this.calculatorName = calculatorName;
        return this;
    }
}