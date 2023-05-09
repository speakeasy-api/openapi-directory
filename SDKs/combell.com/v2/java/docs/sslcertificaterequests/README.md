# sslCertificateRequests

## Overview

Create new SSL certificates. In the provisioning documentation you can find more info on the flow that should be followed.

### Available Operations

* [addSslCertificateRequest](#addsslcertificaterequest) - Add a SSL certificate request
* [getSslCertificateRequest](#getsslcertificaterequest) - Detail of a SSL certificate request
* [getSslCertificateRequests](#getsslcertificaterequests) - Overview of SSL certificate requests
* [verifySslCertificateRequestDomainValidations](#verifysslcertificaterequestdomainvalidations) - Verify the SSL certificate request domain validations

## addSslCertificateRequest

Executing this method causes the purchase of a paying product.<br />
Log on to our website to see your current (renewal) prices or contact our Sales department.<br />
Please note that promotional pricing does not apply for purchases made through our API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddSslCertificateRequestResponse;
import org.openapis.openapi.models.shared.AdditionalValidationAttribute;
import org.openapis.openapi.models.shared.CreateSslCertificateRequest;
import org.openapis.openapi.models.shared.SslCertificateTypeEnum;
import org.openapis.openapi.models.shared.SslCertificateValidationLevelEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateSslCertificateRequest req = new CreateSslCertificateRequest() {{
                additionalValidationAttributes = new org.openapis.openapi.models.shared.AdditionalValidationAttribute[]{{
                    add(new AdditionalValidationAttribute() {{
                        name = "Joanne Grant";
                        value = "architecto";
                    }}),
                    add(new AdditionalValidationAttribute() {{
                        name = "Margaret Luettgen MD";
                        value = "repellendus";
                    }}),
                    add(new AdditionalValidationAttribute() {{
                        name = "Domingo Grady";
                        value = "qui";
                    }}),
                    add(new AdditionalValidationAttribute() {{
                        name = "Marsha Kuhic";
                        value = "quisquam";
                    }}),
                }};
                certificateType = SslCertificateTypeEnum.WILDCARD;
                csr = "omnis";
                validationLevel = SslCertificateValidationLevelEnum.ORGANIZATION_VALIDATED;
            }};            

            AddSslCertificateRequestResponse res = sdk.sslCertificateRequests.addSslCertificateRequest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSslCertificateRequest

Detail of a SSL certificate request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSslCertificateRequestRequest;
import org.openapis.openapi.models.operations.GetSslCertificateRequestResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSslCertificateRequestRequest req = new GetSslCertificateRequestRequest(218403);            

            GetSslCertificateRequestResponse res = sdk.sslCertificateRequests.getSslCertificateRequest(req);

            if (res.sslCertificateRequestDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSslCertificateRequests

Overview of SSL certificate requests

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSslCertificateRequestsRequest;
import org.openapis.openapi.models.operations.GetSslCertificateRequestsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSslCertificateRequestsRequest req = new GetSslCertificateRequestsRequest() {{
                skip = 961571;
                take = 455169;
            }};            

            GetSslCertificateRequestsResponse res = sdk.sslCertificateRequests.getSslCertificateRequests(req);

            if (res.sslCertificateRequests != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## verifySslCertificateRequestDomainValidations

Verify the SSL certificate request domain validations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifySslCertificateRequestDomainValidationsRequest;
import org.openapis.openapi.models.operations.VerifySslCertificateRequestDomainValidationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifySslCertificateRequestDomainValidationsRequest req = new VerifySslCertificateRequestDomainValidationsRequest(231701);            

            VerifySslCertificateRequestDomainValidationsResponse res = sdk.sslCertificateRequests.verifySslCertificateRequestDomainValidations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
