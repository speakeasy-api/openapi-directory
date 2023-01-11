package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CopyStepDetails
 * Each step type has its own <code>StepDetails</code> structure.
**/
public class CopyStepDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationFileLocation")
    public InputFileLocation destinationFileLocation;
    public CopyStepDetails withDestinationFileLocation(InputFileLocation destinationFileLocation) {
        this.destinationFileLocation = destinationFileLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CopyStepDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverwriteExisting")
    public OverwriteExistingEnum overwriteExisting;
    public CopyStepDetails withOverwriteExisting(OverwriteExistingEnum overwriteExisting) {
        this.overwriteExisting = overwriteExisting;
        return this;
    }
}