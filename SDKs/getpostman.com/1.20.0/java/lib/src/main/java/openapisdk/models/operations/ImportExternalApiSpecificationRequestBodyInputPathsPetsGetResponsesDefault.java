package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent content;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault withContent(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault withDescription(String description) {
        this.description = description;
        return this;
    }
}