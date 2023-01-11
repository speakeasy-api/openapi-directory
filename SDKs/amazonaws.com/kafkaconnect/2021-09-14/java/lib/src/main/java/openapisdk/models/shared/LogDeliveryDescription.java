package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogDeliveryDescription
 * The description of the log delivery settings.
**/
public class LogDeliveryDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerLogDelivery")
    public WorkerLogDeliveryDescription workerLogDelivery;
    public LogDeliveryDescription withWorkerLogDelivery(WorkerLogDeliveryDescription workerLogDelivery) {
        this.workerLogDelivery = workerLogDelivery;
        return this;
    }
}