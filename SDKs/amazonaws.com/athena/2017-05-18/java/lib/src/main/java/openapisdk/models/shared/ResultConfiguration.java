package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResultConfiguration
 * The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.
**/
public class ResultConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionConfiguration")
    public EncryptionConfiguration encryptionConfiguration;
    public ResultConfiguration withEncryptionConfiguration(EncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputLocation")
    public String outputLocation;
    public ResultConfiguration withOutputLocation(String outputLocation) {
        this.outputLocation = outputLocation;
        return this;
    }
}