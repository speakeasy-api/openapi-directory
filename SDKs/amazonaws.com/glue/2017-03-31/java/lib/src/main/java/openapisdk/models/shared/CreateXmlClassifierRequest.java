package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateXmlClassifierRequest
 * Specifies an XML classifier for <code>CreateClassifier</code> to create.
**/
public class CreateXmlClassifierRequest {
    @JsonProperty("Classification")
    public String classification;
    public CreateXmlClassifierRequest withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateXmlClassifierRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RowTag")
    public String rowTag;
    public CreateXmlClassifierRequest withRowTag(String rowTag) {
        this.rowTag = rowTag;
        return this;
    }
}