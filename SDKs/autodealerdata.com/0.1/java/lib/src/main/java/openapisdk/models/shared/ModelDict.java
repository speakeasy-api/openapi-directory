package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModelDict {
    @JsonProperty("modelName")
    public String modelName;
    public ModelDict withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
}