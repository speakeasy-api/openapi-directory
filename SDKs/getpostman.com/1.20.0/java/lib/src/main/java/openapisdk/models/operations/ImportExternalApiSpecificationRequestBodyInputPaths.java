package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecificationRequestBodyInputPaths {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("/pets")
    public ImportExternalApiSpecificationRequestBodyInputPathsPets rootPets;
    public ImportExternalApiSpecificationRequestBodyInputPaths withRootPets(ImportExternalApiSpecificationRequestBodyInputPathsPets rootPets) {
        this.rootPets = rootPets;
        return this;
    }
}