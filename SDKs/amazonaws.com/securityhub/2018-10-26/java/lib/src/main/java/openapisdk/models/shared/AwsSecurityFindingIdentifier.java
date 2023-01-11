package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AwsSecurityFindingIdentifier
 * Identifies a finding to update using <code>BatchUpdateFindings</code>.
**/
public class AwsSecurityFindingIdentifier {
    @JsonProperty("Id")
    public String id;
    public AwsSecurityFindingIdentifier withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ProductArn")
    public String productArn;
    public AwsSecurityFindingIdentifier withProductArn(String productArn) {
        this.productArn = productArn;
        return this;
    }
}