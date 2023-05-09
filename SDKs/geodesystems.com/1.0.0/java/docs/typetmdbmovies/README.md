# typeTmdbmovies

## Overview

Search API for 'Tmdb Movies' entry type

### Available Operations

* [searchTmdbmovies](#searchtmdbmovies) - Search API for 'Tmdb Movies' entry type

## searchTmdbmovies

API to search for entries of type Tmdb Movies

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTmdbmoviesRequest;
import org.openapis.openapi.models.operations.SearchTmdbmoviesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTmdbmoviesRequest req = new SearchTmdbmoviesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-01T18:12:18.719Z");
                changedateTo = OffsetDateTime.parse("2022-08-10T21:22:46.079Z");
                createdateFrom = OffsetDateTime.parse("2022-10-20T22:24:50.011Z");
                createdateTo = OffsetDateTime.parse("2022-01-11T21:39:12.842Z");
                description = "quos";
                filesuffix = "numquam";
                fromdate = OffsetDateTime.parse("2022-01-08T03:54:51.622Z");
                group = "nam";
                max = 102184L;
                maxlatitude = 6981.17;
                maxlongitude = 8269.75;
                minlatitude = 1763.33;
                minlongitude = 2115.18;
                name = "Mrs. Levi Reichert";
                searchDbTmdbmoviesBudget = 7092.34;
                searchDbTmdbmoviesGenres = "autem";
                searchDbTmdbmoviesHomepage = "tempore";
                searchDbTmdbmoviesKeywords = "recusandae";
                searchDbTmdbmoviesMovieId = "nostrum";
                searchDbTmdbmoviesOriginalLanguage = "officia";
                searchDbTmdbmoviesOriginalTitle = "voluptas";
                searchDbTmdbmoviesOverview = "laudantium";
                searchDbTmdbmoviesPopularity = 3591.06;
                searchDbTmdbmoviesProductionCompanies = "excepturi";
                searchDbTmdbmoviesProductionCountries = "natus";
                searchDbTmdbmoviesReleaseDate = "deleniti";
                searchDbTmdbmoviesRevenue = 9004.11;
                searchDbTmdbmoviesRuntime = 1367.7;
                searchDbTmdbmoviesSpokenLanguages = "dolores";
                searchDbTmdbmoviesStatus = "laborum";
                searchDbTmdbmoviesTagline = "vero";
                searchDbTmdbmoviesTitle = "eos";
                searchDbTmdbmoviesVoteAverage = 276.53;
                searchDbTmdbmoviesVoteCount = 8381.76;
                skip = 660339L;
                text = "quae";
                todate = OffsetDateTime.parse("2022-01-17T15:26:53.853Z");
            }};            

            SearchTmdbmoviesResponse res = sdk.typeTmdbmovies.searchTmdbmovies(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
