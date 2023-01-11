package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRouteCalculatorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CalculatorName")
    public String calculatorName;
    public UpdateRouteCalculatorPathParams withCalculatorName(String calculatorName) {
        this.calculatorName = calculatorName;
        return this;
    }
}