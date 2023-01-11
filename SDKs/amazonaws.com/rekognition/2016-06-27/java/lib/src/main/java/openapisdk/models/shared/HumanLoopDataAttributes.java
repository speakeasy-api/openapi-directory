package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HumanLoopDataAttributes
 * Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information.
**/
public class HumanLoopDataAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentClassifiers")
    public ContentClassifierEnum[] contentClassifiers;
    public HumanLoopDataAttributes withContentClassifiers(ContentClassifierEnum[] contentClassifiers) {
        this.contentClassifiers = contentClassifiers;
        return this;
    }
}