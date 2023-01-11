package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyCreditsSearchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=movie_title")
    public String movieTitle;
    public CompanyCreditsSearchReadPathParams withMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
        return this;
    }
}