package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MembershipList
 * Memberships List
**/
public class MembershipList {
    @JsonProperty("memberships")
    public Membership[] memberships;
    public MembershipList withMemberships(Membership[] memberships) {
        this.memberships = memberships;
        return this;
    }
    @JsonProperty("sum")
    public Integer sum;
    public MembershipList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
}