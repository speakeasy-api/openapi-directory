package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Palcs500ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Palcs500ApplicationJsonErrorEnum error;
    public Palcs500ApplicationJson withError(Palcs500ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Palcs500ApplicationJsonErrorDescriptionEnum errorDescription;
    public Palcs500ApplicationJson withErrorDescription(Palcs500ApplicationJsonErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}