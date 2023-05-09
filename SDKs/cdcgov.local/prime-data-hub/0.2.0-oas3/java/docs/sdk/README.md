# SDK

## Overview

A router of public health data from multiple senders and receivers

### Available Operations

* [deleteSettingsOrganizationsOrganizationName](#deletesettingsorganizationsorganizationname) - Delete an organization (and the associated receivers and senders)
* [deleteSettingsOrganizationsOrganizationNameReceiversReceiverName](#deletesettingsorganizationsorganizationnamereceiversreceivername) - Delete a receiver
* [deleteSettingsOrganizationsOrganizationNameSendersSenderName](#deletesettingsorganizationsorganizationnamesenderssendername) - Delete a sender
* [getSettingsOrganizations](#getsettingsorganizations) - The settings for all organizations of the system. Must have admin access.
* [getSettingsOrganizationsOrganizationName](#getsettingsorganizationsorganizationname) - A single organization settings
* [getSettingsOrganizationsOrganizationNameReceivers](#getsettingsorganizationsorganizationnamereceivers) - A list of receivers and their current settings
* [getSettingsOrganizationsOrganizationNameReceiversReceiverName](#getsettingsorganizationsorganizationnamereceiversreceivername) - The settings of a single of receiver
* [getSettingsOrganizationsOrganizationNameSenders](#getsettingsorganizationsorganizationnamesenders) - A list of senders
* [getSettingsOrganizationsOrganizationNameSendersSenderName](#getsettingsorganizationsorganizationnamesenderssendername) - The settings of a single of sender
* [headSettingsOrganizations](#headsettingsorganizations) - Retrived the last modified for all settings of the system. Must have admin access.
* [postReports](#postreports) - Post a report to the data hub
* [putSettingsOrganizationsOrganizationName](#putsettingsorganizationsorganizationname) - Create or update the direct settings associated with an organization
* [putSettingsOrganizationsOrganizationNameReceiversReceiverName](#putsettingsorganizationsorganizationnamereceiversreceivername) - Update a single reciever
* [putSettingsOrganizationsOrganizationNameSendersSenderName](#putsettingsorganizationsorganizationnamesenderssendername) - Update a single sender

## deleteSettingsOrganizationsOrganizationName

Delete an organization (and the associated receivers and senders)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameRequest;
import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameResponse;
import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSettingsOrganizationsOrganizationNameRequest req = new DeleteSettingsOrganizationsOrganizationNameRequest("distinctio");            

            DeleteSettingsOrganizationsOrganizationNameResponse res = sdk.sdk.deleteSettingsOrganizationsOrganizationName(req, new DeleteSettingsOrganizationsOrganizationNameSecurity("quibusdam") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSettingsOrganizationsOrganizationNameReceiversReceiverName

Delete a receiver

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest;
import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse;
import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest req = new DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest("unde", "nulla");            

            DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse res = sdk.sdk.deleteSettingsOrganizationsOrganizationNameReceiversReceiverName(req, new DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity("corrupti") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.receiver != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSettingsOrganizationsOrganizationNameSendersSenderName

Delete a sender

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest;
import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse;
import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest req = new DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest("illum", "vel");            

            DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse res = sdk.sdk.deleteSettingsOrganizationsOrganizationNameSendersSenderName(req, new DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity("error") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.sender != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSettingsOrganizations

The settings for all organizations of the system. Must have admin access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsResponse;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSettingsOrganizationsResponse res = sdk.sdk.getSettingsOrganizations(new GetSettingsOrganizationsSecurity("deserunt") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.organizations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSettingsOrganizationsOrganizationName

A single organization settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameRequest;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameResponse;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSettingsOrganizationsOrganizationNameRequest req = new GetSettingsOrganizationsOrganizationNameRequest("suscipit");            

            GetSettingsOrganizationsOrganizationNameResponse res = sdk.sdk.getSettingsOrganizationsOrganizationName(req, new GetSettingsOrganizationsOrganizationNameSecurity("iure") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSettingsOrganizationsOrganizationNameReceivers

A list of receivers and their current settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameReceiversRequest;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameReceiversResponse;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameReceiversSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSettingsOrganizationsOrganizationNameReceiversRequest req = new GetSettingsOrganizationsOrganizationNameReceiversRequest("magnam");            

            GetSettingsOrganizationsOrganizationNameReceiversResponse res = sdk.sdk.getSettingsOrganizationsOrganizationNameReceivers(req, new GetSettingsOrganizationsOrganizationNameReceiversSecurity("debitis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.receivers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSettingsOrganizationsOrganizationNameReceiversReceiverName

The settings of a single of receiver

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest req = new GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest("ipsa", "delectus");            

            GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse res = sdk.sdk.getSettingsOrganizationsOrganizationNameReceiversReceiverName(req, new GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity("tempora") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.receiver != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSettingsOrganizationsOrganizationNameSenders

A list of senders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameSendersRequest;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameSendersResponse;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameSendersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSettingsOrganizationsOrganizationNameSendersRequest req = new GetSettingsOrganizationsOrganizationNameSendersRequest("suscipit");            

            GetSettingsOrganizationsOrganizationNameSendersResponse res = sdk.sdk.getSettingsOrganizationsOrganizationNameSenders(req, new GetSettingsOrganizationsOrganizationNameSendersSecurity("molestiae") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.senders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSettingsOrganizationsOrganizationNameSendersSenderName

The settings of a single of sender

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse;
import org.openapis.openapi.models.operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest req = new GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest("minus", "placeat");            

            GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse res = sdk.sdk.getSettingsOrganizationsOrganizationNameSendersSenderName(req, new GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity("voluptatum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.sender != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## headSettingsOrganizations

Retrived the last modified for all settings of the system. Must have admin access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HeadSettingsOrganizationsResponse;
import org.openapis.openapi.models.operations.HeadSettingsOrganizationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HeadSettingsOrganizationsResponse res = sdk.sdk.headSettingsOrganizations(new HeadSettingsOrganizationsSecurity("iusto") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postReports

Post a report to the data hub

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostReportsOptionEnum;
import org.openapis.openapi.models.operations.PostReportsRequest;
import org.openapis.openapi.models.operations.PostReportsResponse;
import org.openapis.openapi.models.operations.PostReportsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostReportsRequest req = new PostReportsRequest("excepturi", "nisi") {{
                default_ = new String[]{{
                    add("temporibus"),
                    add("ab"),
                    add("quis"),
                    add("veritatis"),
                }};
                option = PostReportsOptionEnum.SKIP_SEND;
                routeTo = new String[]{{
                    add("ipsam"),
                }};
            }};            

            PostReportsResponse res = sdk.sdk.postReports(req, new PostReportsSecurity("repellendus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSettingsOrganizationsOrganizationName

Create or update the direct settings associated with an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSettingsOrganizationsOrganizationNameRequest;
import org.openapis.openapi.models.operations.PutSettingsOrganizationsOrganizationNameResponse;
import org.openapis.openapi.models.operations.PutSettingsOrganizationsOrganizationNameSecurity;
import org.openapis.openapi.models.shared.OrganizationInput;
import org.openapis.openapi.models.shared.OrganizationJurisdictionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutSettingsOrganizationsOrganizationNameRequest req = new PutSettingsOrganizationsOrganizationNameRequest("sapiente") {{
                organizationInput = new OrganizationInput("Arizona PHD", OrganizationJurisdictionEnum.COUNTY, "az-phd") {{
                    countyName = "Pima";
                    stateCode = "AZ";
                }};;
            }};            

            PutSettingsOrganizationsOrganizationNameResponse res = sdk.sdk.putSettingsOrganizationsOrganizationName(req, new PutSettingsOrganizationsOrganizationNameSecurity("odit") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSettingsOrganizationsOrganizationNameReceiversReceiverName

Update a single reciever

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest;
import org.openapis.openapi.models.operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse;
import org.openapis.openapi.models.operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;
import org.openapis.openapi.models.shared.As2Transport;
import org.openapis.openapi.models.shared.BlobStoreTransport;
import org.openapis.openapi.models.shared.CustomConfiguration;
import org.openapis.openapi.models.shared.CustomConfigurationFormatEnum;
import org.openapis.openapi.models.shared.NullTransport;
import org.openapis.openapi.models.shared.ReceiverInput;
import org.openapis.openapi.models.shared.ReceiverJurisdictionalFilters;
import org.openapis.openapi.models.shared.ReceiverJurisdictionalFiltersMatchFieldsEnum;
import org.openapis.openapi.models.shared.ReceiverTiming;
import org.openapis.openapi.models.shared.ReceiverTimingFrequencyEnum;
import org.openapis.openapi.models.shared.SFTPTransport;
import org.openapis.openapi.models.shared.StandardHl7Configuration;
import org.openapis.openapi.models.shared.StandardHl7ConfigurationPhoneNumberFormattingEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest req = new PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest("at", "at") {{
                receiverInput = new ReceiverInput("Arizona PHD ELR feed", "az-phd.elr",                 new ReceiverTiming(ReceiverTimingFrequencyEnum.DAILY) {{
                                    dailyAt = 4736.08;
                                }};, "covid-19") {{
                    jurisdictionalFilters = new org.openapis.openapi.models.shared.ReceiverJurisdictionalFilters[]{{
                        add(new ReceiverJurisdictionalFilters() {{
                            doesNotMatch = false;
                            matchFields = ReceiverJurisdictionalFiltersMatchFieldsEnum.ABNORMAL_VALUE;
                            matchValues = new String[]{{
                                add("totam"),
                                add("porro"),
                            }};
                        }}),
                        add(new ReceiverJurisdictionalFilters() {{
                            doesNotMatch = false;
                            matchFields = ReceiverJurisdictionalFiltersMatchFieldsEnum.FACILITY_NAME;
                            matchValues = new String[]{{
                                add("nam"),
                            }};
                        }}),
                        add(new ReceiverJurisdictionalFilters() {{
                            doesNotMatch = false;
                            matchFields = ReceiverJurisdictionalFiltersMatchFieldsEnum.FACILITY_NAME;
                            matchValues = new String[]{{
                                add("fugit"),
                                add("deleniti"),
                                add("hic"),
                            }};
                        }}),
                        add(new ReceiverJurisdictionalFilters() {{
                            doesNotMatch = false;
                            matchFields = ReceiverJurisdictionalFiltersMatchFieldsEnum.ABNORMAL_VALUE;
                            matchValues = new String[]{{
                                add("beatae"),
                                add("commodi"),
                                add("molestiae"),
                            }};
                        }}),
                    }};
                    translations = new Object[]{{
                        add(new CustomConfiguration(CustomConfigurationFormatEnum.CSV, "natus",                 new SFTPTransport("/in/test", "sftp.phd.gov", 22, "SFTP") {{
                                            filePath = "/in/test";
                                            host = "sftp.phd.gov";
                                            port = 22;
                                            type = "SFTP";
                                        }}, "CUSTOM") {{
                            format = CustomConfigurationFormatEnum.HL7;
                            nameFormat = "cum";
                            receivingOrganization = "esse";
                            schemaName = "ipsum";
                            transport = new BlobStoreTransport("hhsprotect", "perferendis", "BLOBSTORE") {{
                                containerName = "hhsprotect";
                                storageName = "aspernatur";
                                type = "BLOBSTORE";
                            }};
                            type = "CUSTOM";
                        }}),
                        add(new StandardHl7Configuration(false,                 new NullTransport("null") {{
                                            dummy = "est";
                                            type = "null";
                                        }}, "STANDARD_HL7", false) {{
                            convertTimestampToDateTime = "dolor";
                            defaultAoeToUnknown = false;
                            includeAOE = false;
                            nameFormat = "natus";
                            phoneNumberFormatting = StandardHl7ConfigurationPhoneNumberFormattingEnum.ONLY_DIGITS_IN_COMPONENT_ONE;
                            receivingApplicationName = "hic";
                            receivingApplicationOID = "saepe";
                            receivingFacilityName = "fuga";
                            receivingFacilityOID = "in";
                            receivingOrganization = "corporis";
                            reportingFacilityId = "iste";
                            reportingFacilityIdType = "iure";
                            reportingFacilityName = "saepe";
                            suppressAoe = false;
                            suppressHl7Fields = "quidem";
                            suppressQstForAoe = false;
                            transport = new SFTPTransport("/in/test", "sftp.phd.gov", 22, "SFTP") {{
                                filePath = "/in/test";
                                host = "sftp.phd.gov";
                                port = 22;
                                type = "SFTP";
                            }};
                            truncateHDNamespaceIds = false;
                            type = "STANDARD_HL7";
                            useBatchHeaders = false;
                            useBlankInsteadOfUnknown = "ipsa";
                            usePid14ForPatientEmail = false;
                            useTestProcessingMode = false;
                        }}),
                    }};
                }};;
            }};            

            PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse res = sdk.sdk.putSettingsOrganizationsOrganizationNameReceiversReceiverName(req, new PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity("mollitia") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.receiver != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSettingsOrganizationsOrganizationNameSendersSenderName

Update a single sender

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest;
import org.openapis.openapi.models.operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse;
import org.openapis.openapi.models.operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;
import org.openapis.openapi.models.shared.SenderFormatEnum;
import org.openapis.openapi.models.shared.SenderInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest req = new PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest("laborum", "dolores") {{
                senderInput = new SenderInput("dolorem", SenderFormatEnum.CSV, "simple_report.default", "az-phd-covid-19", "covid-19");;
            }};            

            PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse res = sdk.sdk.putSettingsOrganizationsOrganizationNameSendersSenderName(req, new PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity("corporis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.senders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
