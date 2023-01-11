package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPublicationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=channelCatalogId")
    public String channelCatalogId;
    public GetPublicationsQueryParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Integer count;
    public GetPublicationsQueryParams withCount(Integer count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=publicationTypes")
    public GetPublicationsPublicationTypesEnum[] publicationTypes;
    public GetPublicationsQueryParams withPublicationTypes(GetPublicationsPublicationTypesEnum[] publicationTypes) {
        this.publicationTypes = publicationTypes;
        return this;
    }
}