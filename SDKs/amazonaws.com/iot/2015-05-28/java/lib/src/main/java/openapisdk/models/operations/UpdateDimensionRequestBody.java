package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateDimensionRequestBody {
    @JsonProperty("stringValues")
    public String[] stringValues;
    public UpdateDimensionRequestBody withStringValues(String[] stringValues) {
        this.stringValues = stringValues;
        return this;
    }
}