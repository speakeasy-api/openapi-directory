package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OperatorConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dbt")
    public OperatorDbt dbt;
    public OperatorConfiguration withDbt(OperatorDbt dbt) {
        this.dbt = dbt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("normalization")
    public OperatorNormalization normalization;
    public OperatorConfiguration withNormalization(OperatorNormalization normalization) {
        this.normalization = normalization;
        return this;
    }
    @JsonProperty("operatorType")
    public OperatorTypeEnum operatorType;
    public OperatorConfiguration withOperatorType(OperatorTypeEnum operatorType) {
        this.operatorType = operatorType;
        return this;
    }
}