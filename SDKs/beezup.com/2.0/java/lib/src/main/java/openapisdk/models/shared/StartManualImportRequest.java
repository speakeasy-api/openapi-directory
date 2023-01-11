package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartManualImportRequest
 * The message request start a manual importation process. Indicate the way to handle duplicate product. Can be null if you want to reuse the configuration of the previous importation succeed.
**/
public class StartManualImportRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplicateProductSkuConfiguration")
    public DuplicateProductValueConfiguration duplicateProductSkuConfiguration;
    public StartManualImportRequest withDuplicateProductSkuConfiguration(DuplicateProductValueConfiguration duplicateProductSkuConfiguration) {
        this.duplicateProductSkuConfiguration = duplicateProductSkuConfiguration;
        return this;
    }
    @JsonProperty("input")
    public InputConfiguration input;
    public StartManualImportRequest withInput(InputConfiguration input) {
        this.input = input;
        return this;
    }
}