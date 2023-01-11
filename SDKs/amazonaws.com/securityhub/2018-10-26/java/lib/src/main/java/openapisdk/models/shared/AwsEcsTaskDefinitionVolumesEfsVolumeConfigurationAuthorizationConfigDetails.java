package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails
 * <p/>
**/
public class AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessPointId")
    public String accessPointId;
    public AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails withAccessPointId(String accessPointId) {
        this.accessPointId = accessPointId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Iam")
    public String iam;
    public AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails withIam(String iam) {
        this.iam = iam;
        return this;
    }
}