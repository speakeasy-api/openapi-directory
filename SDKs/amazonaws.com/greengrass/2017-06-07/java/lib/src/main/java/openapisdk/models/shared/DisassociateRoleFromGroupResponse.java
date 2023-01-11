package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateRoleFromGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisassociatedAt")
    public String disassociatedAt;
    public DisassociateRoleFromGroupResponse withDisassociatedAt(String disassociatedAt) {
        this.disassociatedAt = disassociatedAt;
        return this;
    }
}