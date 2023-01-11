package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValueHolder
 * A structure that can contain a value in multiple encoding formats.
**/
public class ValueHolder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IonBinary")
    public String ionBinary;
    public ValueHolder withIonBinary(String ionBinary) {
        this.ionBinary = ionBinary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IonText")
    public String ionText;
    public ValueHolder withIonText(String ionText) {
        this.ionText = ionText;
        return this;
    }
}