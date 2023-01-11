package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOnlineMigrationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disable_ssl")
    public Boolean disableSsl;
    public UpdateOnlineMigrationRequestBody withDisableSsl(Boolean disableSsl) {
        this.disableSsl = disableSsl;
        return this;
    }
}