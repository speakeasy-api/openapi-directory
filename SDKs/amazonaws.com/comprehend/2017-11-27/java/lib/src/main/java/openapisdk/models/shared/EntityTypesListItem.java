package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EntityTypesListItem
 * An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.
**/
public class EntityTypesListItem {
    @JsonProperty("Type")
    public String type;
    public EntityTypesListItem withType(String type) {
        this.type = type;
        return this;
    }
}