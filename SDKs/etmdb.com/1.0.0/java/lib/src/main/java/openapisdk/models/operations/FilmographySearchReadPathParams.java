package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilmographySearchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=movie_title")
    public String movieTitle;
    public FilmographySearchReadPathParams withMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
        return this;
    }
}