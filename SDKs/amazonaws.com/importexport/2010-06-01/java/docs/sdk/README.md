# SDK

## Overview

<fullname>AWS Import/Export Service</fullname> AWS Import/Export accelerates transferring large amounts of data between the AWS cloud and portable storage devices that you mail to us. AWS Import/Export transfers data directly onto and off of your storage devices using Amazon's high-speed internal network and bypassing the Internet. For large data sets, AWS Import/Export is often faster than Internet transfer and more cost effective than upgrading your connectivity.

Amazon Web Services documentation
<https://docs.aws.amazon.com/importexport/>
### Available Operations

* [getCancelJob](#getcanceljob) - This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
* [getCreateJob](#getcreatejob) - This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
* [getGETShippingLabel](#getgetshippinglabel) - This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
* [getGETStatus](#getgetstatus) - This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
* [getListJobs](#getlistjobs) - This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
* [getUpdateJob](#getupdatejob) - You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
* [postCancelJob](#postcanceljob) - This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
* [postCreateJob](#postcreatejob) - This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
* [postGetShippingLabel](#postgetshippinglabel) - This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
* [postGetStatus](#postgetstatus) - This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
* [postListJobs](#postlistjobs) - This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
* [postUpdateJob](#postupdatejob) - You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.

## getCancelJob

This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCancelJobActionEnum;
import org.openapis.openapi.models.operations.GETCancelJobOperationEnum;
import org.openapis.openapi.models.operations.GETCancelJobRequest;
import org.openapis.openapi.models.operations.GETCancelJobResponse;
import org.openapis.openapi.models.operations.GETCancelJobVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCancelJobRequest req = new GETCancelJobRequest("error", GETCancelJobActionEnum.CANCEL_JOB, "deserunt", GETCancelJobOperationEnum.CANCEL_JOB, "suscipit", "iure", "magnam", "debitis", GETCancelJobVersionEnum.TWO_THOUSAND_AND_TEN0601) {{
                apiVersion = "ipsa";
            }};            

            GETCancelJobResponse res = sdk.sdk.getCancelJob(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateJob

This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateJobActionEnum;
import org.openapis.openapi.models.operations.GETCreateJobJobTypeEnum;
import org.openapis.openapi.models.operations.GETCreateJobOperationEnum;
import org.openapis.openapi.models.operations.GETCreateJobRequest;
import org.openapis.openapi.models.operations.GETCreateJobResponse;
import org.openapis.openapi.models.operations.GETCreateJobVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateJobRequest req = new GETCreateJobRequest("tempora", GETCreateJobActionEnum.CREATE_JOB, GETCreateJobJobTypeEnum.IMPORT_, "molestiae", GETCreateJobOperationEnum.CREATE_JOB, "minus", "placeat", "voluptatum", "iusto", false, GETCreateJobVersionEnum.TWO_THOUSAND_AND_TEN0601) {{
                apiVersion = "excepturi";
                manifestAddendum = "nisi";
            }};            

            GETCreateJobResponse res = sdk.sdk.getCreateJob(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETShippingLabel

This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETShippingLabelActionEnum;
import org.openapis.openapi.models.operations.GETGETShippingLabelOperationEnum;
import org.openapis.openapi.models.operations.GETGETShippingLabelRequest;
import org.openapis.openapi.models.operations.GETGETShippingLabelResponse;
import org.openapis.openapi.models.operations.GETGETShippingLabelVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETShippingLabelRequest req = new GETGETShippingLabelRequest("temporibus", GETGETShippingLabelActionEnum.GET_SHIPPING_LABEL, GETGETShippingLabelOperationEnum.GET_SHIPPING_LABEL, "ab", "quis", "veritatis", "deserunt", GETGETShippingLabelVersionEnum.TWO_THOUSAND_AND_TEN0601,                 new String[]{{
                                add("ipsam"),
                            }}) {{
                apiVersion = "repellendus";
                city = "San Antonio";
                company = "Strosin Group";
                country = "Virgin Islands, U.S.";
                name = "Bernadette Schmidt";
                phoneNumber = "porro";
                postalCode = "17651-5975";
                stateOrProvince = "beatae";
                street1 = "commodi";
                street2 = "molestiae";
                street3 = "modi";
            }};            

            GETGETShippingLabelResponse res = sdk.sdk.getGETShippingLabel(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETStatus

This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETStatusActionEnum;
import org.openapis.openapi.models.operations.GETGETStatusOperationEnum;
import org.openapis.openapi.models.operations.GETGETStatusRequest;
import org.openapis.openapi.models.operations.GETGETStatusResponse;
import org.openapis.openapi.models.operations.GETGETStatusVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETStatusRequest req = new GETGETStatusRequest("impedit", GETGETStatusActionEnum.GET_STATUS, "cum", GETGETStatusOperationEnum.GET_STATUS, "esse", "ipsum", "excepturi", "aspernatur", GETGETStatusVersionEnum.TWO_THOUSAND_AND_TEN0601) {{
                apiVersion = "perferendis";
            }};            

            GETGETStatusResponse res = sdk.sdk.getGETStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListJobs

This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListJobsActionEnum;
import org.openapis.openapi.models.operations.GETListJobsOperationEnum;
import org.openapis.openapi.models.operations.GETListJobsRequest;
import org.openapis.openapi.models.operations.GETListJobsResponse;
import org.openapis.openapi.models.operations.GETListJobsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListJobsRequest req = new GETListJobsRequest("natus", GETListJobsActionEnum.LIST_JOBS, GETListJobsOperationEnum.LIST_JOBS, "sed", "iste", "dolor", "natus", GETListJobsVersionEnum.TWO_THOUSAND_AND_TEN0601) {{
                apiVersion = "laboriosam";
                marker = "hic";
                maxJobs = 902599L;
            }};            

            GETListJobsResponse res = sdk.sdk.getListJobs(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateJob

You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateJobActionEnum;
import org.openapis.openapi.models.operations.GETUpdateJobJobTypeEnum;
import org.openapis.openapi.models.operations.GETUpdateJobOperationEnum;
import org.openapis.openapi.models.operations.GETUpdateJobRequest;
import org.openapis.openapi.models.operations.GETUpdateJobResponse;
import org.openapis.openapi.models.operations.GETUpdateJobVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateJobRequest req = new GETUpdateJobRequest("in", GETUpdateJobActionEnum.UPDATE_JOB, "corporis", GETUpdateJobJobTypeEnum.EXPORT, "iure", GETUpdateJobOperationEnum.UPDATE_JOB, "saepe", "quidem", "architecto", "ipsa", false, GETUpdateJobVersionEnum.TWO_THOUSAND_AND_TEN0601) {{
                apiVersion = "reiciendis";
            }};            

            GETUpdateJobResponse res = sdk.sdk.getUpdateJob(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCancelJob

This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCancelJobActionEnum;
import org.openapis.openapi.models.operations.POSTCancelJobOperationEnum;
import org.openapis.openapi.models.operations.POSTCancelJobRequest;
import org.openapis.openapi.models.operations.POSTCancelJobResponse;
import org.openapis.openapi.models.operations.POSTCancelJobVersionEnum;
import org.openapis.openapi.models.shared.CancelJobInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCancelJobRequest req = new POSTCancelJobRequest("mollitia", POSTCancelJobActionEnum.CANCEL_JOB, POSTCancelJobOperationEnum.CANCEL_JOB, "laborum", "dolores", "dolorem", "corporis", POSTCancelJobVersionEnum.TWO_THOUSAND_AND_TEN0601) {{
                requestBody = "explicabo".getBytes();
            }};            

            POSTCancelJobResponse res = sdk.sdk.postCancelJob(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateJob

This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateJobActionEnum;
import org.openapis.openapi.models.operations.POSTCreateJobOperationEnum;
import org.openapis.openapi.models.operations.POSTCreateJobRequest;
import org.openapis.openapi.models.operations.POSTCreateJobResponse;
import org.openapis.openapi.models.operations.POSTCreateJobVersionEnum;
import org.openapis.openapi.models.shared.CreateJobInput;
import org.openapis.openapi.models.shared.JobTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateJobRequest req = new POSTCreateJobRequest("enim", POSTCreateJobActionEnum.CREATE_JOB, POSTCreateJobOperationEnum.CREATE_JOB, "omnis", "nemo", "minima", "excepturi", POSTCreateJobVersionEnum.TWO_THOUSAND_AND_TEN0601) {{
                requestBody = "accusantium".getBytes();
            }};            

            POSTCreateJobResponse res = sdk.sdk.postCreateJob(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetShippingLabel

This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetShippingLabelActionEnum;
import org.openapis.openapi.models.operations.POSTGetShippingLabelOperationEnum;
import org.openapis.openapi.models.operations.POSTGetShippingLabelRequest;
import org.openapis.openapi.models.operations.POSTGetShippingLabelResponse;
import org.openapis.openapi.models.operations.POSTGetShippingLabelVersionEnum;
import org.openapis.openapi.models.shared.GetShippingLabelInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetShippingLabelRequest req = new POSTGetShippingLabelRequest("culpa", POSTGetShippingLabelActionEnum.GET_SHIPPING_LABEL, POSTGetShippingLabelOperationEnum.GET_SHIPPING_LABEL, "doloribus", "sapiente", "architecto", "mollitia", POSTGetShippingLabelVersionEnum.TWO_THOUSAND_AND_TEN0601) {{
                requestBody = "dolorem".getBytes();
            }};            

            POSTGetShippingLabelResponse res = sdk.sdk.postGetShippingLabel(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetStatus

This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetStatusActionEnum;
import org.openapis.openapi.models.operations.POSTGetStatusOperationEnum;
import org.openapis.openapi.models.operations.POSTGetStatusRequest;
import org.openapis.openapi.models.operations.POSTGetStatusResponse;
import org.openapis.openapi.models.operations.POSTGetStatusVersionEnum;
import org.openapis.openapi.models.shared.GetStatusInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetStatusRequest req = new POSTGetStatusRequest("consequuntur", POSTGetStatusActionEnum.GET_STATUS, POSTGetStatusOperationEnum.GET_STATUS, "repellat", "mollitia", "occaecati", "numquam", POSTGetStatusVersionEnum.TWO_THOUSAND_AND_TEN0601) {{
                requestBody = "commodi".getBytes();
            }};            

            POSTGetStatusResponse res = sdk.sdk.postGetStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListJobs

This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListJobsActionEnum;
import org.openapis.openapi.models.operations.POSTListJobsOperationEnum;
import org.openapis.openapi.models.operations.POSTListJobsRequest;
import org.openapis.openapi.models.operations.POSTListJobsResponse;
import org.openapis.openapi.models.operations.POSTListJobsVersionEnum;
import org.openapis.openapi.models.shared.ListJobsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListJobsRequest req = new POSTListJobsRequest("molestiae", POSTListJobsActionEnum.LIST_JOBS, POSTListJobsOperationEnum.LIST_JOBS, "velit", "error", "quia", "quis", POSTListJobsVersionEnum.TWO_THOUSAND_AND_TEN0601) {{
                marker = "vitae";
                maxJobs = "laborum";
                requestBody = "animi".getBytes();
            }};            

            POSTListJobsResponse res = sdk.sdk.postListJobs(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateJob

You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateJobActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateJobOperationEnum;
import org.openapis.openapi.models.operations.POSTUpdateJobRequest;
import org.openapis.openapi.models.operations.POSTUpdateJobResponse;
import org.openapis.openapi.models.operations.POSTUpdateJobVersionEnum;
import org.openapis.openapi.models.shared.JobTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateJobInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateJobRequest req = new POSTUpdateJobRequest("odit", POSTUpdateJobActionEnum.UPDATE_JOB, POSTUpdateJobOperationEnum.UPDATE_JOB, "quo", "sequi", "tenetur", "ipsam", POSTUpdateJobVersionEnum.TWO_THOUSAND_AND_TEN0601) {{
                requestBody = "id".getBytes();
            }};            

            POSTUpdateJobResponse res = sdk.sdk.postUpdateJob(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
