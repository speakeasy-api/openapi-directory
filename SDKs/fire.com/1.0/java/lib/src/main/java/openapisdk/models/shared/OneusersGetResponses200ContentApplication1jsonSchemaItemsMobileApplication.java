package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OS")
    public OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum os;
    public OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication withOs(OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum os) {
        this.os = os;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessUserId")
    public Long businessUserId;
    public OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication withBusinessUserId(Long businessUserId) {
        this.businessUserId = businessUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientID")
    public String clientID;
    public OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication withClientId(String clientID) {
        this.clientID = clientID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceName")
    public OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum deviceName;
    public OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication withDeviceName(OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceOSVersion")
    public String deviceOSVersion;
    public OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication withDeviceOsVersion(String deviceOSVersion) {
        this.deviceOSVersion = deviceOSVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileApplicationId")
    public Long mobileApplicationId;
    public OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication withMobileApplicationId(Long mobileApplicationId) {
        this.mobileApplicationId = mobileApplicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum status;
    public OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication withStatus(OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum status) {
        this.status = status;
        return this;
    }
}