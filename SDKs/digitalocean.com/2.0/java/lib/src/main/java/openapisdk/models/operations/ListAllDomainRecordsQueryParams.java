package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAllDomainRecordsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public ListAllDomainRecordsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.Onev21domains1Percent7BdomainNamePercent7DGetParameters0Enum type;
    public ListAllDomainRecordsQueryParams withType(openapisdk.models.shared.Onev21domains1Percent7BdomainNamePercent7DGetParameters0Enum type) {
        this.type = type;
        return this;
    }
}