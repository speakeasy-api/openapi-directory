package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateEncryptionConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update")
    public Update update;
    public AssociateEncryptionConfigResponse withUpdate(Update update) {
        this.update = update;
        return this;
    }
}