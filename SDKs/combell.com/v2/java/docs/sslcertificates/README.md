# sslCertificates

## Overview

Manage your SSL certificates.

### Available Operations

* [downloadCertificate](#downloadcertificate) - Download a SSL certificate
* [getSslCertificate](#getsslcertificate) - Detail of a SSL certificate
* [getSslCertificates](#getsslcertificates) - Overview of SSL certificates

## downloadCertificate

Returns the certifcate as binary data with the content-type and the filename information in the response headers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadCertificateRequest;
import org.openapis.openapi.models.operations.DownloadCertificateResponse;
import org.openapis.openapi.models.shared.SslCertificateFileFormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DownloadCertificateRequest req = new DownloadCertificateRequest(SslCertificateFileFormatEnum.PFX, "vero", "tenetur", "dignissimos");            

            DownloadCertificateResponse res = sdk.sslCertificates.downloadCertificate(req);

            if (res.downloadCertificate200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSslCertificate

Detail of a SSL certificate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSslCertificateRequest;
import org.openapis.openapi.models.operations.GetSslCertificateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSslCertificateRequest req = new GetSslCertificateRequest("hic", "distinctio");            

            GetSslCertificateResponse res = sdk.sslCertificates.getSslCertificate(req);

            if (res.sslCertificateDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSslCertificates

Overview of SSL certificates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSslCertificatesRequest;
import org.openapis.openapi.models.operations.GetSslCertificatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSslCertificatesRequest req = new GetSslCertificatesRequest() {{
                skip = 799203;
                take = 486160;
            }};            

            GetSslCertificatesResponse res = sdk.sslCertificates.getSslCertificates(req);

            if (res.sslCertificates != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
