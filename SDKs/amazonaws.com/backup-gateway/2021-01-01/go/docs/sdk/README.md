# SDK

## Overview

<p><fullname>Backup gateway</fullname> <p>Backup gateway connects Backup to your hypervisor, so you can create, store, and restore backups of your virtual machines (VMs) anywhere, whether on-premises or in the VMware Cloud (VMC) on Amazon Web Services.</p> <p>Add on-premises resources by connecting to a hypervisor through a gateway. Backup will automatically discover the resources in your hypervisor.</p> <p>Use Backup to assign virtual or on-premises resources to a backup plan, or run on-demand backups. Once you have backed up your resources, you can view them and restore them like any resource supported by Backup.</p> <p>To download the Amazon Web Services software to get started, navigate to the Backup console, choose <b>Gateways</b>, then choose <b>Create gateway</b>.</p></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/backup-gateway/>
### Available Operations

* [AssociateGatewayToServer](#associategatewaytoserver) - Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.
* [CreateGateway](#creategateway) - Creates a backup gateway. After you create a gateway, you can associate it with a server using the <code>AssociateGatewayToServer</code> operation.
* [DeleteGateway](#deletegateway) - Deletes a backup gateway.
* [DeleteHypervisor](#deletehypervisor) - Deletes a hypervisor.
* [DisassociateGatewayFromServer](#disassociategatewayfromserver) - Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.
* [GetBandwidthRateLimitSchedule](#getbandwidthratelimitschedule) - Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.
* [GetGateway](#getgateway) - By providing the ARN (Amazon Resource Name), this API returns the gateway.
* [GetHypervisor](#gethypervisor) - This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
* [GetHypervisorPropertyMappings](#gethypervisorpropertymappings) - This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
* [GetVirtualMachine](#getvirtualmachine) - By providing the ARN (Amazon Resource Name), this API returns the virtual machine.
* [ImportHypervisorConfiguration](#importhypervisorconfiguration) - Connect to a hypervisor by importing its configuration.
* [ListGateways](#listgateways) - Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).
* [ListHypervisors](#listhypervisors) - Lists your hypervisors.
* [ListTagsForResource](#listtagsforresource) - Lists the tags applied to the resource identified by its Amazon Resource Name (ARN).
* [ListVirtualMachines](#listvirtualmachines) - Lists your virtual machines.
* [PutBandwidthRateLimitSchedule](#putbandwidthratelimitschedule) - This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.
* [PutHypervisorPropertyMappings](#puthypervisorpropertymappings) - This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
* [PutMaintenanceStartTime](#putmaintenancestarttime) - Set the maintenance start time for a gateway.
* [StartVirtualMachinesMetadataSync](#startvirtualmachinesmetadatasync) - This action sends a request to sync metadata across the specified virtual machines.
* [TagResource](#tagresource) - Tag the resource.
* [TestHypervisorConfiguration](#testhypervisorconfiguration) - Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.
* [UntagResource](#untagresource) - Removes tags from the resource.
* [UpdateGatewayInformation](#updategatewayinformation) - Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.
* [UpdateGatewaySoftwareNow](#updategatewaysoftwarenow) - <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete.</p> </note>
* [UpdateHypervisor](#updatehypervisor) - Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.

## AssociateGatewayToServer

Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateGatewayToServer(ctx, operations.AssociateGatewayToServerRequest{
        AssociateGatewayToServerInput: shared.AssociateGatewayToServerInput{
            GatewayArn: "error",
            ServerArn: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.AssociateGatewayToServerXAmzTargetEnumBackupOnPremisesV20210101AssociateGatewayToServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateGatewayToServerOutput != nil {
        // handle response
    }
}
```

## CreateGateway

Creates a backup gateway. After you create a gateway, you can associate it with a server using the <code>AssociateGatewayToServer</code> operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateGateway(ctx, operations.CreateGatewayRequest{
        CreateGatewayInput: shared.CreateGatewayInput{
            ActivationKey: "suscipit",
            GatewayDisplayName: "molestiae",
            GatewayType: shared.GatewayTypeEnumBackupVM,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "placeat",
                    Value: "voluptatum",
                },
                shared.Tag{
                    Key: "iusto",
                    Value: "excepturi",
                },
                shared.Tag{
                    Key: "nisi",
                    Value: "recusandae",
                },
                shared.Tag{
                    Key: "temporibus",
                    Value: "ab",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.CreateGatewayXAmzTargetEnumBackupOnPremisesV20210101CreateGateway,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGatewayOutput != nil {
        // handle response
    }
}
```

## DeleteGateway

Deletes a backup gateway.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteGateway(ctx, operations.DeleteGatewayRequest{
        DeleteGatewayInput: shared.DeleteGatewayInput{
            GatewayArn: "quo",
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.DeleteGatewayXAmzTargetEnumBackupOnPremisesV20210101DeleteGateway,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGatewayOutput != nil {
        // handle response
    }
}
```

## DeleteHypervisor

Deletes a hypervisor.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteHypervisor(ctx, operations.DeleteHypervisorRequest{
        DeleteHypervisorInput: shared.DeleteHypervisorInput{
            HypervisorArn: "esse",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.DeleteHypervisorXAmzTargetEnumBackupOnPremisesV20210101DeleteHypervisor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteHypervisorOutput != nil {
        // handle response
    }
}
```

## DisassociateGatewayFromServer

Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateGatewayFromServer(ctx, operations.DisassociateGatewayFromServerRequest{
        DisassociateGatewayFromServerInput: shared.DisassociateGatewayFromServerInput{
            GatewayArn: "fugit",
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.DisassociateGatewayFromServerXAmzTargetEnumBackupOnPremisesV20210101DisassociateGatewayFromServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateGatewayFromServerOutput != nil {
        // handle response
    }
}
```

## GetBandwidthRateLimitSchedule

Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetBandwidthRateLimitSchedule(ctx, operations.GetBandwidthRateLimitScheduleRequest{
        GetBandwidthRateLimitScheduleInput: shared.GetBandwidthRateLimitScheduleInput{
            GatewayArn: "modi",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.GetBandwidthRateLimitScheduleXAmzTargetEnumBackupOnPremisesV20210101GetBandwidthRateLimitSchedule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBandwidthRateLimitScheduleOutput != nil {
        // handle response
    }
}
```

## GetGateway

By providing the ARN (Amazon Resource Name), this API returns the gateway.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetGateway(ctx, operations.GetGatewayRequest{
        GetGatewayInput: shared.GetGatewayInput{
            GatewayArn: "perferendis",
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.GetGatewayXAmzTargetEnumBackupOnPremisesV20210101GetGateway,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGatewayOutput != nil {
        // handle response
    }
}
```

## GetHypervisor

This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetHypervisor(ctx, operations.GetHypervisorRequest{
        GetHypervisorInput: shared.GetHypervisorInput{
            HypervisorArn: "hic",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.GetHypervisorXAmzTargetEnumBackupOnPremisesV20210101GetHypervisor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHypervisorOutput != nil {
        // handle response
    }
}
```

## GetHypervisorPropertyMappings

This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetHypervisorPropertyMappings(ctx, operations.GetHypervisorPropertyMappingsRequest{
        GetHypervisorPropertyMappingsInput: shared.GetHypervisorPropertyMappingsInput{
            HypervisorArn: "quidem",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.GetHypervisorPropertyMappingsXAmzTargetEnumBackupOnPremisesV20210101GetHypervisorPropertyMappings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHypervisorPropertyMappingsOutput != nil {
        // handle response
    }
}
```

## GetVirtualMachine

By providing the ARN (Amazon Resource Name), this API returns the virtual machine.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetVirtualMachine(ctx, operations.GetVirtualMachineRequest{
        GetVirtualMachineInput: shared.GetVirtualMachineInput{
            ResourceArn: "dolorem",
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.GetVirtualMachineXAmzTargetEnumBackupOnPremisesV20210101GetVirtualMachine,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVirtualMachineOutput != nil {
        // handle response
    }
}
```

## ImportHypervisorConfiguration

Connect to a hypervisor by importing its configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ImportHypervisorConfiguration(ctx, operations.ImportHypervisorConfigurationRequest{
        ImportHypervisorConfigurationInput: shared.ImportHypervisorConfigurationInput{
            Host: "excepturi",
            KmsKeyArn: sdk.String("accusantium"),
            Name: "Cecilia Yundt MD",
            Password: sdk.String("dolorem"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "consequuntur",
                    Value: "repellat",
                },
                shared.Tag{
                    Key: "mollitia",
                    Value: "occaecati",
                },
                shared.Tag{
                    Key: "numquam",
                    Value: "commodi",
                },
            },
            Username: sdk.String("quam"),
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.ImportHypervisorConfigurationXAmzTargetEnumBackupOnPremisesV20210101ImportHypervisorConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportHypervisorConfigurationOutput != nil {
        // handle response
    }
}
```

## ListGateways

Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListGateways(ctx, operations.ListGatewaysRequest{
        ListGatewaysInput: shared.ListGatewaysInput{
            MaxResults: sdk.Int64(656330),
            NextToken: sdk.String("enim"),
        },
        MaxResults: sdk.String("odit"),
        NextToken: sdk.String("quo"),
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.ListGatewaysXAmzTargetEnumBackupOnPremisesV20210101ListGateways,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGatewaysOutput != nil {
        // handle response
    }
}
```

## ListHypervisors

Lists your hypervisors.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListHypervisors(ctx, operations.ListHypervisorsRequest{
        ListHypervisorsInput: shared.ListHypervisorsInput{
            MaxResults: sdk.Int64(622846),
            NextToken: sdk.String("temporibus"),
        },
        MaxResults: sdk.String("laborum"),
        NextToken: sdk.String("quasi"),
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.ListHypervisorsXAmzTargetEnumBackupOnPremisesV20210101ListHypervisors,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHypervisorsOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags applied to the resource identified by its Amazon Resource Name (ARN).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceInput: shared.ListTagsForResourceInput{
            ResourceArn: "omnis",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumBackupOnPremisesV20210101ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## ListVirtualMachines

Lists your virtual machines.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListVirtualMachines(ctx, operations.ListVirtualMachinesRequest{
        ListVirtualMachinesInput: shared.ListVirtualMachinesInput{
            HypervisorArn: sdk.String("dicta"),
            MaxResults: sdk.Int64(359444),
            NextToken: sdk.String("dolore"),
        },
        MaxResults: sdk.String("iusto"),
        NextToken: sdk.String("dicta"),
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.ListVirtualMachinesXAmzTargetEnumBackupOnPremisesV20210101ListVirtualMachines,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVirtualMachinesOutput != nil {
        // handle response
    }
}
```

## PutBandwidthRateLimitSchedule

This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutBandwidthRateLimitSchedule(ctx, operations.PutBandwidthRateLimitScheduleRequest{
        PutBandwidthRateLimitScheduleInput: shared.PutBandwidthRateLimitScheduleInput{
            BandwidthRateLimitIntervals: []shared.BandwidthRateLimitInterval{
                shared.BandwidthRateLimitInterval{
                    AverageUploadRateLimitInBitsPerSec: sdk.Int64(565189),
                    DaysOfWeek: []int64{
                        865103,
                        265389,
                        508969,
                    },
                    EndHourOfDay: 523248,
                    EndMinuteOfHour: 916723,
                    StartHourOfDay: 93940,
                    StartMinuteOfHour: 921158,
                },
                shared.BandwidthRateLimitInterval{
                    AverageUploadRateLimitInBitsPerSec: sdk.Int64(575947),
                    DaysOfWeek: []int64{
                        929297,
                    },
                    EndHourOfDay: 277718,
                    EndMinuteOfHour: 318569,
                    StartHourOfDay: 9356,
                    StartMinuteOfHour: 667411,
                },
                shared.BandwidthRateLimitInterval{
                    AverageUploadRateLimitInBitsPerSec: sdk.Int64(842342),
                    DaysOfWeek: []int64{
                        647174,
                    },
                    EndHourOfDay: 716327,
                    EndMinuteOfHour: 841386,
                    StartHourOfDay: 289406,
                    StartMinuteOfHour: 264730,
                },
            },
            GatewayArn: "qui",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.PutBandwidthRateLimitScheduleXAmzTargetEnumBackupOnPremisesV20210101PutBandwidthRateLimitSchedule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutBandwidthRateLimitScheduleOutput != nil {
        // handle response
    }
}
```

## PutHypervisorPropertyMappings

This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutHypervisorPropertyMappings(ctx, operations.PutHypervisorPropertyMappingsRequest{
        PutHypervisorPropertyMappingsInput: shared.PutHypervisorPropertyMappingsInput{
            HypervisorArn: "alias",
            IamRoleArn: "fugit",
            VmwareToAwsTagMappings: []shared.VmwareToAwsTagMapping{
                shared.VmwareToAwsTagMapping{
                    AwsTagKey: "excepturi",
                    AwsTagValue: "tempora",
                    VmwareCategory: "facilis",
                    VmwareTagName: "tempore",
                },
                shared.VmwareToAwsTagMapping{
                    AwsTagKey: "labore",
                    AwsTagValue: "delectus",
                    VmwareCategory: "eum",
                    VmwareTagName: "non",
                },
                shared.VmwareToAwsTagMapping{
                    AwsTagKey: "eligendi",
                    AwsTagValue: "sint",
                    VmwareCategory: "aliquid",
                    VmwareTagName: "provident",
                },
            },
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.PutHypervisorPropertyMappingsXAmzTargetEnumBackupOnPremisesV20210101PutHypervisorPropertyMappings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutHypervisorPropertyMappingsOutput != nil {
        // handle response
    }
}
```

## PutMaintenanceStartTime

Set the maintenance start time for a gateway.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutMaintenanceStartTime(ctx, operations.PutMaintenanceStartTimeRequest{
        PutMaintenanceStartTimeInput: shared.PutMaintenanceStartTimeInput{
            DayOfMonth: sdk.Int64(447125),
            DayOfWeek: sdk.Int64(449198),
            GatewayArn: "illum",
            HourOfDay: 978571,
            MinuteOfHour: 699479,
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.PutMaintenanceStartTimeXAmzTargetEnumBackupOnPremisesV20210101PutMaintenanceStartTime,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutMaintenanceStartTimeOutput != nil {
        // handle response
    }
}
```

## StartVirtualMachinesMetadataSync

This action sends a request to sync metadata across the specified virtual machines.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartVirtualMachinesMetadataSync(ctx, operations.StartVirtualMachinesMetadataSyncRequest{
        StartVirtualMachinesMetadataSyncInput: shared.StartVirtualMachinesMetadataSyncInput{
            HypervisorArn: "accusamus",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.StartVirtualMachinesMetadataSyncXAmzTargetEnumBackupOnPremisesV20210101StartVirtualMachinesMetadataSync,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartVirtualMachinesMetadataSyncOutput != nil {
        // handle response
    }
}
```

## TagResource

Tag the resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceInput: shared.TagResourceInput{
            ResourceARN: "nam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "blanditiis",
                    Value: "deleniti",
                },
                shared.Tag{
                    Key: "sapiente",
                    Value: "amet",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "nisi",
                },
            },
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumBackupOnPremisesV20210101TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceOutput != nil {
        // handle response
    }
}
```

## TestHypervisorConfiguration

Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TestHypervisorConfiguration(ctx, operations.TestHypervisorConfigurationRequest{
        TestHypervisorConfigurationInput: shared.TestHypervisorConfigurationInput{
            GatewayArn: "distinctio",
            Host: "id",
            Password: sdk.String("labore"),
            Username: sdk.String("labore"),
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.TestHypervisorConfigurationXAmzTargetEnumBackupOnPremisesV20210101TestHypervisorConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestHypervisorConfigurationOutput != nil {
        // handle response
    }
}
```

## UntagResource

Removes tags from the resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceInput: shared.UntagResourceInput{
            ResourceARN: "magnam",
            TagKeys: []string{
                "excepturi",
            },
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumBackupOnPremisesV20210101UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceOutput != nil {
        // handle response
    }
}
```

## UpdateGatewayInformation

Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateGatewayInformation(ctx, operations.UpdateGatewayInformationRequest{
        UpdateGatewayInformationInput: shared.UpdateGatewayInformationInput{
            GatewayArn: "mollitia",
            GatewayDisplayName: sdk.String("ad"),
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.UpdateGatewayInformationXAmzTargetEnumBackupOnPremisesV20210101UpdateGatewayInformation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGatewayInformationOutput != nil {
        // handle response
    }
}
```

## UpdateGatewaySoftwareNow

<p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateGatewaySoftwareNow(ctx, operations.UpdateGatewaySoftwareNowRequest{
        UpdateGatewaySoftwareNowInput: shared.UpdateGatewaySoftwareNowInput{
            GatewayArn: "doloribus",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.UpdateGatewaySoftwareNowXAmzTargetEnumBackupOnPremisesV20210101UpdateGatewaySoftwareNow,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGatewaySoftwareNowOutput != nil {
        // handle response
    }
}
```

## UpdateHypervisor

Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateHypervisor(ctx, operations.UpdateHypervisorRequest{
        UpdateHypervisorInput: shared.UpdateHypervisorInput{
            Host: sdk.String("architecto"),
            HypervisorArn: "repudiandae",
            LogGroupArn: sdk.String("ullam"),
            Name: sdk.String("Jessie Zulauf"),
            Password: sdk.String("saepe"),
            Username: sdk.String("pariatur"),
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.UpdateHypervisorXAmzTargetEnumBackupOnPremisesV20210101UpdateHypervisor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateHypervisorOutput != nil {
        // handle response
    }
}
```
