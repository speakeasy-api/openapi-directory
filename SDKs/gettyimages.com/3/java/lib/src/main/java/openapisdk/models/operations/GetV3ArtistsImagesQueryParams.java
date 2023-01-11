package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3ArtistsImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artist_name")
    public String artistName;
    public GetV3ArtistsImagesQueryParams withArtistName(String artistName) {
        this.artistName = artistName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.ArtistsImageSearchFieldValuesEnum[] fields;
    public GetV3ArtistsImagesQueryParams withFields(openapisdk.models.shared.ArtistsImageSearchFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3ArtistsImagesQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3ArtistsImagesQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}