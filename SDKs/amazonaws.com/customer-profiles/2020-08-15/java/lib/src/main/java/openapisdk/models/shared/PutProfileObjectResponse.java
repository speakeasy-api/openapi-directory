package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutProfileObjectResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProfileObjectUniqueKey")
    public String profileObjectUniqueKey;
    public PutProfileObjectResponse withProfileObjectUniqueKey(String profileObjectUniqueKey) {
        this.profileObjectUniqueKey = profileObjectUniqueKey;
        return this;
    }
}