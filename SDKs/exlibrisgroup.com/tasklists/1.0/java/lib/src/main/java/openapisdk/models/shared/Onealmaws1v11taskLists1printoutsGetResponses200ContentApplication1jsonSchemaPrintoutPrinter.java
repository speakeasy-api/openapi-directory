package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter
 * The printer.
**/
public class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc")
    public String desc;
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter withValue(String value) {
        this.value = value;
        return this;
    }
}