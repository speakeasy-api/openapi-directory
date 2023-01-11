package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OptimizationObjective
 * Describes the additional objective for the solution, such as maximizing streaming minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>.
**/
public class OptimizationObjective {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemAttribute")
    public String itemAttribute;
    public OptimizationObjective withItemAttribute(String itemAttribute) {
        this.itemAttribute = itemAttribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectiveSensitivity")
    public ObjectiveSensitivityEnum objectiveSensitivity;
    public OptimizationObjective withObjectiveSensitivity(ObjectiveSensitivityEnum objectiveSensitivity) {
        this.objectiveSensitivity = objectiveSensitivity;
        return this;
    }
}