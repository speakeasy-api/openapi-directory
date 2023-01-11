package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAssessmentRequestBodyScope
 *  The wrapper that contains the accounts and services in scope for the assessment. 
**/
public class CreateAssessmentRequestBodyScope {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsAccounts")
    public openapisdk.models.shared.AwsAccount[] awsAccounts;
    public CreateAssessmentRequestBodyScope withAwsAccounts(openapisdk.models.shared.AwsAccount[] awsAccounts) {
        this.awsAccounts = awsAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsServices")
    public openapisdk.models.shared.AwsService[] awsServices;
    public CreateAssessmentRequestBodyScope withAwsServices(openapisdk.models.shared.AwsService[] awsServices) {
        this.awsServices = awsServices;
        return this;
    }
}