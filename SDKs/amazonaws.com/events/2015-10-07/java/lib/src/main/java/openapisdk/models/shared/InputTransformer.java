package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputTransformer
 * Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.
**/
public class InputTransformer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputPathsMap")
    public java.util.Map<String, String> inputPathsMap;
    public InputTransformer withInputPathsMap(java.util.Map<String, String> inputPathsMap) {
        this.inputPathsMap = inputPathsMap;
        return this;
    }
    @JsonProperty("InputTemplate")
    public String inputTemplate;
    public InputTransformer withInputTemplate(String inputTemplate) {
        this.inputTemplate = inputTemplate;
        return this;
    }
}