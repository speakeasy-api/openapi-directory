package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetEvents200ApplicationJson
 * The full record for all events that have occurred since the sync token was created.
**/
public class GetEvents200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.EventResponse[] data;
    public GetEvents200ApplicationJson withData(openapisdk.models.shared.EventResponse[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sync")
    public String sync;
    public GetEvents200ApplicationJson withSync(String sync) {
        this.sync = sync;
        return this;
    }
}