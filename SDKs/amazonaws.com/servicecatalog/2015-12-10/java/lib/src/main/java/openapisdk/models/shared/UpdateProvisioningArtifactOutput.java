package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateProvisioningArtifactOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Info")
    public java.util.Map<String, String> info;
    public UpdateProvisioningArtifactOutput withInfo(java.util.Map<String, String> info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisioningArtifactDetail")
    public ProvisioningArtifactDetail provisioningArtifactDetail;
    public UpdateProvisioningArtifactOutput withProvisioningArtifactDetail(ProvisioningArtifactDetail provisioningArtifactDetail) {
        this.provisioningArtifactDetail = provisioningArtifactDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public StatusEnum status;
    public UpdateProvisioningArtifactOutput withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
}