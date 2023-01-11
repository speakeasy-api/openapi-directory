package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceIntegrationConfig
 *  Information about the integration of DevOps Guru with another AWS service, such as AWS Systems Manager. 
**/
public class ServiceIntegrationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpsCenter")
    public OpsCenterIntegration opsCenter;
    public ServiceIntegrationConfig withOpsCenter(OpsCenterIntegration opsCenter) {
        this.opsCenter = opsCenter;
        return this;
    }
}