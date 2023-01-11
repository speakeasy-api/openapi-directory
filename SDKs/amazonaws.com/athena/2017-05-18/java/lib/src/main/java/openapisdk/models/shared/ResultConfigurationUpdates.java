package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResultConfigurationUpdates
 * The information about the updates in the query results, such as output location and encryption configuration for the query results.
**/
public class ResultConfigurationUpdates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionConfiguration")
    public EncryptionConfiguration encryptionConfiguration;
    public ResultConfigurationUpdates withEncryptionConfiguration(EncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputLocation")
    public String outputLocation;
    public ResultConfigurationUpdates withOutputLocation(String outputLocation) {
        this.outputLocation = outputLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoveEncryptionConfiguration")
    public Boolean removeEncryptionConfiguration;
    public ResultConfigurationUpdates withRemoveEncryptionConfiguration(Boolean removeEncryptionConfiguration) {
        this.removeEncryptionConfiguration = removeEncryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoveOutputLocation")
    public Boolean removeOutputLocation;
    public ResultConfigurationUpdates withRemoveOutputLocation(Boolean removeOutputLocation) {
        this.removeOutputLocation = removeOutputLocation;
        return this;
    }
}