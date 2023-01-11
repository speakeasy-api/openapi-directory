package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRouteCalculatorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CalculatorName")
    public String calculatorName;
    public DeleteRouteCalculatorPathParams withCalculatorName(String calculatorName) {
        this.calculatorName = calculatorName;
        return this;
    }
}