package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShipmentCancellation
 * This type defines a shipment cancellation by the date and time the cancellation request was made and the current status of the request.
**/
public class ShipmentCancellation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationRequestedDate")
    public String cancellationRequestedDate;
    public ShipmentCancellation withCancellationRequestedDate(String cancellationRequestedDate) {
        this.cancellationRequestedDate = cancellationRequestedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationStatus")
    public String cancellationStatus;
    public ShipmentCancellation withCancellationStatus(String cancellationStatus) {
        this.cancellationStatus = cancellationStatus;
        return this;
    }
}