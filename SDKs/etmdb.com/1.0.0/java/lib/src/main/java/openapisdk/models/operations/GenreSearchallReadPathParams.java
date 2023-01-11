package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenreSearchallReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=movie_genre_type")
    public String movieGenreType;
    public GenreSearchallReadPathParams withMovieGenreType(String movieGenreType) {
        this.movieGenreType = movieGenreType;
        return this;
    }
}