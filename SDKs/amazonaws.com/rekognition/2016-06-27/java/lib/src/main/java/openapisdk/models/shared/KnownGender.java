package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KnownGender
 * The known gender identity for the celebrity that matches the provided ID.
**/
public class KnownGender {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public KnownGenderTypeEnum type;
    public KnownGender withType(KnownGenderTypeEnum type) {
        this.type = type;
        return this;
    }
}