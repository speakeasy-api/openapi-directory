package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportJobSubmitter
 * An object that contains the attributes of the submitter of the import job.
**/
public class ImportJobSubmitter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ImportJobSubmitter withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userArn")
    public String userArn;
    public ImportJobSubmitter withUserArn(String userArn) {
        this.userArn = userArn;
        return this;
    }
}