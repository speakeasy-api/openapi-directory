package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WatchlistSearchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=movie_title")
    public String movieTitle;
    public WatchlistSearchReadPathParams withMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
        return this;
    }
}