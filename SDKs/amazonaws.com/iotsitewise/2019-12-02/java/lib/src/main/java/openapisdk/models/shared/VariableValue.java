package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VariableValue
 * Identifies a property value used in an expression.
**/
public class VariableValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hierarchyId")
    public String hierarchyId;
    public VariableValue withHierarchyId(String hierarchyId) {
        this.hierarchyId = hierarchyId;
        return this;
    }
    @JsonProperty("propertyId")
    public String propertyId;
    public VariableValue withPropertyId(String propertyId) {
        this.propertyId = propertyId;
        return this;
    }
}