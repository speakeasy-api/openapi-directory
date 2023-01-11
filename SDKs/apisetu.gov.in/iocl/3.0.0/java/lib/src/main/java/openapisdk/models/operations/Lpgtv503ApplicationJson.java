package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Lpgtv503ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Lpgtv503ApplicationJsonErrorEnum error;
    public Lpgtv503ApplicationJson withError(Lpgtv503ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Lpgtv503ApplicationJsonErrorDescriptionEnum errorDescription;
    public Lpgtv503ApplicationJson withErrorDescription(Lpgtv503ApplicationJsonErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}