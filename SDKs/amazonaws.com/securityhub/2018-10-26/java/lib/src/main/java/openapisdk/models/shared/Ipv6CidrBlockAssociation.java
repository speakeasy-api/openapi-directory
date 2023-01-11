package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Ipv6CidrBlockAssociation
 * An IPV6 CIDR block association.
**/
public class Ipv6CidrBlockAssociation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociationId")
    public String associationId;
    public Ipv6CidrBlockAssociation withAssociationId(String associationId) {
        this.associationId = associationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CidrBlockState")
    public String cidrBlockState;
    public Ipv6CidrBlockAssociation withCidrBlockState(String cidrBlockState) {
        this.cidrBlockState = cidrBlockState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ipv6CidrBlock")
    public String ipv6CidrBlock;
    public Ipv6CidrBlockAssociation withIpv6CidrBlock(String ipv6CidrBlock) {
        this.ipv6CidrBlock = ipv6CidrBlock;
        return this;
    }
}