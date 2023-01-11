package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeFargateProfileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fargateProfile")
    public FargateProfile fargateProfile;
    public DescribeFargateProfileResponse withFargateProfile(FargateProfile fargateProfile) {
        this.fargateProfile = fargateProfile;
        return this;
    }
}