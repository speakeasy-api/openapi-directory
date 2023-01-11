package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserGroupsList200ApplicationJson
 * Paginated Result
**/
public class UserGroupsList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.UserProfilesGroup[] data;
    public UserGroupsList200ApplicationJson withData(openapisdk.models.shared.UserProfilesGroup[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public UserGroupsList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public UserGroupsList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}