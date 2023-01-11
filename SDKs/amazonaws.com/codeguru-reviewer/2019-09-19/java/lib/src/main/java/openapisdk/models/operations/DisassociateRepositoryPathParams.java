package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateRepositoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssociationArn")
    public String associationArn;
    public DisassociateRepositoryPathParams withAssociationArn(String associationArn) {
        this.associationArn = associationArn;
        return this;
    }
}