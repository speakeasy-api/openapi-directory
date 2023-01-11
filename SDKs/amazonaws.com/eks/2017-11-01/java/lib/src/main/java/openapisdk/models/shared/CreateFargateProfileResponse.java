package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFargateProfileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fargateProfile")
    public FargateProfile fargateProfile;
    public CreateFargateProfileResponse withFargateProfile(FargateProfile fargateProfile) {
        this.fargateProfile = fargateProfile;
        return this;
    }
}