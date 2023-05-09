# metrics

## Overview

Metrics

### Available Operations

* [documentSimilarity](#documentsimilarity) - Estimates the similarity between 2 Documents

## documentSimilarity

The Document Similarity function estimates the degree of similarity between two documents. It can be used to detect duplicate webpages or detect plagiarism.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DocumentSimilarityRequestBody;
import org.openapis.openapi.models.operations.DocumentSimilarityResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentSimilarityRequestBody req = new DocumentSimilarityRequestBody("quis") {{
                copy = "veritatis";
                original = "deserunt";
            }};            

            DocumentSimilarityResponse res = sdk.metrics.documentSimilarity(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
