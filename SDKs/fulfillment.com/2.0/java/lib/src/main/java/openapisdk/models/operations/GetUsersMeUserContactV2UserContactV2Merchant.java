package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUsersMeUserContactV2UserContactV2Merchant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetUsersMeUserContactV2UserContactV2Merchant withId(Long id) {
        this.id = id;
        return this;
    }
}