package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeAccountAttributesResponse
 * <p/>
**/
public class DescribeAccountAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountQuotas")
    public AccountQuota[] accountQuotas;
    public DescribeAccountAttributesResponse withAccountQuotas(AccountQuota[] accountQuotas) {
        this.accountQuotas = accountQuotas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UniqueAccountIdentifier")
    public String uniqueAccountIdentifier;
    public DescribeAccountAttributesResponse withUniqueAccountIdentifier(String uniqueAccountIdentifier) {
        this.uniqueAccountIdentifier = uniqueAccountIdentifier;
        return this;
    }
}