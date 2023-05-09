# general

### Available Operations

* [generalApiCountries](#generalapicountries) - Return all of the platform supported countries
* [generalApiCurrencies](#generalapicurrencies) - Return all of the platform supported currencies
* [generalApiDateFormats](#generalapidateformats) - Return all of the platform supported Date Formats
* [generalApiUiLanguages](#generalapiuilanguages) - Return all of the platform supported UI languages

## generalApiCountries

Return all of the platform supported countries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GeneralApiCountriesRequest;
import org.openapis.openapi.models.operations.GeneralApiCountriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GeneralApiCountriesRequest req = new GeneralApiCountriesRequest("saepe", "ipsum");            

            GeneralApiCountriesResponse res = sdk.general.generalApiCountries(req);

            if (res.countryDetailsApiModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generalApiCurrencies

Return all of the platform supported currencies

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GeneralApiCurrenciesRequest;
import org.openapis.openapi.models.operations.GeneralApiCurrenciesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GeneralApiCurrenciesRequest req = new GeneralApiCurrenciesRequest("veritatis", "nobis");            

            GeneralApiCurrenciesResponse res = sdk.general.generalApiCurrencies(req);

            if (res.currencyDetailsApiModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generalApiDateFormats

Return all of the platform supported Date Formats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GeneralApiDateFormatsRequest;
import org.openapis.openapi.models.operations.GeneralApiDateFormatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GeneralApiDateFormatsRequest req = new GeneralApiDateFormatsRequest("quos", "tempore");            

            GeneralApiDateFormatsResponse res = sdk.general.generalApiDateFormats(req);

            if (res.generalApiDateFormats200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generalApiUiLanguages

Return all of the platform supported UI languages

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GeneralApiUiLanguagesRequest;
import org.openapis.openapi.models.operations.GeneralApiUiLanguagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GeneralApiUiLanguagesRequest req = new GeneralApiUiLanguagesRequest("cupiditate", "aperiam");            

            GeneralApiUiLanguagesResponse res = sdk.general.generalApiUiLanguages(req);

            if (res.uiLanguageDetailsApiModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
