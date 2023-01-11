package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAllVolumesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public ListAllVolumesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ListAllVolumesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ListAllVolumesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=region")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region;
    public ListAllVolumesQueryParams withRegion(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region) {
        this.region = region;
        return this;
    }
}