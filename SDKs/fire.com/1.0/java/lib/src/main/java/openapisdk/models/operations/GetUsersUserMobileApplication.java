package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUsersUserMobileApplication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OS")
    public GetUsersUserMobileApplicationOsEnum os;
    public GetUsersUserMobileApplication withOs(GetUsersUserMobileApplicationOsEnum os) {
        this.os = os;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessUserId")
    public Long businessUserId;
    public GetUsersUserMobileApplication withBusinessUserId(Long businessUserId) {
        this.businessUserId = businessUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientID")
    public String clientID;
    public GetUsersUserMobileApplication withClientId(String clientID) {
        this.clientID = clientID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceName")
    public GetUsersUserMobileApplicationDeviceNameEnum deviceName;
    public GetUsersUserMobileApplication withDeviceName(GetUsersUserMobileApplicationDeviceNameEnum deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceOSVersion")
    public String deviceOSVersion;
    public GetUsersUserMobileApplication withDeviceOsVersion(String deviceOSVersion) {
        this.deviceOSVersion = deviceOSVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileApplicationId")
    public Long mobileApplicationId;
    public GetUsersUserMobileApplication withMobileApplicationId(Long mobileApplicationId) {
        this.mobileApplicationId = mobileApplicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetUsersUserMobileApplicationStatusEnum status;
    public GetUsersUserMobileApplication withStatus(GetUsersUserMobileApplicationStatusEnum status) {
        this.status = status;
        return this;
    }
}