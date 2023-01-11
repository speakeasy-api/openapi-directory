package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGarbageCollectionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancel")
    public Boolean cancel;
    public UpdateGarbageCollectionRequestBody withCancel(Boolean cancel) {
        this.cancel = cancel;
        return this;
    }
}