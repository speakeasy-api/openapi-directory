package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartHumanLoopRequestBodyDataAttributes
 * Attributes of the data specified by the customer. Use these to describe the data to be labeled.
**/
public class StartHumanLoopRequestBodyDataAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentClassifiers")
    public openapisdk.models.shared.ContentClassifierEnum[] contentClassifiers;
    public StartHumanLoopRequestBodyDataAttributes withContentClassifiers(openapisdk.models.shared.ContentClassifierEnum[] contentClassifiers) {
        this.contentClassifiers = contentClassifiers;
        return this;
    }
}