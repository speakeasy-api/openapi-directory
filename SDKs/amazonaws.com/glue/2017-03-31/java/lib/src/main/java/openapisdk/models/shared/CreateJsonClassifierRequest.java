package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateJsonClassifierRequest
 * Specifies a JSON classifier for <code>CreateClassifier</code> to create.
**/
public class CreateJsonClassifierRequest {
    @JsonProperty("JsonPath")
    public String jsonPath;
    public CreateJsonClassifierRequest withJsonPath(String jsonPath) {
        this.jsonPath = jsonPath;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateJsonClassifierRequest withName(String name) {
        this.name = name;
        return this;
    }
}