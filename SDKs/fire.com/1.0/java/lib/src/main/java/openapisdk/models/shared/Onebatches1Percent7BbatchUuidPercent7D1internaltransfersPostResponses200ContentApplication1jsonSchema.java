package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchItemUuid")
    public String batchItemUuid;
    public Onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema withBatchItemUuid(String batchItemUuid) {
        this.batchItemUuid = batchItemUuid;
        return this;
    }
}