package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InstallStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public InstallStatusStatus status;
    public InstallStatus withStatus(InstallStatusStatus status) {
        this.status = status;
        return this;
    }
}