package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Epfsc502ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Epfsc502ApplicationJsonErrorEnum error;
    public Epfsc502ApplicationJson withError(Epfsc502ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Epfsc502ApplicationJsonErrorDescriptionEnum errorDescription;
    public Epfsc502ApplicationJson withErrorDescription(Epfsc502ApplicationJsonErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}