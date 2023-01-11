package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchTmdbmoviesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchTmdbmoviesQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchTmdbmoviesQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchTmdbmoviesQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchTmdbmoviesQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchTmdbmoviesQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchTmdbmoviesQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchTmdbmoviesQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchTmdbmoviesQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchTmdbmoviesQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchTmdbmoviesQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchTmdbmoviesQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchTmdbmoviesQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchTmdbmoviesQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchTmdbmoviesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.budget")
    public Double searchDbTmdbmoviesBudget;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesBudget(Double searchDbTmdbmoviesBudget) {
        this.searchDbTmdbmoviesBudget = searchDbTmdbmoviesBudget;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.genres")
    public String searchDbTmdbmoviesGenres;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesGenres(String searchDbTmdbmoviesGenres) {
        this.searchDbTmdbmoviesGenres = searchDbTmdbmoviesGenres;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.homepage")
    public String searchDbTmdbmoviesHomepage;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesHomepage(String searchDbTmdbmoviesHomepage) {
        this.searchDbTmdbmoviesHomepage = searchDbTmdbmoviesHomepage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.keywords")
    public String searchDbTmdbmoviesKeywords;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesKeywords(String searchDbTmdbmoviesKeywords) {
        this.searchDbTmdbmoviesKeywords = searchDbTmdbmoviesKeywords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.movie_id")
    public String searchDbTmdbmoviesMovieId;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesMovieId(String searchDbTmdbmoviesMovieId) {
        this.searchDbTmdbmoviesMovieId = searchDbTmdbmoviesMovieId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.original_language")
    public String searchDbTmdbmoviesOriginalLanguage;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesOriginalLanguage(String searchDbTmdbmoviesOriginalLanguage) {
        this.searchDbTmdbmoviesOriginalLanguage = searchDbTmdbmoviesOriginalLanguage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.original_title")
    public String searchDbTmdbmoviesOriginalTitle;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesOriginalTitle(String searchDbTmdbmoviesOriginalTitle) {
        this.searchDbTmdbmoviesOriginalTitle = searchDbTmdbmoviesOriginalTitle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.overview")
    public String searchDbTmdbmoviesOverview;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesOverview(String searchDbTmdbmoviesOverview) {
        this.searchDbTmdbmoviesOverview = searchDbTmdbmoviesOverview;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.popularity")
    public Double searchDbTmdbmoviesPopularity;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesPopularity(Double searchDbTmdbmoviesPopularity) {
        this.searchDbTmdbmoviesPopularity = searchDbTmdbmoviesPopularity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.production_companies")
    public String searchDbTmdbmoviesProductionCompanies;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesProductionCompanies(String searchDbTmdbmoviesProductionCompanies) {
        this.searchDbTmdbmoviesProductionCompanies = searchDbTmdbmoviesProductionCompanies;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.production_countries")
    public String searchDbTmdbmoviesProductionCountries;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesProductionCountries(String searchDbTmdbmoviesProductionCountries) {
        this.searchDbTmdbmoviesProductionCountries = searchDbTmdbmoviesProductionCountries;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.release_date")
    public String searchDbTmdbmoviesReleaseDate;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesReleaseDate(String searchDbTmdbmoviesReleaseDate) {
        this.searchDbTmdbmoviesReleaseDate = searchDbTmdbmoviesReleaseDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.revenue")
    public Double searchDbTmdbmoviesRevenue;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesRevenue(Double searchDbTmdbmoviesRevenue) {
        this.searchDbTmdbmoviesRevenue = searchDbTmdbmoviesRevenue;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.runtime")
    public Double searchDbTmdbmoviesRuntime;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesRuntime(Double searchDbTmdbmoviesRuntime) {
        this.searchDbTmdbmoviesRuntime = searchDbTmdbmoviesRuntime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.spoken_languages")
    public String searchDbTmdbmoviesSpokenLanguages;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesSpokenLanguages(String searchDbTmdbmoviesSpokenLanguages) {
        this.searchDbTmdbmoviesSpokenLanguages = searchDbTmdbmoviesSpokenLanguages;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.status")
    public String searchDbTmdbmoviesStatus;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesStatus(String searchDbTmdbmoviesStatus) {
        this.searchDbTmdbmoviesStatus = searchDbTmdbmoviesStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.tagline")
    public String searchDbTmdbmoviesTagline;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesTagline(String searchDbTmdbmoviesTagline) {
        this.searchDbTmdbmoviesTagline = searchDbTmdbmoviesTagline;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.title")
    public String searchDbTmdbmoviesTitle;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesTitle(String searchDbTmdbmoviesTitle) {
        this.searchDbTmdbmoviesTitle = searchDbTmdbmoviesTitle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.vote_average")
    public Double searchDbTmdbmoviesVoteAverage;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesVoteAverage(Double searchDbTmdbmoviesVoteAverage) {
        this.searchDbTmdbmoviesVoteAverage = searchDbTmdbmoviesVoteAverage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tmdbmovies.vote_count")
    public Double searchDbTmdbmoviesVoteCount;
    public SearchTmdbmoviesQueryParams withSearchDbTmdbmoviesVoteCount(Double searchDbTmdbmoviesVoteCount) {
        this.searchDbTmdbmoviesVoteCount = searchDbTmdbmoviesVoteCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchTmdbmoviesQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchTmdbmoviesQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchTmdbmoviesQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}