package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MovieSearchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=movie_title")
    public String movieTitle;
    public MovieSearchReadPathParams withMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
        return this;
    }
}