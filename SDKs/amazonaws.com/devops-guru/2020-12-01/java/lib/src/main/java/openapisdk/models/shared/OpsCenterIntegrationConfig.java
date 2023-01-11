package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OpsCenterIntegrationConfig
 *  Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight. 
**/
public class OpsCenterIntegrationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptInStatus")
    public OptInStatusEnum optInStatus;
    public OpsCenterIntegrationConfig withOptInStatus(OptInStatusEnum optInStatus) {
        this.optInStatus = optInStatus;
        return this;
    }
}