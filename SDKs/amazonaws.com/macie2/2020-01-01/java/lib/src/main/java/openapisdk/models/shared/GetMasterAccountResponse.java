package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMasterAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("master")
    public Invitation master;
    public GetMasterAccountResponse withMaster(Invitation master) {
        this.master = master;
        return this;
    }
}