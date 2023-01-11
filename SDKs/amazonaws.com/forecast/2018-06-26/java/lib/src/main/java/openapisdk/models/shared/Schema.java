package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Schema
 * Defines the fields of a dataset. You specify this object in the <a>CreateDataset</a> request.
**/
public class Schema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public SchemaAttribute[] attributes;
    public Schema withAttributes(SchemaAttribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
}