package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataLakePrincipal
 * The AWS Lake Formation principal. Supported principals are IAM users or IAM roles.
**/
public class DataLakePrincipal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataLakePrincipalIdentifier")
    public String dataLakePrincipalIdentifier;
    public DataLakePrincipal withDataLakePrincipalIdentifier(String dataLakePrincipalIdentifier) {
        this.dataLakePrincipalIdentifier = dataLakePrincipalIdentifier;
        return this;
    }
}