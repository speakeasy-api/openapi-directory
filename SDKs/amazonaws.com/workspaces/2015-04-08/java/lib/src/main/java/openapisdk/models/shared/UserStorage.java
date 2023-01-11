package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserStorage
 * Describes the user volume for a WorkSpace bundle.
**/
public class UserStorage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Capacity")
    public String capacity;
    public UserStorage withCapacity(String capacity) {
        this.capacity = capacity;
        return this;
    }
}