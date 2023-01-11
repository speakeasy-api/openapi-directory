package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatasetSchema
 * Provides information about the data schema used with the given dataset. 
**/
public class DatasetSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InlineDataSchema")
    public String inlineDataSchema;
    public DatasetSchema withInlineDataSchema(String inlineDataSchema) {
        this.inlineDataSchema = inlineDataSchema;
        return this;
    }
}