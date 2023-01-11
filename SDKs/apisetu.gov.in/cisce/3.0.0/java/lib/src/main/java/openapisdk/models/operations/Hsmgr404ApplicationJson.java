package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Hsmgr404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Hsmgr404ApplicationJsonErrorEnum error;
    public Hsmgr404ApplicationJson withError(Hsmgr404ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Hsmgr404ApplicationJsonErrorDescriptionEnum errorDescription;
    public Hsmgr404ApplicationJson withErrorDescription(Hsmgr404ApplicationJsonErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}