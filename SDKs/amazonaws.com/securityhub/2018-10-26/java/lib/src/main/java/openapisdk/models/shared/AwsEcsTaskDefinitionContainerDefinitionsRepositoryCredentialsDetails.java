package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails
 * The private repository authentication credentials to use.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CredentialsParameter")
    public String credentialsParameter;
    public AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails withCredentialsParameter(String credentialsParameter) {
        this.credentialsParameter = credentialsParameter;
        return this;
    }
}