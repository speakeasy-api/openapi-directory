package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateConnectorRequestBodyLogDelivery
 * Details about log delivery.
**/
public class CreateConnectorRequestBodyLogDelivery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerLogDelivery")
    public openapisdk.models.shared.WorkerLogDelivery workerLogDelivery;
    public CreateConnectorRequestBodyLogDelivery withWorkerLogDelivery(openapisdk.models.shared.WorkerLogDelivery workerLogDelivery) {
        this.workerLogDelivery = workerLogDelivery;
        return this;
    }
}