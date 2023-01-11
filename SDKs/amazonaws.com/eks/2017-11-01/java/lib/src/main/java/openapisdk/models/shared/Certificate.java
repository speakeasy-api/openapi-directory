package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Certificate
 * An object representing the <code>certificate-authority-data</code> for your cluster.
**/
public class Certificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public Certificate withData(String data) {
        this.data = data;
        return this;
    }
}