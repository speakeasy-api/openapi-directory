package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenreSearchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=movie_title")
    public String movieTitle;
    public GenreSearchReadPathParams withMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
        return this;
    }
}