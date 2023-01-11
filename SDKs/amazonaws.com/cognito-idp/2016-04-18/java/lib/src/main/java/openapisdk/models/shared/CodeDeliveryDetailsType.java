package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeDeliveryDetailsType
 * The code delivery details being returned from the server.
**/
public class CodeDeliveryDetailsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeName")
    public String attributeName;
    public CodeDeliveryDetailsType withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryMedium")
    public DeliveryMediumTypeEnum deliveryMedium;
    public CodeDeliveryDetailsType withDeliveryMedium(DeliveryMediumTypeEnum deliveryMedium) {
        this.deliveryMedium = deliveryMedium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Destination")
    public String destination;
    public CodeDeliveryDetailsType withDestination(String destination) {
        this.destination = destination;
        return this;
    }
}