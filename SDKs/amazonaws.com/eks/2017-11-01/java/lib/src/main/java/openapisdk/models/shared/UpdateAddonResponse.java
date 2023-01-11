package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAddonResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update")
    public Update update;
    public UpdateAddonResponse withUpdate(Update update) {
        this.update = update;
        return this;
    }
}