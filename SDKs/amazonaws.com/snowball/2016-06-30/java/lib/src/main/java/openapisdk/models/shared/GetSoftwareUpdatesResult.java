package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSoftwareUpdatesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatesURI")
    public String updatesURI;
    public GetSoftwareUpdatesResult withUpdatesUri(String updatesURI) {
        this.updatesURI = updatesURI;
        return this;
    }
}