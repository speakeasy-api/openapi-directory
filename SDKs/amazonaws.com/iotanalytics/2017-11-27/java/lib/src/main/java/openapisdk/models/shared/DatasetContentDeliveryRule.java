package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatasetContentDeliveryRule
 * When dataset contents are created, they are delivered to destination specified here.
**/
public class DatasetContentDeliveryRule {
    @JsonProperty("destination")
    public DatasetContentDeliveryDestination destination;
    public DatasetContentDeliveryRule withDestination(DatasetContentDeliveryDestination destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryName")
    public String entryName;
    public DatasetContentDeliveryRule withEntryName(String entryName) {
        this.entryName = entryName;
        return this;
    }
}