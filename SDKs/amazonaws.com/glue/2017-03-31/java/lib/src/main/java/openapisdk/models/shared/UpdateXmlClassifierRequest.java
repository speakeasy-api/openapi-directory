package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateXmlClassifierRequest
 * Specifies an XML classifier to be updated.
**/
public class UpdateXmlClassifierRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Classification")
    public String classification;
    public UpdateXmlClassifierRequest withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public UpdateXmlClassifierRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RowTag")
    public String rowTag;
    public UpdateXmlClassifierRequest withRowTag(String rowTag) {
        this.rowTag = rowTag;
        return this;
    }
}