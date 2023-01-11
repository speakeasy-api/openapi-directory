package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CollectionDoi {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public CollectionDoi withDoi(String doi) {
        this.doi = doi;
        return this;
    }
}