package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAdministratorAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Administrator")
    public Invitation administrator;
    public GetAdministratorAccountResponse withAdministrator(Invitation administrator) {
        this.administrator = administrator;
        return this;
    }
}