package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3ArtistsVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artist_name")
    public String artistName;
    public GetV3ArtistsVideosQueryParams withArtistName(String artistName) {
        this.artistName = artistName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.ArtistsVideoSearchFieldValuesEnum[] fields;
    public GetV3ArtistsVideosQueryParams withFields(openapisdk.models.shared.ArtistsVideoSearchFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3ArtistsVideosQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3ArtistsVideosQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}