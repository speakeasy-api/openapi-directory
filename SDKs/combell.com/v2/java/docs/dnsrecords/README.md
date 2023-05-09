# dnsRecords

## Overview

Manage the dns records for a domain name.<p>The interface allows you to manage following records: A, CNAME, MX, SRV, ALIAS and TXT.

### Available Operations

* [deleteDnsDomainNameRecordsRecordId](#deletednsdomainnamerecordsrecordid) - Delete a record
* [getDnsDomainNameRecords](#getdnsdomainnamerecords) - Get records
* [getDnsDomainNameRecordsRecordId](#getdnsdomainnamerecordsrecordid) - Get specific record
* [postDnsDomainNameRecords](#postdnsdomainnamerecords) - Create a record
* [putDnsDomainNameRecordsRecordId](#putdnsdomainnamerecordsrecordid) - Edit a record

## deleteDnsDomainNameRecordsRecordId

Delete a record

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDnsDomainNameRecordsRecordIdRequest;
import org.openapis.openapi.models.operations.DeleteDnsDomainNameRecordsRecordIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDnsDomainNameRecordsRecordIdRequest req = new DeleteDnsDomainNameRecordsRecordIdRequest("iure", "magnam", "debitis", "ipsa");            

            DeleteDnsDomainNameRecordsRecordIdResponse res = sdk.dnsRecords.deleteDnsDomainNameRecordsRecordId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDnsDomainNameRecords

Get records

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDnsDomainNameRecordsRequest;
import org.openapis.openapi.models.operations.GetDnsDomainNameRecordsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDnsDomainNameRecordsRequest req = new GetDnsDomainNameRecordsRequest("delectus", "tempora") {{
                recordName = "suscipit";
                service = "molestiae";
                skip = 791725;
                take = 812169;
                type = "voluptatum";
            }};            

            GetDnsDomainNameRecordsResponse res = sdk.dnsRecords.getDnsDomainNameRecords(req);

            if (res.dnsRecords != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDnsDomainNameRecordsRecordId

Get specific record

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDnsDomainNameRecordsRecordIdRequest;
import org.openapis.openapi.models.operations.GetDnsDomainNameRecordsRecordIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDnsDomainNameRecordsRecordIdRequest req = new GetDnsDomainNameRecordsRecordIdRequest("iusto", "excepturi", "nisi", "recusandae");            

            GetDnsDomainNameRecordsRecordIdResponse res = sdk.dnsRecords.getDnsDomainNameRecordsRecordId(req);

            if (res.dnsRecord != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDnsDomainNameRecords

Create a record

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDnsDomainNameRecordsRequest;
import org.openapis.openapi.models.operations.PostDnsDomainNameRecordsResponse;
import org.openapis.openapi.models.shared.DnsRecord;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostDnsDomainNameRecordsRequest req = new PostDnsDomainNameRecordsRequest("temporibus", "ab") {{
                dnsRecord = new DnsRecord() {{
                    content = "quis";
                    id = "1a05dfc2-ddf7-4cc7-8ca1-ba928fc81674";
                    port = 186332;
                    priority = 774234;
                    protocol = "cum";
                    recordName = "esse";
                    service = "ipsum";
                    target = "excepturi";
                    ttl = 135218;
                    type = "perferendis";
                    weight = 324141;
                }};;
            }};            

            PostDnsDomainNameRecordsResponse res = sdk.dnsRecords.postDnsDomainNameRecords(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDnsDomainNameRecordsRecordId

Edit a record

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDnsDomainNameRecordsRecordIdRequest;
import org.openapis.openapi.models.operations.PutDnsDomainNameRecordsRecordIdResponse;
import org.openapis.openapi.models.shared.DnsRecord;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutDnsDomainNameRecordsRecordIdRequest req = new PutDnsDomainNameRecordsRecordIdRequest("natus", "sed", "iste", "dolor") {{
                dnsRecord = new DnsRecord() {{
                    content = "natus";
                    id = "6fea7596-eb10-4faa-a235-2c5955907aff";
                    port = 102044;
                    priority = 652790;
                    protocol = "dolorem";
                    recordName = "culpa";
                    service = "consequuntur";
                    target = "repellat";
                    ttl = 653108;
                    type = "occaecati";
                    weight = 253291;
                }};;
            }};            

            PutDnsDomainNameRecordsRecordIdResponse res = sdk.dnsRecords.putDnsDomainNameRecordsRecordId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
