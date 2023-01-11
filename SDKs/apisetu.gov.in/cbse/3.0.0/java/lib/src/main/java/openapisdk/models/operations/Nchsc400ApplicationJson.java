package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Nchsc400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Nchsc400ApplicationJsonErrorEnum error;
    public Nchsc400ApplicationJson withError(Nchsc400ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Nchsc400ApplicationJsonErrorDescriptionEnum errorDescription;
    public Nchsc400ApplicationJson withErrorDescription(Nchsc400ApplicationJsonErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}