package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenreTypeSearchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=genre_description")
    public String genreDescription;
    public GenreTypeSearchReadPathParams withGenreDescription(String genreDescription) {
        this.genreDescription = genreDescription;
        return this;
    }
}