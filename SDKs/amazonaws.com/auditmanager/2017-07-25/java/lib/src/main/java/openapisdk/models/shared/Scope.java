package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Scope
 *  The wrapper that contains the accounts and services in scope for the assessment. 
**/
public class Scope {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsAccounts")
    public AwsAccount[] awsAccounts;
    public Scope withAwsAccounts(AwsAccount[] awsAccounts) {
        this.awsAccounts = awsAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsServices")
    public AwsService[] awsServices;
    public Scope withAwsServices(AwsService[] awsServices) {
        this.awsServices = awsServices;
        return this;
    }
}