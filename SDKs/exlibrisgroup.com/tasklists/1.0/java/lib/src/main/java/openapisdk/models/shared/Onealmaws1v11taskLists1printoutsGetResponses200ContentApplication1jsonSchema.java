package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema
 * A list of printouts.
**/
public class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printout")
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout[] printout;
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema withPrintout(Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout[] printout) {
        this.printout = printout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_record_count")
    public Integer totalRecordCount;
    public Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema withTotalRecordCount(Integer totalRecordCount) {
        this.totalRecordCount = totalRecordCount;
        return this;
    }
}