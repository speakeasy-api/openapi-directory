# informationRetrieval

## Overview

Information Retrieval Functions

### Available Operations

* [keywordExtraction](#keywordextraction) - Extracts the Keywords of the Document
* [textExtraction](#textextraction) - Extracts the clear text from Webpage

## keywordExtraction

The Keyword Extraction function enables you to extract from an arbitrary document all the keywords and word-combinations along with their occurrences in the text.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeywordExtractionRequestBody;
import org.openapis.openapi.models.operations.KeywordExtractionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeywordExtractionRequestBody req = new KeywordExtractionRequestBody("excepturi") {{
                n = 392785L;
                text = "recusandae";
            }};            

            KeywordExtractionResponse res = sdk.informationRetrieval.keywordExtraction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## textExtraction

The Text Extraction function enables you to extract the important information from a given webpage. Extracting the clear text of the documents is an important step before any other analysis.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TextExtractionRequestBody;
import org.openapis.openapi.models.operations.TextExtractionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TextExtractionRequestBody req = new TextExtractionRequestBody("temporibus") {{
                text = "ab";
            }};            

            TextExtractionResponse res = sdk.informationRetrieval.textExtraction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
