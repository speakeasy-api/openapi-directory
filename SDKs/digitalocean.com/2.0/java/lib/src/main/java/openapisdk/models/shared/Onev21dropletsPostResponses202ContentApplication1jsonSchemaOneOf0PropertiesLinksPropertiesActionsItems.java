package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems
 * The linked actions can be used to check the status of a Droplet's create event.
**/
public class Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rel")
    public String rel;
    public Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems withRel(String rel) {
        this.rel = rel;
        return this;
    }
}