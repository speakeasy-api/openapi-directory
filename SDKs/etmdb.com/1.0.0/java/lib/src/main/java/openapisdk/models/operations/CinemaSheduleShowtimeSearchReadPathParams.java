package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CinemaSheduleShowtimeSearchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=movie_title")
    public String movieTitle;
    public CinemaSheduleShowtimeSearchReadPathParams withMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
        return this;
    }
}