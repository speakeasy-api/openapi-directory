# linuxHostings

## Overview

Manage your linux hostings.

### Available Operations

* [addScheduledTasks](#addscheduledtasks) - Add a scheduled task
* [addSshKey](#addsshkey) - Add a SSH key
* [changeApcu](#changeapcu) - Configure PHP APCu setting
* [changeAutoRedirect](#changeautoredirect) - Configure auto redirect
* [changeGzipCompression](#changegzipcompression) - Enable/disable GZIP compression
* [changeLetsEncrypt](#changeletsencrypt) - Configure let's encrypt
* [changePhpMemoryLimit](#changephpmemorylimit) - Configure PHP memory limit
* [changePhpVersion](#changephpversion) - Change the Linux hosting PHP version.
* [configureFtp](#configureftp) - Configure FTP
* [configureHttp2](#configurehttp2) - Configure HTTP/2
* [configureScheduledTask](#configurescheduledtask) - Configure a scheduled task
* [configureSsh](#configuressh) - Configure SSH
* [createHostHeader](#createhostheader) - Create a host header
* [createSubsite](#createsubsite) - Create a subsite
* [deleteScheduledTask](#deletescheduledtask) - Delete a scheduled task
* [deleteSshKey](#deletesshkey) - Delete a SSH key
* [deleteSubsite](#deletesubsite) - Delete a subsite
* [getAvailablePhpVersions](#getavailablephpversions) - Get the available PHP versions.
* [getLinuxHosting](#getlinuxhosting) - Linux hosting detail
* [getLinuxHostings](#getlinuxhostings) - Overview of linux hostings
* [getScheduledTask](#getscheduledtask) - Get scheduled task detail
* [getScheduledTasks](#getscheduledtasks) - Overview of scheduled tasks
* [getSshKeys](#getsshkeys) - Overview of SSH keys

## addScheduledTasks

Add a scheduled task

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddScheduledTasksRequest;
import org.openapis.openapi.models.operations.AddScheduledTasksResponse;
import org.openapis.openapi.models.shared.ScheduledTask;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddScheduledTasksRequest req = new AddScheduledTasksRequest("magnam", "distinctio") {{
                scheduledTask = new ScheduledTask() {{
                    cronExpression = "id";
                    enabled = false;
                    id = "4469b6e2-1419-4598-90af-a563e2516fe4";
                    scriptLocation = "maxime";
                }};;
            }};            

            AddScheduledTasksResponse res = sdk.linuxHostings.addScheduledTasks(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addSshKey

Add a SSH key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddSshKeyRequest;
import org.openapis.openapi.models.operations.AddSshKeyResponse;
import org.openapis.openapi.models.shared.AddSshKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddSshKeyRequest req = new AddSshKeyRequest("deleniti", "facilis") {{
                addSshKeyRequest = new AddSshKeyRequest() {{
                    publicKey = "in";
                }};;
            }};            

            AddSshKeyResponse res = sdk.linuxHostings.addSshKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeApcu

Configure PHP APCu setting

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeApcuRequest;
import org.openapis.openapi.models.operations.ChangeApcuResponse;
import org.openapis.openapi.models.shared.UpdatePhpAPcuRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeApcuRequest req = new ChangeApcuRequest("architecto", "architecto") {{
                updatePhpAPcuRequest = new UpdatePhpAPcuRequest() {{
                    apcuSize = 919483;
                    enabled = false;
                }};;
            }};            

            ChangeApcuResponse res = sdk.linuxHostings.changeApcu(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeAutoRedirect

Configure auto redirect

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeAutoRedirectRequest;
import org.openapis.openapi.models.operations.ChangeAutoRedirectResponse;
import org.openapis.openapi.models.shared.AutoRedirectConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeAutoRedirectRequest req = new ChangeAutoRedirectRequest("ullam", "expedita", "nihil") {{
                autoRedirectConfig = new AutoRedirectConfig() {{
                    enabled = false;
                }};;
            }};            

            ChangeAutoRedirectResponse res = sdk.linuxHostings.changeAutoRedirect(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeGzipCompression

Enable/disable GZIP compression

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeGzipCompressionRequest;
import org.openapis.openapi.models.operations.ChangeGzipCompressionResponse;
import org.openapis.openapi.models.shared.GzipConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeGzipCompressionRequest req = new ChangeGzipCompressionRequest("repellat", "quibusdam") {{
                gzipConfig = new GzipConfig() {{
                    enabled = false;
                }};;
            }};            

            ChangeGzipCompressionResponse res = sdk.linuxHostings.changeGzipCompression(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeLetsEncrypt

Configure let's encrypt

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeLetsEncryptRequest;
import org.openapis.openapi.models.operations.ChangeLetsEncryptResponse;
import org.openapis.openapi.models.shared.LetsEncryptConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeLetsEncryptRequest req = new ChangeLetsEncryptRequest("sed", "saepe", "pariatur") {{
                letsEncryptConfig = new LetsEncryptConfig() {{
                    enabled = false;
                }};;
            }};            

            ChangeLetsEncryptResponse res = sdk.linuxHostings.changeLetsEncrypt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changePhpMemoryLimit

Configure PHP memory limit

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangePhpMemoryLimitRequest;
import org.openapis.openapi.models.operations.ChangePhpMemoryLimitResponse;
import org.openapis.openapi.models.shared.UpdatePhpMemoryLimitRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangePhpMemoryLimitRequest req = new ChangePhpMemoryLimitRequest("accusantium", "consequuntur") {{
                updatePhpMemoryLimitRequest = new UpdatePhpMemoryLimitRequest() {{
                    memoryLimit = 508315;
                }};;
            }};            

            ChangePhpMemoryLimitResponse res = sdk.linuxHostings.changePhpMemoryLimit(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changePhpVersion

Change the Linux hosting PHP version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangePhpVersionRequest;
import org.openapis.openapi.models.operations.ChangePhpVersionResponse;
import org.openapis.openapi.models.shared.PhpVersion;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangePhpVersionRequest req = new ChangePhpVersionRequest("natus", "magni") {{
                phpVersion = new PhpVersion() {{
                    version = "sunt";
                }};;
            }};            

            ChangePhpVersionResponse res = sdk.linuxHostings.changePhpVersion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## configureFtp

Configure FTP

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureFtpRequest;
import org.openapis.openapi.models.operations.ConfigureFtpResponse;
import org.openapis.openapi.models.shared.FtpConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureFtpRequest req = new ConfigureFtpRequest("quo", "illum") {{
                ftpConfiguration = new FtpConfiguration() {{
                    enabled = false;
                }};;
            }};            

            ConfigureFtpResponse res = sdk.linuxHostings.configureFtp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## configureHttp2

Configure HTTP/2

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureHttp2Request;
import org.openapis.openapi.models.operations.ConfigureHttp2Response;
import org.openapis.openapi.models.shared.Http2Configuration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureHttp2Request req = new ConfigureHttp2Request("pariatur", "maxime", "ea", "excepturi") {{
                http2Configuration = new Http2Configuration() {{
                    enabled = false;
                }};;
            }};            

            ConfigureHttp2Response res = sdk.linuxHostings.configureHttp2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## configureScheduledTask

Configure a scheduled task

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureScheduledTaskRequest;
import org.openapis.openapi.models.operations.ConfigureScheduledTaskResponse;
import org.openapis.openapi.models.shared.ScheduledTask;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureScheduledTaskRequest req = new ConfigureScheduledTaskRequest("odit", "ea", "accusantium", "ab") {{
                scheduledTask = new ScheduledTask() {{
                    cronExpression = "maiores";
                    enabled = false;
                    id = "b576b0d5-f0d3-40c5-bbb2-587053202c73";
                    scriptLocation = "vero";
                }};;
            }};            

            ConfigureScheduledTaskResponse res = sdk.linuxHostings.configureScheduledTask(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## configureSsh

Configure SSH

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureSshRequest;
import org.openapis.openapi.models.operations.ConfigureSshResponse;
import org.openapis.openapi.models.shared.SshConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureSshRequest req = new ConfigureSshRequest("nostrum", "hic") {{
                sshConfiguration = new SshConfiguration() {{
                    enabled = false;
                }};;
            }};            

            ConfigureSshResponse res = sdk.linuxHostings.configureSsh(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createHostHeader

Create a host header

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHostHeaderRequest;
import org.openapis.openapi.models.operations.CreateHostHeaderResponse;
import org.openapis.openapi.models.shared.AddHostHeaderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateHostHeaderRequest req = new CreateHostHeaderRequest("recusandae", "omnis", "facilis", "perspiciatis") {{
                addHostHeaderRequest = new AddHostHeaderRequest() {{
                    domainName = "voluptatem";
                }};;
            }};            

            CreateHostHeaderResponse res = sdk.linuxHostings.createHostHeader(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubsite

Create a subsite

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubsiteRequest;
import org.openapis.openapi.models.operations.CreateSubsiteResponse;
import org.openapis.openapi.models.shared.AddSubsiteRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSubsiteRequest req = new CreateSubsiteRequest("porro", "consequuntur") {{
                addSubsiteRequest = new AddSubsiteRequest() {{
                    domainName = "blanditiis";
                    path = "error";
                }};;
            }};            

            CreateSubsiteResponse res = sdk.linuxHostings.createSubsite(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteScheduledTask

Delete a scheduled task

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScheduledTaskRequest;
import org.openapis.openapi.models.operations.DeleteScheduledTaskResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteScheduledTaskRequest req = new DeleteScheduledTaskRequest("eaque", "occaecati", "rerum", "adipisci");            

            DeleteScheduledTaskResponse res = sdk.linuxHostings.deleteScheduledTask(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSshKey

Delete a SSH key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSshKeyRequest;
import org.openapis.openapi.models.operations.DeleteSshKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSshKeyRequest req = new DeleteSshKeyRequest("asperiores", "earum", "modi");            

            DeleteSshKeyResponse res = sdk.linuxHostings.deleteSshKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubsite

Delete a subsite

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubsiteRequest;
import org.openapis.openapi.models.operations.DeleteSubsiteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSubsiteRequest req = new DeleteSubsiteRequest("iste", "dolorum", "deleniti", "pariatur");            

            DeleteSubsiteResponse res = sdk.linuxHostings.deleteSubsite(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAvailablePhpVersions

Get the available PHP versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAvailablePhpVersionsRequest;
import org.openapis.openapi.models.operations.GetAvailablePhpVersionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAvailablePhpVersionsRequest req = new GetAvailablePhpVersionsRequest("provident", "nobis");            

            GetAvailablePhpVersionsResponse res = sdk.linuxHostings.getAvailablePhpVersions(req);

            if (res.phpVersions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLinuxHosting

Linux hosting detail

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLinuxHostingRequest;
import org.openapis.openapi.models.operations.GetLinuxHostingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLinuxHostingRequest req = new GetLinuxHostingRequest("libero", "delectus");            

            GetLinuxHostingResponse res = sdk.linuxHostings.getLinuxHosting(req);

            if (res.linuxHostingDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLinuxHostings

Overview of linux hostings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLinuxHostingsRequest;
import org.openapis.openapi.models.operations.GetLinuxHostingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLinuxHostingsRequest req = new GetLinuxHostingsRequest() {{
                skip = 311945;
                take = 554242;
            }};            

            GetLinuxHostingsResponse res = sdk.linuxHostings.getLinuxHostings(req);

            if (res.linuxHostings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScheduledTask

Get scheduled task detail

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScheduledTaskRequest;
import org.openapis.openapi.models.operations.GetScheduledTaskResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScheduledTaskRequest req = new GetScheduledTaskRequest("aliquid", "dolorem", "dolorem", "dolor");            

            GetScheduledTaskResponse res = sdk.linuxHostings.getScheduledTask(req);

            if (res.scheduledTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScheduledTasks

Manage scheduled tasks which are also manageable via the control panel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScheduledTasksRequest;
import org.openapis.openapi.models.operations.GetScheduledTasksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScheduledTasksRequest req = new GetScheduledTasksRequest("qui", "ipsum");            

            GetScheduledTasksResponse res = sdk.linuxHostings.getScheduledTasks(req);

            if (res.scheduledTasks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSshKeys

Overview of SSH keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSshKeysRequest;
import org.openapis.openapi.models.operations.GetSshKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSshKeysRequest req = new GetSshKeysRequest("hic", "excepturi");            

            GetSshKeysResponse res = sdk.linuxHostings.getSshKeys(req);

            if (res.sshKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
