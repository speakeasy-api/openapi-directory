# dnsRecords

## Overview

Operations about dns_records

### Available Operations

* [getDnsRecords](#getdnsrecords) - Show site DNS configuration.

## getDnsRecords

Show site DNS configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDnsRecordsRequest;
import org.openapis.openapi.models.operations.GetDnsRecordsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDnsRecordsRequest req = new GetDnsRecordsRequest() {{
                cursor = "voluptatibus";
                perPage = 787542;
            }};            

            GetDnsRecordsResponse res = sdk.dnsRecords.getDnsRecords(req);

            if (res.dnsRecordEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
