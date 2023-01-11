package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TerminologyData
 * The data associated with the custom terminology.
**/
public class TerminologyData {
    @JsonProperty("File")
    public String file;
    public TerminologyData withFile(String file) {
        this.file = file;
        return this;
    }
    @JsonProperty("Format")
    public TerminologyDataFormatEnum format;
    public TerminologyData withFormat(TerminologyDataFormatEnum format) {
        this.format = format;
        return this;
    }
}