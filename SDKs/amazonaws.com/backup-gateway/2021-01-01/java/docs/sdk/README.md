# SDK

## Overview

<p><fullname>Backup gateway</fullname> <p>Backup gateway connects Backup to your hypervisor, so you can create, store, and restore backups of your virtual machines (VMs) anywhere, whether on-premises or in the VMware Cloud (VMC) on Amazon Web Services.</p> <p>Add on-premises resources by connecting to a hypervisor through a gateway. Backup will automatically discover the resources in your hypervisor.</p> <p>Use Backup to assign virtual or on-premises resources to a backup plan, or run on-demand backups. Once you have backed up your resources, you can view them and restore them like any resource supported by Backup.</p> <p>To download the Amazon Web Services software to get started, navigate to the Backup console, choose <b>Gateways</b>, then choose <b>Create gateway</b>.</p></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/backup-gateway/>
### Available Operations

* [associateGatewayToServer](#associategatewaytoserver) - Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.
* [createGateway](#creategateway) - Creates a backup gateway. After you create a gateway, you can associate it with a server using the <code>AssociateGatewayToServer</code> operation.
* [deleteGateway](#deletegateway) - Deletes a backup gateway.
* [deleteHypervisor](#deletehypervisor) - Deletes a hypervisor.
* [disassociateGatewayFromServer](#disassociategatewayfromserver) - Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.
* [getBandwidthRateLimitSchedule](#getbandwidthratelimitschedule) - Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.
* [getGateway](#getgateway) - By providing the ARN (Amazon Resource Name), this API returns the gateway.
* [getHypervisor](#gethypervisor) - This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
* [getHypervisorPropertyMappings](#gethypervisorpropertymappings) - This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
* [getVirtualMachine](#getvirtualmachine) - By providing the ARN (Amazon Resource Name), this API returns the virtual machine.
* [importHypervisorConfiguration](#importhypervisorconfiguration) - Connect to a hypervisor by importing its configuration.
* [listGateways](#listgateways) - Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).
* [listHypervisors](#listhypervisors) - Lists your hypervisors.
* [listTagsForResource](#listtagsforresource) - Lists the tags applied to the resource identified by its Amazon Resource Name (ARN).
* [listVirtualMachines](#listvirtualmachines) - Lists your virtual machines.
* [putBandwidthRateLimitSchedule](#putbandwidthratelimitschedule) - This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.
* [putHypervisorPropertyMappings](#puthypervisorpropertymappings) - This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
* [putMaintenanceStartTime](#putmaintenancestarttime) - Set the maintenance start time for a gateway.
* [startVirtualMachinesMetadataSync](#startvirtualmachinesmetadatasync) - This action sends a request to sync metadata across the specified virtual machines.
* [tagResource](#tagresource) - Tag the resource.
* [testHypervisorConfiguration](#testhypervisorconfiguration) - Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.
* [untagResource](#untagresource) - Removes tags from the resource.
* [updateGatewayInformation](#updategatewayinformation) - Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.
* [updateGatewaySoftwareNow](#updategatewaysoftwarenow) - <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete.</p> </note>
* [updateHypervisor](#updatehypervisor) - Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.

## associateGatewayToServer

Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateGatewayToServerRequest;
import org.openapis.openapi.models.operations.AssociateGatewayToServerResponse;
import org.openapis.openapi.models.operations.AssociateGatewayToServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateGatewayToServerInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateGatewayToServerRequest req = new AssociateGatewayToServerRequest(                new AssociateGatewayToServerInput("suscipit", "iure");, AssociateGatewayToServerXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_ASSOCIATE_GATEWAY_TO_SERVER) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateGatewayToServerResponse res = sdk.sdk.associateGatewayToServer(req);

            if (res.associateGatewayToServerOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGateway

Creates a backup gateway. After you create a gateway, you can associate it with a server using the <code>AssociateGatewayToServer</code> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGatewayRequest;
import org.openapis.openapi.models.operations.CreateGatewayResponse;
import org.openapis.openapi.models.operations.CreateGatewayXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateGatewayInput;
import org.openapis.openapi.models.shared.GatewayTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGatewayRequest req = new CreateGatewayRequest(                new CreateGatewayInput("placeat", "voluptatum", GatewayTypeEnum.BACKUP_VM) {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("recusandae", "temporibus") {{
                                        key = "excepturi";
                                        value = "nisi";
                                    }}),
                                    add(new Tag("veritatis", "deserunt") {{
                                        key = "ab";
                                        value = "quis";
                                    }}),
                                }};
                            }};, CreateGatewayXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_CREATE_GATEWAY) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "repellendus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "quo";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "at";
            }};            

            CreateGatewayResponse res = sdk.sdk.createGateway(req);

            if (res.createGatewayOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGateway

Deletes a backup gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGatewayRequest;
import org.openapis.openapi.models.operations.DeleteGatewayResponse;
import org.openapis.openapi.models.operations.DeleteGatewayXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteGatewayInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGatewayRequest req = new DeleteGatewayRequest(                new DeleteGatewayInput("maiores");, DeleteGatewayXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_DELETE_GATEWAY) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            DeleteGatewayResponse res = sdk.sdk.deleteGateway(req);

            if (res.deleteGatewayOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHypervisor

Deletes a hypervisor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHypervisorRequest;
import org.openapis.openapi.models.operations.DeleteHypervisorResponse;
import org.openapis.openapi.models.operations.DeleteHypervisorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteHypervisorInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteHypervisorRequest req = new DeleteHypervisorRequest(                new DeleteHypervisorInput("nam");, DeleteHypervisorXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_DELETE_HYPERVISOR) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "fugit";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "hic";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "totam";
            }};            

            DeleteHypervisorResponse res = sdk.sdk.deleteHypervisor(req);

            if (res.deleteHypervisorOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateGatewayFromServer

Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateGatewayFromServerRequest;
import org.openapis.openapi.models.operations.DisassociateGatewayFromServerResponse;
import org.openapis.openapi.models.operations.DisassociateGatewayFromServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateGatewayFromServerInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateGatewayFromServerRequest req = new DisassociateGatewayFromServerRequest(                new DisassociateGatewayFromServerInput("commodi");, DisassociateGatewayFromServerXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_DISASSOCIATE_GATEWAY_FROM_SERVER) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "impedit";
                xAmzSecurityToken = "cum";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "ipsum";
            }};            

            DisassociateGatewayFromServerResponse res = sdk.sdk.disassociateGatewayFromServer(req);

            if (res.disassociateGatewayFromServerOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBandwidthRateLimitSchedule

Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBandwidthRateLimitScheduleRequest;
import org.openapis.openapi.models.operations.GetBandwidthRateLimitScheduleResponse;
import org.openapis.openapi.models.operations.GetBandwidthRateLimitScheduleXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetBandwidthRateLimitScheduleInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBandwidthRateLimitScheduleRequest req = new GetBandwidthRateLimitScheduleRequest(                new GetBandwidthRateLimitScheduleInput("aspernatur");, GetBandwidthRateLimitScheduleXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_GET_BANDWIDTH_RATE_LIMIT_SCHEDULE) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ad";
                xAmzCredential = "natus";
                xAmzDate = "sed";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "natus";
            }};            

            GetBandwidthRateLimitScheduleResponse res = sdk.sdk.getBandwidthRateLimitSchedule(req);

            if (res.getBandwidthRateLimitScheduleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGateway

By providing the ARN (Amazon Resource Name), this API returns the gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGatewayRequest;
import org.openapis.openapi.models.operations.GetGatewayResponse;
import org.openapis.openapi.models.operations.GetGatewayXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetGatewayInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGatewayRequest req = new GetGatewayRequest(                new GetGatewayInput("hic");, GetGatewayXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_GET_GATEWAY) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
            }};            

            GetGatewayResponse res = sdk.sdk.getGateway(req);

            if (res.getGatewayOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHypervisor

This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHypervisorRequest;
import org.openapis.openapi.models.operations.GetHypervisorResponse;
import org.openapis.openapi.models.operations.GetHypervisorXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetHypervisorInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetHypervisorRequest req = new GetHypervisorRequest(                new GetHypervisorInput("architecto");, GetHypervisorXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_GET_HYPERVISOR) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "est";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "dolorem";
            }};            

            GetHypervisorResponse res = sdk.sdk.getHypervisor(req);

            if (res.getHypervisorOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHypervisorPropertyMappings

This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHypervisorPropertyMappingsRequest;
import org.openapis.openapi.models.operations.GetHypervisorPropertyMappingsResponse;
import org.openapis.openapi.models.operations.GetHypervisorPropertyMappingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetHypervisorPropertyMappingsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetHypervisorPropertyMappingsRequest req = new GetHypervisorPropertyMappingsRequest(                new GetHypervisorPropertyMappingsInput("explicabo");, GetHypervisorPropertyMappingsXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_GET_HYPERVISOR_PROPERTY_MAPPINGS) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "omnis";
                xAmzDate = "nemo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
            }};            

            GetHypervisorPropertyMappingsResponse res = sdk.sdk.getHypervisorPropertyMappings(req);

            if (res.getHypervisorPropertyMappingsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVirtualMachine

By providing the ARN (Amazon Resource Name), this API returns the virtual machine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVirtualMachineRequest;
import org.openapis.openapi.models.operations.GetVirtualMachineResponse;
import org.openapis.openapi.models.operations.GetVirtualMachineXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetVirtualMachineInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetVirtualMachineRequest req = new GetVirtualMachineRequest(                new GetVirtualMachineInput("culpa");, GetVirtualMachineXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_GET_VIRTUAL_MACHINE) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GetVirtualMachineResponse res = sdk.sdk.getVirtualMachine(req);

            if (res.getVirtualMachineOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importHypervisorConfiguration

Connect to a hypervisor by importing its configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportHypervisorConfigurationRequest;
import org.openapis.openapi.models.operations.ImportHypervisorConfigurationResponse;
import org.openapis.openapi.models.operations.ImportHypervisorConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImportHypervisorConfigurationInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportHypervisorConfigurationRequest req = new ImportHypervisorConfigurationRequest(                new ImportHypervisorConfigurationInput("mollitia", "occaecati") {{
                                kmsKeyArn = "numquam";
                                password = "commodi";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("error", "quia") {{
                                        key = "molestiae";
                                        value = "velit";
                                    }}),
                                    add(new Tag("laborum", "animi") {{
                                        key = "quis";
                                        value = "vitae";
                                    }}),
                                }};
                                username = "enim";
                            }};, ImportHypervisorConfigurationXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_IMPORT_HYPERVISOR_CONFIGURATION) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "quo";
                xAmzCredential = "sequi";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "id";
                xAmzSignedHeaders = "possimus";
            }};            

            ImportHypervisorConfigurationResponse res = sdk.sdk.importHypervisorConfiguration(req);

            if (res.importHypervisorConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGateways

Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGatewaysRequest;
import org.openapis.openapi.models.operations.ListGatewaysResponse;
import org.openapis.openapi.models.operations.ListGatewaysXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListGatewaysInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGatewaysRequest req = new ListGatewaysRequest(                new ListGatewaysInput() {{
                                maxResults = 97101L;
                                nextToken = "error";
                            }};, ListGatewaysXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_LIST_GATEWAYS) {{
                maxResults = "temporibus";
                nextToken = "laborum";
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "voluptatibus";
                xAmzDate = "vero";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            ListGatewaysResponse res = sdk.sdk.listGateways(req);

            if (res.listGatewaysOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHypervisors

Lists your hypervisors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHypervisorsRequest;
import org.openapis.openapi.models.operations.ListHypervisorsResponse;
import org.openapis.openapi.models.operations.ListHypervisorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListHypervisorsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListHypervisorsRequest req = new ListHypervisorsRequest(                new ListHypervisorsInput() {{
                                maxResults = 604846L;
                                nextToken = "voluptate";
                            }};, ListHypervisorsXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_LIST_HYPERVISORS) {{
                maxResults = "cum";
                nextToken = "perferendis";
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ut";
                xAmzDate = "maiores";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "dolore";
            }};            

            ListHypervisorsResponse res = sdk.sdk.listHypervisors(req);

            if (res.listHypervisorsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags applied to the resource identified by its Amazon Resource Name (ARN).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceInput("dicta");, ListTagsForResourceXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVirtualMachines

Lists your virtual machines.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVirtualMachinesRequest;
import org.openapis.openapi.models.operations.ListVirtualMachinesResponse;
import org.openapis.openapi.models.operations.ListVirtualMachinesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListVirtualMachinesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVirtualMachinesRequest req = new ListVirtualMachinesRequest(                new ListVirtualMachinesInput() {{
                                hypervisorArn = "molestias";
                                maxResults = 566602L;
                                nextToken = "pariatur";
                            }};, ListVirtualMachinesXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_LIST_VIRTUAL_MACHINES) {{
                maxResults = "modi";
                nextToken = "praesentium";
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "quasi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "sint";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "itaque";
            }};            

            ListVirtualMachinesResponse res = sdk.sdk.listVirtualMachines(req);

            if (res.listVirtualMachinesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putBandwidthRateLimitSchedule

This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutBandwidthRateLimitScheduleRequest;
import org.openapis.openapi.models.operations.PutBandwidthRateLimitScheduleResponse;
import org.openapis.openapi.models.operations.PutBandwidthRateLimitScheduleXAmzTargetEnum;
import org.openapis.openapi.models.shared.BandwidthRateLimitInterval;
import org.openapis.openapi.models.shared.PutBandwidthRateLimitScheduleInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutBandwidthRateLimitScheduleRequest req = new PutBandwidthRateLimitScheduleRequest(                new PutBandwidthRateLimitScheduleInput(                new org.openapis.openapi.models.shared.BandwidthRateLimitInterval[]{{
                                                add(new BandwidthRateLimitInterval(                new Long[]{{
                                                                    add(397821L),
                                                                }}, 586513L, 552822L, 20107L, 164940L) {{
                                                    averageUploadRateLimitInBitsPerSec = 9356L;
                                                    daysOfWeek = new Long[]{{
                                                        add(842342L),
                                                        add(131797L),
                                                        add(647174L),
                                                    }};
                                                    endHourOfDay = 716327L;
                                                    endMinuteOfHour = 841386L;
                                                    startHourOfDay = 289406L;
                                                    startMinuteOfHour = 264730L;
                                                }}),
                                                add(new BandwidthRateLimitInterval(                new Long[]{{
                                                                    add(288476L),
                                                                    add(962189L),
                                                                    add(433288L),
                                                                }}, 248753L, 756107L, 576157L, 396098L) {{
                                                    averageUploadRateLimitInBitsPerSec = 828940L;
                                                    daysOfWeek = new Long[]{{
                                                        add(4695L),
                                                        add(146441L),
                                                    }};
                                                    endHourOfDay = 677817L;
                                                    endMinuteOfHour = 569618L;
                                                    startHourOfDay = 270008L;
                                                    startMinuteOfHour = 703737L;
                                                }}),
                                            }}, "provident");, PutBandwidthRateLimitScheduleXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_PUT_BANDWIDTH_RATE_LIMIT_SCHEDULE) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
            }};            

            PutBandwidthRateLimitScheduleResponse res = sdk.sdk.putBandwidthRateLimitSchedule(req);

            if (res.putBandwidthRateLimitScheduleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putHypervisorPropertyMappings

This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutHypervisorPropertyMappingsRequest;
import org.openapis.openapi.models.operations.PutHypervisorPropertyMappingsResponse;
import org.openapis.openapi.models.operations.PutHypervisorPropertyMappingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutHypervisorPropertyMappingsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VmwareToAwsTagMapping;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutHypervisorPropertyMappingsRequest req = new PutHypervisorPropertyMappingsRequest(                new PutHypervisorPropertyMappingsInput("in", "illum",                 new org.openapis.openapi.models.shared.VmwareToAwsTagMapping[]{{
                                                add(new VmwareToAwsTagMapping("facere", "ea", "aliquid", "laborum") {{
                                                    awsTagKey = "rerum";
                                                    awsTagValue = "dicta";
                                                    vmwareCategory = "magnam";
                                                    vmwareTagName = "cumque";
                                                }}),
                                                add(new VmwareToAwsTagMapping("accusamus", "delectus", "quidem", "provident") {{
                                                    awsTagKey = "accusamus";
                                                    awsTagValue = "non";
                                                    vmwareCategory = "occaecati";
                                                    vmwareTagName = "enim";
                                                }}),
                                                add(new VmwareToAwsTagMapping("sapiente", "amet", "deserunt", "nisi") {{
                                                    awsTagKey = "nam";
                                                    awsTagValue = "id";
                                                    vmwareCategory = "blanditiis";
                                                    vmwareTagName = "deleniti";
                                                }}),
                                                add(new VmwareToAwsTagMapping("perferendis", "nihil", "magnam", "distinctio") {{
                                                    awsTagKey = "vel";
                                                    awsTagValue = "natus";
                                                    vmwareCategory = "omnis";
                                                    vmwareTagName = "molestiae";
                                                }}),
                                            }});, PutHypervisorPropertyMappingsXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_PUT_HYPERVISOR_PROPERTY_MAPPINGS) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "labore";
                xAmzCredential = "labore";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "natus";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "eum";
            }};            

            PutHypervisorPropertyMappingsResponse res = sdk.sdk.putHypervisorPropertyMappings(req);

            if (res.putHypervisorPropertyMappingsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putMaintenanceStartTime

Set the maintenance start time for a gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutMaintenanceStartTimeRequest;
import org.openapis.openapi.models.operations.PutMaintenanceStartTimeResponse;
import org.openapis.openapi.models.operations.PutMaintenanceStartTimeXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutMaintenanceStartTimeInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutMaintenanceStartTimeRequest req = new PutMaintenanceStartTimeRequest(                new PutMaintenanceStartTimeInput("aspernatur", 102863L, 298282L) {{
                                dayOfMonth = 92373L;
                                dayOfWeek = 569965L;
                            }};, PutMaintenanceStartTimeXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_PUT_MAINTENANCE_START_TIME) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "provident";
                xAmzCredential = "quos";
                xAmzDate = "sint";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "reiciendis";
            }};            

            PutMaintenanceStartTimeResponse res = sdk.sdk.putMaintenanceStartTime(req);

            if (res.putMaintenanceStartTimeOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startVirtualMachinesMetadataSync

This action sends a request to sync metadata across the specified virtual machines.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartVirtualMachinesMetadataSyncRequest;
import org.openapis.openapi.models.operations.StartVirtualMachinesMetadataSyncResponse;
import org.openapis.openapi.models.operations.StartVirtualMachinesMetadataSyncXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartVirtualMachinesMetadataSyncInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartVirtualMachinesMetadataSyncRequest req = new StartVirtualMachinesMetadataSyncRequest(                new StartVirtualMachinesMetadataSyncInput("ad");, StartVirtualMachinesMetadataSyncXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_START_VIRTUAL_MACHINES_METADATA_SYNC) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "necessitatibus";
                xAmzDate = "odit";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "iure";
            }};            

            StartVirtualMachinesMetadataSyncResponse res = sdk.sdk.startVirtualMachinesMetadataSync(req);

            if (res.startVirtualMachinesMetadataSyncOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Tag the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceInput("debitis",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("facilis", "in") {{
                                                    key = "maxime";
                                                    value = "deleniti";
                                                }}),
                                                add(new Tag("repudiandae", "ullam") {{
                                                    key = "architecto";
                                                    value = "architecto";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_TAG_RESOURCE) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "repellat";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "sed";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "pariatur";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testHypervisorConfiguration

Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestHypervisorConfigurationRequest;
import org.openapis.openapi.models.operations.TestHypervisorConfigurationResponse;
import org.openapis.openapi.models.operations.TestHypervisorConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestHypervisorConfigurationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TestHypervisorConfigurationRequest req = new TestHypervisorConfigurationRequest(                new TestHypervisorConfigurationInput("consequuntur", "praesentium") {{
                                password = "natus";
                                username = "magni";
                            }};, TestHypervisorConfigurationXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_TEST_HYPERVISOR_CONFIGURATION) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
            }};            

            TestHypervisorConfigurationResponse res = sdk.sdk.testHypervisorConfiguration(req);

            if (res.testHypervisorConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes tags from the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceInput("ea",                 new String[]{{
                                                add("ab"),
                                            }});, UntagResourceXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "ipsam";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "eaque";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGatewayInformation

Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGatewayInformationRequest;
import org.openapis.openapi.models.operations.UpdateGatewayInformationResponse;
import org.openapis.openapi.models.operations.UpdateGatewayInformationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateGatewayInformationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGatewayInformationRequest req = new UpdateGatewayInformationRequest(                new UpdateGatewayInformationInput("nemo") {{
                                gatewayDisplayName = "voluptatibus";
                            }};, UpdateGatewayInformationXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_UPDATE_GATEWAY_INFORMATION) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "amet";
                xAmzDate = "aut";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "hic";
            }};            

            UpdateGatewayInformationResponse res = sdk.sdk.updateGatewayInformation(req);

            if (res.updateGatewayInformationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGatewaySoftwareNow

<p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGatewaySoftwareNowRequest;
import org.openapis.openapi.models.operations.UpdateGatewaySoftwareNowResponse;
import org.openapis.openapi.models.operations.UpdateGatewaySoftwareNowXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateGatewaySoftwareNowInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGatewaySoftwareNowRequest req = new UpdateGatewaySoftwareNowRequest(                new UpdateGatewaySoftwareNowInput("nobis");, UpdateGatewaySoftwareNowXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_UPDATE_GATEWAY_SOFTWARE_NOW) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "quis";
                xAmzCredential = "totam";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "nesciunt";
            }};            

            UpdateGatewaySoftwareNowResponse res = sdk.sdk.updateGatewaySoftwareNow(req);

            if (res.updateGatewaySoftwareNowOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateHypervisor

Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateHypervisorRequest;
import org.openapis.openapi.models.operations.UpdateHypervisorResponse;
import org.openapis.openapi.models.operations.UpdateHypervisorXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateHypervisorInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateHypervisorRequest req = new UpdateHypervisorRequest(                new UpdateHypervisorInput("perferendis") {{
                                host = "dolores";
                                logGroupArn = "minus";
                                name = "Rosa Swift";
                                password = "recusandae";
                                username = "omnis";
                            }};, UpdateHypervisorXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_UPDATE_HYPERVISOR) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "perspiciatis";
                xAmzCredential = "voluptatem";
                xAmzDate = "porro";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "error";
            }};            

            UpdateHypervisorResponse res = sdk.sdk.updateHypervisor(req);

            if (res.updateHypervisorOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
