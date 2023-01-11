package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilmographyTypeSearchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filmography_description")
    public String filmographyDescription;
    public FilmographyTypeSearchReadPathParams withFilmographyDescription(String filmographyDescription) {
        this.filmographyDescription = filmographyDescription;
        return this;
    }
}