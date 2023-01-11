package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilmographySearchallReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=param")
    public String param;
    public FilmographySearchallReadPathParams withParam(String param) {
        this.param = param;
        return this;
    }
}