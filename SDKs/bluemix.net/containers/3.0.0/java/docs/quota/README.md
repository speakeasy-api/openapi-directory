# quota

### Available Operations

* [getContainersQuota](#getcontainersquota) - Retrieve organization and space specific quota
* [getContainersUsage](#getcontainersusage) - List container sizes and quota limits
* [putContainersQuota](#putcontainersquota) - Update space quota

## getContainersQuota

Retrieve the quota that is assigned to the organization and space.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainersQuotaRequest;
import org.openapis.openapi.models.operations.GetContainersQuotaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContainersQuotaRequest req = new GetContainersQuotaRequest("occaecati", "numquam");            

            GetContainersQuotaResponse res = sdk.quota.getContainersQuota(req);

            if (res.containersQuotaInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainersUsage

This endpoint returns a list of available container sizes and the quota limit and usage for the space. 

- Container sizes: A list of available container sizes indicating the amount of container memory, disk space and virtual CPUs that can be assigned to the container.
- Quota limit: Lists the number of containers, public IP addresses, available container memory, and virtual CPUS that are allocated to a space. 
- Quota usage: Lists the current number of containers, images, and public IP addresses in a space that is counted towards your quota limit. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainersUsageRequest;
import org.openapis.openapi.models.operations.GetContainersUsageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContainersUsageRequest req = new GetContainersUsageRequest("commodi", "quam");            

            GetContainersUsageResponse res = sdk.quota.getContainersUsage(req);

            if (res.containersUsageInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putContainersQuota

This endpoint updates the quota that is allocated to a Bluemix space. 

 **Note**: Only paid accounts are eligbile to update the space quota. If you are using a free-trial account, upgrade to a paid account first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutContainersQuotaRequest;
import org.openapis.openapi.models.operations.PutContainersQuotaResponse;
import org.openapis.openapi.models.shared.ContainersQuotaList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutContainersQuotaRequest req = new PutContainersQuotaRequest(                new ContainersQuotaList() {{
                                floatingIps = 474697;
                                ram = 244425;
                            }};, "error", "quia");            

            PutContainersQuotaResponse res = sdk.quota.putContainersQuota(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
