package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityFilter
 * An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by the value of <code>REFERENCED_ENTITY_ID</code>.
**/
public class EntityFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public EntityFilterNameEnum name;
    public EntityFilter withName(EntityFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String[] value;
    public EntityFilter withValue(String[] value) {
        this.value = value;
        return this;
    }
}