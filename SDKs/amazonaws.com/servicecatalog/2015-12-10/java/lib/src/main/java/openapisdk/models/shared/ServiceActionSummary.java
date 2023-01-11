package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceActionSummary
 * Detailed information about the self-service action.
**/
public class ServiceActionSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefinitionType")
    public ServiceActionDefinitionTypeEnum definitionType;
    public ServiceActionSummary withDefinitionType(ServiceActionDefinitionTypeEnum definitionType) {
        this.definitionType = definitionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ServiceActionSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ServiceActionSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ServiceActionSummary withName(String name) {
        this.name = name;
        return this;
    }
}