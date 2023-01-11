package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=position")
    public String position;
    public PlayerSearchQueryParams withPosition(String position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchTerm")
    public String searchTerm;
    public PlayerSearchQueryParams withSearchTerm(String searchTerm) {
        this.searchTerm = searchTerm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public PlayerSearchQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public PlayerSearchQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}