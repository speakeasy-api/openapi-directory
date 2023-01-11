package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPublicStatusUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicStatus")
    public Boolean publicStatus;
    public GetPublicStatusUsingGet200ApplicationJsonData withPublicStatus(Boolean publicStatus) {
        this.publicStatus = publicStatus;
        return this;
    }
}