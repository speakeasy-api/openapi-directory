# job

### Available Operations

* [jobSearchRead](#jobsearchread) - Return job details search result
* [jobSearchallRead](#jobsearchallread) - Return job details search result

## jobSearchRead

Return job details search result

### Response Class (Status 200)

* __{job_title}__: Used as a key word to search jobs,

For more details on how job are listed [see here][ref].
[ref]: https://etmdb.com/en/job-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobSearchReadRequest;
import org.openapis.openapi.models.operations.JobSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobSearchReadRequest req = new JobSearchReadRequest("delectus");            

            JobSearchReadResponse res = sdk.job.jobSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobSearchallRead

Return job details search result

### Response Class (Status 200)

* __{company_name}__: Used as a key word to search jobs,

For more details on how job are listed [see here][ref].
[ref]: https://etmdb.com/en/job-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobSearchallReadRequest;
import org.openapis.openapi.models.operations.JobSearchallReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobSearchallReadRequest req = new JobSearchallReadRequest("tempora");            

            JobSearchallReadResponse res = sdk.job.jobSearchallRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
