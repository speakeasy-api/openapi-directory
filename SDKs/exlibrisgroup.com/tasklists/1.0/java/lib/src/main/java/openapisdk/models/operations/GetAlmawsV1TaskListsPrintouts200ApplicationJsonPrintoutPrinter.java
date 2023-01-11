package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter
 * The printer.
**/
public class GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc")
    public String desc;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter withValue(String value) {
        this.value = value;
        return this;
    }
}