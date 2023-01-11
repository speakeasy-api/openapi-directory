package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OutputFileUriValue
 * The value of the variable as a structure that specifies an output file URI.
**/
public class OutputFileUriValue {
    @JsonProperty("fileName")
    public String fileName;
    public OutputFileUriValue withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
}