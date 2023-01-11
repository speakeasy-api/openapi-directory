package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Ec2ReplaceRouteTableAssociationAction
 * Information about the ReplaceRouteTableAssociation action in Amazon EC2.
**/
public class Ec2ReplaceRouteTableAssociationAction {
    @JsonProperty("AssociationId")
    public ActionTarget associationId;
    public Ec2ReplaceRouteTableAssociationAction withAssociationId(ActionTarget associationId) {
        this.associationId = associationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Ec2ReplaceRouteTableAssociationAction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("RouteTableId")
    public ActionTarget routeTableId;
    public Ec2ReplaceRouteTableAssociationAction withRouteTableId(ActionTarget routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
}