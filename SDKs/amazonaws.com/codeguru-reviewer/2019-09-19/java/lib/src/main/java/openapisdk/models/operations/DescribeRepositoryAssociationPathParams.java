package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRepositoryAssociationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssociationArn")
    public String associationArn;
    public DescribeRepositoryAssociationPathParams withAssociationArn(String associationArn) {
        this.associationArn = associationArn;
        return this;
    }
}