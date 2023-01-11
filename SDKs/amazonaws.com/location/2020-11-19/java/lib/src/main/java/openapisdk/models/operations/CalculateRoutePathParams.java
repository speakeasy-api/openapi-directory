package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalculateRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CalculatorName")
    public String calculatorName;
    public CalculateRoutePathParams withCalculatorName(String calculatorName) {
        this.calculatorName = calculatorName;
        return this;
    }
}