package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InputFileConfiguration
 * Describe how to get and read a file
**/
public class InputFileConfiguration {
    @JsonProperty("fetch")
    public InputFileFetchConfiguration fetch;
    public InputFileConfiguration withFetch(InputFileFetchConfiguration fetch) {
        this.fetch = fetch;
        return this;
    }
    @JsonProperty("fileNumber")
    public Integer fileNumber;
    public InputFileConfiguration withFileNumber(Integer fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @JsonProperty("read")
    public InputFileReadConfiguration read;
    public InputFileConfiguration withRead(InputFileReadConfiguration read) {
        this.read = read;
        return this;
    }
}