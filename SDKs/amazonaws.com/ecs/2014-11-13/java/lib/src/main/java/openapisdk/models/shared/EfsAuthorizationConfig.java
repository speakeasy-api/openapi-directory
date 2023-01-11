package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EfsAuthorizationConfig
 * The authorization configuration details for the Amazon EFS file system.
**/
public class EfsAuthorizationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessPointId")
    public String accessPointId;
    public EfsAuthorizationConfig withAccessPointId(String accessPointId) {
        this.accessPointId = accessPointId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iam")
    public EfsAuthorizationConfigIamEnum iam;
    public EfsAuthorizationConfig withIam(EfsAuthorizationConfigIamEnum iam) {
        this.iam = iam;
        return this;
    }
}