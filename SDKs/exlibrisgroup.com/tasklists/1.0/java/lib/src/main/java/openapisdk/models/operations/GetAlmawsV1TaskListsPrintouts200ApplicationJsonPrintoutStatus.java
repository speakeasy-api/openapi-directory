package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus
 * Status of the printout (Pending/Printed/Canceled).
**/
public class GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc")
    public String desc;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus withValue(String value) {
        this.value = value;
        return this;
    }
}