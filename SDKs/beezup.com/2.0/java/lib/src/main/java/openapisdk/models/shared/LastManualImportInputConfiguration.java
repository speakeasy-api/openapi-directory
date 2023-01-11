package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LastManualImportInputConfiguration
 * Last manual import input configuration
**/
public class LastManualImportInputConfiguration {
    @JsonProperty("input")
    public InputConfiguration input;
    public LastManualImportInputConfiguration withInput(InputConfiguration input) {
        this.input = input;
        return this;
    }
}