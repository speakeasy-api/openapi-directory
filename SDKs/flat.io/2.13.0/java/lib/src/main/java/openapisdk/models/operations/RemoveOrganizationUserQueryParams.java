package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveOrganizationUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=convertToIndividual")
    public Boolean convertToIndividual;
    public RemoveOrganizationUserQueryParams withConvertToIndividual(Boolean convertToIndividual) {
        this.convertToIndividual = convertToIndividual;
        return this;
    }
}