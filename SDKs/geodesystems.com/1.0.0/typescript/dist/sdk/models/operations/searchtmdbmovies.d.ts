import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchTmdbmoviesRequest extends SpeakeasyBase {
    /**
     * Archive change date from
     */
    changedateFrom?: Date;
    /**
     * Archive change date to
     */
    changedateTo?: Date;
    /**
     * Archive create date from
     */
    createdateFrom?: Date;
    /**
     * Archive create date to
     */
    createdateTo?: Date;
    /**
     * Search description
     */
    description?: string;
    /**
     * File suffix
     */
    filesuffix?: string;
    /**
     * From date
     */
    fromdate?: Date;
    /**
     * Parent entry
     */
    group?: string;
    /**
     * Max number of results
     */
    max?: number;
    /**
     * Northern bounds of search
     */
    maxlatitude?: number;
    /**
     * Eastern bounds of search
     */
    maxlongitude?: number;
    /**
     * Southern bounds of search
     */
    minlatitude?: number;
    /**
     * Western bounds of search
     */
    minlongitude?: number;
    /**
     * Search name
     */
    name?: string;
    /**
     * Budget
     */
    searchDbTmdbmoviesBudget?: number;
    /**
     * Genres
     */
    searchDbTmdbmoviesGenres?: string;
    /**
     * Homepage
     */
    searchDbTmdbmoviesHomepage?: string;
    /**
     * Keywords
     */
    searchDbTmdbmoviesKeywords?: string;
    /**
     * Id
     */
    searchDbTmdbmoviesMovieId?: string;
    /**
     * Original Language
     */
    searchDbTmdbmoviesOriginalLanguage?: string;
    /**
     * Original Title
     */
    searchDbTmdbmoviesOriginalTitle?: string;
    /**
     * Overview
     */
    searchDbTmdbmoviesOverview?: string;
    /**
     * Popularity
     */
    searchDbTmdbmoviesPopularity?: number;
    /**
     * Production Companies
     */
    searchDbTmdbmoviesProductionCompanies?: string;
    /**
     * Production Countries
     */
    searchDbTmdbmoviesProductionCountries?: string;
    /**
     * Release Date
     */
    searchDbTmdbmoviesReleaseDate?: string;
    /**
     * Revenue
     */
    searchDbTmdbmoviesRevenue?: number;
    /**
     * Runtime
     */
    searchDbTmdbmoviesRuntime?: number;
    /**
     * Spoken Languages
     */
    searchDbTmdbmoviesSpokenLanguages?: string;
    /**
     * Status
     */
    searchDbTmdbmoviesStatus?: string;
    /**
     * Tagline
     */
    searchDbTmdbmoviesTagline?: string;
    /**
     * Title
     */
    searchDbTmdbmoviesTitle?: string;
    /**
     * Vote Average
     */
    searchDbTmdbmoviesVoteAverage?: number;
    /**
     * Vote Count
     */
    searchDbTmdbmoviesVoteCount?: number;
    /**
     * Number to skip
     */
    skip?: number;
    /**
     * Search text
     */
    text?: string;
    /**
     * To date
     */
    todate?: Date;
}
export declare class SearchTmdbmoviesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
