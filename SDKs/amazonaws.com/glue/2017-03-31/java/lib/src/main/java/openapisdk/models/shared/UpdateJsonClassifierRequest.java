package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateJsonClassifierRequest
 * Specifies a JSON classifier to be updated.
**/
public class UpdateJsonClassifierRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JsonPath")
    public String jsonPath;
    public UpdateJsonClassifierRequest withJsonPath(String jsonPath) {
        this.jsonPath = jsonPath;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public UpdateJsonClassifierRequest withName(String name) {
        this.name = name;
        return this;
    }
}