# metrics

### Available Operations

* [getPrometheusMetrics](#getprometheusmetrics) - Query server for exposed Prometheus metrics

## getPrometheusMetrics

See Prometheus documentation for a complete data model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPrometheusMetricsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPrometheusMetricsResponse res = sdk.metrics.getPrometheusMetrics();

            if (res.getPrometheusMetrics200TextPlainString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
