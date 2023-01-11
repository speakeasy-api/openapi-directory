package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Hsmgr504ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Hsmgr504ApplicationJsonErrorEnum error;
    public Hsmgr504ApplicationJson withError(Hsmgr504ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Hsmgr504ApplicationJsonErrorDescriptionEnum errorDescription;
    public Hsmgr504ApplicationJson withErrorDescription(Hsmgr504ApplicationJsonErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}