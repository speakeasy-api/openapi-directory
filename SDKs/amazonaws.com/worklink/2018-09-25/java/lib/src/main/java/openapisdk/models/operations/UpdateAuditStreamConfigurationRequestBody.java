package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAuditStreamConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuditStreamArn")
    public String auditStreamArn;
    public UpdateAuditStreamConfigurationRequestBody withAuditStreamArn(String auditStreamArn) {
        this.auditStreamArn = auditStreamArn;
        return this;
    }
    @JsonProperty("FleetArn")
    public String fleetArn;
    public UpdateAuditStreamConfigurationRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}