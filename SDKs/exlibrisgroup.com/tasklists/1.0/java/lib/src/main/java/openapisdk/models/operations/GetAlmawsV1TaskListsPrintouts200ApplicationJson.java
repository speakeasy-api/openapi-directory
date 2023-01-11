package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsPrintouts200ApplicationJson
 * A list of printouts.
**/
public class GetAlmawsV1TaskListsPrintouts200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printout")
    public GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout[] printout;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJson withPrintout(GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout[] printout) {
        this.printout = printout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_record_count")
    public Integer totalRecordCount;
    public GetAlmawsV1TaskListsPrintouts200ApplicationJson withTotalRecordCount(Integer totalRecordCount) {
        this.totalRecordCount = totalRecordCount;
        return this;
    }
}