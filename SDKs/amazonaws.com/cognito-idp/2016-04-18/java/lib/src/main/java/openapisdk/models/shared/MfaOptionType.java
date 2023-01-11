package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MfaOptionType
 *  <i>This data type is no longer supported.</i> You can use it only for SMS MFA configurations. You can't use it for TOTP software token MFA configurations.
**/
public class MfaOptionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeName")
    public String attributeName;
    public MfaOptionType withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryMedium")
    public DeliveryMediumTypeEnum deliveryMedium;
    public MfaOptionType withDeliveryMedium(DeliveryMediumTypeEnum deliveryMedium) {
        this.deliveryMedium = deliveryMedium;
        return this;
    }
}