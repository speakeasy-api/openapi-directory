package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Topic
 * A topic aggregates entities that are related to a subject.
**/
public class Topic {
    @JsonProperty("names")
    public String[] names;
    public Topic withNames(String[] names) {
        this.names = names;
        return this;
    }
}