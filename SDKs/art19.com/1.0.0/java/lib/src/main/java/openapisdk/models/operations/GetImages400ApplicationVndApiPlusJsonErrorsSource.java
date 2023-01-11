package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetImages400ApplicationVndApiPlusJsonErrorsSource
 * An object containing references to the source of the error, optionally including any of the following members.
 * 
**/
public class GetImages400ApplicationVndApiPlusJsonErrorsSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameter")
    public String parameter;
    public GetImages400ApplicationVndApiPlusJsonErrorsSource withParameter(String parameter) {
        this.parameter = parameter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointer")
    public String pointer;
    public GetImages400ApplicationVndApiPlusJsonErrorsSource withPointer(String pointer) {
        this.pointer = pointer;
        return this;
    }
}