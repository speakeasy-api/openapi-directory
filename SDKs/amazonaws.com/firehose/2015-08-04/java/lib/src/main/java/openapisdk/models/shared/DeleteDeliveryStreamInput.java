package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteDeliveryStreamInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowForceDelete")
    public Boolean allowForceDelete;
    public DeleteDeliveryStreamInput withAllowForceDelete(Boolean allowForceDelete) {
        this.allowForceDelete = allowForceDelete;
        return this;
    }
    @JsonProperty("DeliveryStreamName")
    public String deliveryStreamName;
    public DeleteDeliveryStreamInput withDeliveryStreamName(String deliveryStreamName) {
        this.deliveryStreamName = deliveryStreamName;
        return this;
    }
}