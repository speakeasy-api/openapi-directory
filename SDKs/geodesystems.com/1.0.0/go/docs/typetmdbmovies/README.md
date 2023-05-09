# TypeTmdbmovies

## Overview

Search API for 'Tmdb Movies' entry type

### Available Operations

* [SearchTmdbmovies](#searchtmdbmovies) - Search API for 'Tmdb Movies' entry type

## SearchTmdbmovies

API to search for entries of type Tmdb Movies

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TypeTmdbmovies.SearchTmdbmovies(ctx, operations.SearchTmdbmoviesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-01T18:12:18.719Z"),
        ChangedateTo: types.MustTimeFromString("2022-08-10T21:22:46.079Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-20T22:24:50.011Z"),
        CreatedateTo: types.MustTimeFromString("2022-01-11T21:39:12.842Z"),
        Description: sdk.String("quos"),
        Filesuffix: sdk.String("numquam"),
        Fromdate: types.MustTimeFromString("2022-01-08T03:54:51.622Z"),
        Group: sdk.String("nam"),
        Max: sdk.Int64(102184),
        Maxlatitude: sdk.Float32(6981.17),
        Maxlongitude: sdk.Float32(8269.75),
        Minlatitude: sdk.Float32(1763.33),
        Minlongitude: sdk.Float32(2115.18),
        Name: sdk.String("Mrs. Levi Reichert"),
        SearchDbTmdbmoviesBudget: sdk.Float64(7092.34),
        SearchDbTmdbmoviesGenres: sdk.String("autem"),
        SearchDbTmdbmoviesHomepage: sdk.String("tempore"),
        SearchDbTmdbmoviesKeywords: sdk.String("recusandae"),
        SearchDbTmdbmoviesMovieID: sdk.String("nostrum"),
        SearchDbTmdbmoviesOriginalLanguage: sdk.String("officia"),
        SearchDbTmdbmoviesOriginalTitle: sdk.String("voluptas"),
        SearchDbTmdbmoviesOverview: sdk.String("laudantium"),
        SearchDbTmdbmoviesPopularity: sdk.Float64(3591.06),
        SearchDbTmdbmoviesProductionCompanies: sdk.String("excepturi"),
        SearchDbTmdbmoviesProductionCountries: sdk.String("natus"),
        SearchDbTmdbmoviesReleaseDate: sdk.String("deleniti"),
        SearchDbTmdbmoviesRevenue: sdk.Float64(9004.11),
        SearchDbTmdbmoviesRuntime: sdk.Float64(1367.7),
        SearchDbTmdbmoviesSpokenLanguages: sdk.String("dolores"),
        SearchDbTmdbmoviesStatus: sdk.String("laborum"),
        SearchDbTmdbmoviesTagline: sdk.String("vero"),
        SearchDbTmdbmoviesTitle: sdk.String("eos"),
        SearchDbTmdbmoviesVoteAverage: sdk.Float64(276.53),
        SearchDbTmdbmoviesVoteCount: sdk.Float64(8381.76),
        Skip: sdk.Int64(660339),
        Text: sdk.String("quae"),
        Todate: types.MustTimeFromString("2022-01-17T15:26:53.853Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
