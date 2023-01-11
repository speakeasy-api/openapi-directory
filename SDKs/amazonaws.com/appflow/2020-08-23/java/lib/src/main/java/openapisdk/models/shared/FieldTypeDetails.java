package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FieldTypeDetails
 *  Contains details regarding the supported field type and the operators that can be applied for filtering. 
**/
public class FieldTypeDetails {
    @JsonProperty("fieldType")
    public String fieldType;
    public FieldTypeDetails withFieldType(String fieldType) {
        this.fieldType = fieldType;
        return this;
    }
    @JsonProperty("filterOperators")
    public OperatorEnum[] filterOperators;
    public FieldTypeDetails withFilterOperators(OperatorEnum[] filterOperators) {
        this.filterOperators = filterOperators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedValues")
    public String[] supportedValues;
    public FieldTypeDetails withSupportedValues(String[] supportedValues) {
        this.supportedValues = supportedValues;
        return this;
    }
}