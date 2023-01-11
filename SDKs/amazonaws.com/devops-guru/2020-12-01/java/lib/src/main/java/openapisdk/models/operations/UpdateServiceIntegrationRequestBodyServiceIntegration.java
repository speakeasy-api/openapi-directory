package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateServiceIntegrationRequestBodyServiceIntegration
 *  Information about updating the integration status of an AWS service, such as AWS Systems Manager, with DevOps Guru. 
**/
public class UpdateServiceIntegrationRequestBodyServiceIntegration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpsCenter")
    public openapisdk.models.shared.OpsCenterIntegrationConfig opsCenter;
    public UpdateServiceIntegrationRequestBodyServiceIntegration withOpsCenter(openapisdk.models.shared.OpsCenterIntegrationConfig opsCenter) {
        this.opsCenter = opsCenter;
        return this;
    }
}