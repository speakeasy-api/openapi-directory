package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Skhsc504ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Skhsc504ApplicationJsonErrorEnum error;
    public Skhsc504ApplicationJson withError(Skhsc504ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Skhsc504ApplicationJsonErrorDescriptionEnum errorDescription;
    public Skhsc504ApplicationJson withErrorDescription(Skhsc504ApplicationJsonErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}