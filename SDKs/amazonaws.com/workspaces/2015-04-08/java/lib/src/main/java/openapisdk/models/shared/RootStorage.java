package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RootStorage
 * Describes the root volume for a WorkSpace bundle.
**/
public class RootStorage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Capacity")
    public String capacity;
    public RootStorage withCapacity(String capacity) {
        this.capacity = capacity;
        return this;
    }
}