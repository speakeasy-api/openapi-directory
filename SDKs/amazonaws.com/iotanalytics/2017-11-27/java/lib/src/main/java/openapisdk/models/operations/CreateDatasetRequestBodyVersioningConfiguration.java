package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDatasetRequestBodyVersioningConfiguration
 * Information about the versioning of dataset contents.
**/
public class CreateDatasetRequestBodyVersioningConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxVersions")
    public Long maxVersions;
    public CreateDatasetRequestBodyVersioningConfiguration withMaxVersions(Long maxVersions) {
        this.maxVersions = maxVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unlimited")
    public Boolean unlimited;
    public CreateDatasetRequestBodyVersioningConfiguration withUnlimited(Boolean unlimited) {
        this.unlimited = unlimited;
        return this;
    }
}