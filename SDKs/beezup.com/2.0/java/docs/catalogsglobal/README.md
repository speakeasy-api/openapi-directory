# catalogsGlobal

### Available Operations

* [catalogIndex](#catalogindex) - Get the index of the catalog API
* [catalogGetBeezUPColumns](#cataloggetbeezupcolumns) - Get the BeezUP columns

## catalogIndex

The operation will give you all the operations you will be able to do and all the LOV used in this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogIndexResponse res = sdk.catalogsGlobal.catalogIndex();

            if (res.catalogIndex != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogGetBeezUPColumns

Get the BeezUP columns, this columns are used for mapping during the manual catalog importation process.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogGetBeezUPColumnsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogGetBeezUPColumnsResponse res = sdk.catalogsGlobal.catalogGetBeezUPColumns();

            if (res.beezUPColumnConfigurations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
