package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChecksCreateRequestBodyActions {
    @JsonProperty("description")
    public String description;
    public ChecksCreateRequestBodyActions withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("identifier")
    public String identifier;
    public ChecksCreateRequestBodyActions withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public ChecksCreateRequestBodyActions withLabel(String label) {
        this.label = label;
        return this;
    }
}