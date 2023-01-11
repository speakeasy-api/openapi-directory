package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecificationRequestBodyInputPathsPets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("get")
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGet get;
    public ImportExternalApiSpecificationRequestBodyInputPathsPets withGet(ImportExternalApiSpecificationRequestBodyInputPathsPetsGet get) {
        this.get = get;
        return this;
    }
}