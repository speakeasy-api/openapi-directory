package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PerformanceIndicatorFormula
 * The KPI formula
**/
public class PerformanceIndicatorFormula {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstParameter")
    public PerformanceIndicatorFormulaParameterTypeEnum firstParameter;
    public PerformanceIndicatorFormula withFirstParameter(PerformanceIndicatorFormulaParameterTypeEnum firstParameter) {
        this.firstParameter = firstParameter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatorName")
    public PerformanceIndicatorFormulaOperatorNameEnum operatorName;
    public PerformanceIndicatorFormula withOperatorName(PerformanceIndicatorFormulaOperatorNameEnum operatorName) {
        this.operatorName = operatorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondParameter")
    public PerformanceIndicatorFormulaParameterTypeEnum secondParameter;
    public PerformanceIndicatorFormula withSecondParameter(PerformanceIndicatorFormulaParameterTypeEnum secondParameter) {
        this.secondParameter = secondParameter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdParameter")
    public Long thirdParameter;
    public PerformanceIndicatorFormula withThirdParameter(Long thirdParameter) {
        this.thirdParameter = thirdParameter;
        return this;
    }
}