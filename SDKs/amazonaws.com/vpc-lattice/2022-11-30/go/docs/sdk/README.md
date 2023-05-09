# SDK

## Overview

Amazon VPC Lattice is a fully managed application networking service that you use to connect, secure, and monitor all of your services across multiple accounts and virtual private clouds (VPCs). Amazon VPC Lattice interconnects your microservices and legacy services within a logical boundary, so that you can discover and manage them more efficiently. For more information, see the <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/">Amazon VPC Lattice User Guide</a> 

Amazon Web Services documentation
<https://docs.aws.amazon.com/vpc-lattice/>
### Available Operations

* [BatchUpdateRule](#batchupdaterule) - Updates the listener rules in a batch. You can use this operation to change the priority of listener rules. This can be useful when bulk updating or swapping rule priority. 
* [CreateAccessLogSubscription](#createaccesslogsubscription) - Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner will only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html">Access logs</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [CreateListener](#createlistener) - Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html">Listeners</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [CreateRule](#createrule) - Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [CreateService](#createservice) - <p>Creates a service. A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html">Services</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [CreateServiceNetwork](#createservicenetwork) - <p>Creates a service network. A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html">Service networks</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [CreateServiceNetworkServiceAssociation](#createservicenetworkserviceassociation) - <p>Associates a service with a service network.</p> <p>You can't use this operation if the service and service network are already associated or if there is a disassociation or deletion in progress. If the association fails, you can retry the operation by deleting the association and recreating it.</p> <p>You cannot associate a service and service network that are shared with a caller. The caller must own either the service or the service network.</p> <p>As a result of this operation, the association is created in the service network account and the association owner account.</p>
* [CreateServiceNetworkVpcAssociation](#createservicenetworkvpcassociation) - <p>Associates a VPC with a service network. When you associate a VPC with the service network, it enables all the resources within that VPC to be clients and communicate with other services in the service network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-vpc-associations">Manage VPC associations</a> in the <i>Amazon VPC Lattice User Guide</i>.</p> <p>You can't use this operation if there is a disassociation in progress. If the association fails, retry by deleting the association and recreating it.</p> <p>As a result of this operation, the association gets created in the service network account and the VPC owner account.</p> <p>If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.</p>
* [CreateTargetGroup](#createtargetgroup) - <p>Creates a target group. A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html">Target groups</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [DeleteAccessLogSubscription](#deleteaccesslogsubscription) - Deletes the specified access log subscription.
* [DeleteAuthPolicy](#deleteauthpolicy) - Deletes the specified auth policy. If an auth is set to <code>AWS_IAM</code> and the auth policy is deleted, all requests will be denied by default. If you are trying to remove the auth policy completely, you must set the auth_type to <code>NONE</code>. If auth is enabled on the resource, but no auth policy is set, all requests will be denied.
* [DeleteListener](#deletelistener) - Deletes the specified listener.
* [DeleteResourcePolicy](#deleteresourcepolicy) - Deletes the specified resource policy.
* [DeleteRule](#deleterule) - <p>Deletes a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. You can delete additional listener rules, but you cannot delete the default rule.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [DeleteService](#deleteservice) - Deletes a service. A service can't be deleted if it's associated with a service network. If you delete a service, all resources related to the service, such as the resource policy, auth policy, listeners, listener rules, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html#delete-service">Delete a service</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [DeleteServiceNetwork](#deleteservicenetwork) - Deletes a service network. You can only delete the service network if there is no service or VPC associated with it. If you delete a service network, all resources related to the service network, such as the resource policy, auth policy, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#delete-service-network">Delete a service network</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [DeleteServiceNetworkServiceAssociation](#deleteservicenetworkserviceassociation) - Deletes the association between a specified service and the specific service network. This request will fail if an association is still in progress.
* [DeleteServiceNetworkVpcAssociation](#deleteservicenetworkvpcassociation) - Disassociates the VPC from the service network. You can't disassociate the VPC if there is a create or update association in progress.
* [DeleteTargetGroup](#deletetargetgroup) - Deletes a target group. You can't delete a target group if it is used in a listener rule or if the target group creation is in progress.
* [DeregisterTargets](#deregistertargets) - Deregisters the specified targets from the specified target group.
* [GetAccessLogSubscription](#getaccesslogsubscription) - Retrieves information about the specified access log subscription.
* [GetAuthPolicy](#getauthpolicy) - Retrieves information about the auth policy for the specified service or service network.
* [GetListener](#getlistener) - Retrieves information about the specified listener for the specified service.
* [GetResourcePolicy](#getresourcepolicy) - Retrieves information about the resource policy. The resource policy is an IAM policy created on behalf of the resource owner when they share a resource.
* [GetRule](#getrule) - Retrieves information about listener rules. You can also retrieve information about the default listener rule. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [GetService](#getservice) - Retrieves information about the specified service.
* [GetServiceNetwork](#getservicenetwork) - Retrieves information about the specified service network.
* [GetServiceNetworkServiceAssociation](#getservicenetworkserviceassociation) - Retrieves information about the specified association between a service network and a service.
* [GetServiceNetworkVpcAssociation](#getservicenetworkvpcassociation) - Retrieves information about the association between a service network and a VPC.
* [GetTargetGroup](#gettargetgroup) - Retrieves information about the specified target group.
* [ListAccessLogSubscriptions](#listaccesslogsubscriptions) - Lists all access log subscriptions for the specified service network or service.
* [ListListeners](#listlisteners) - Lists the listeners for the specified service.
* [ListRules](#listrules) - Lists the rules for the listener.
* [ListServiceNetworkServiceAssociations](#listservicenetworkserviceassociations) - <p>Lists the associations between the service network and the service. You can filter the list either by service or service network. You must provide either the service network identifier or the service identifier.</p> <p>Every association in Amazon VPC Lattice is given a unique Amazon Resource Name (ARN), such as when a service network is associated with a VPC or when a service is associated with a service network. If the association is for a resource that is shared with another account, the association will include the local account ID as the prefix in the ARN for each account the resource is shared with.</p>
* [ListServiceNetworkVpcAssociations](#listservicenetworkvpcassociations) - Lists the service network and VPC associations. You can filter the list either by VPC or service network. You must provide either the service network identifier or the VPC identifier.
* [ListServiceNetworks](#listservicenetworks) - Lists the service networks owned by the caller account or shared with the caller account. Also includes the account ID in the ARN to show which account owns the service network.
* [ListServices](#listservices) - Lists the services owned by the caller account or shared with the caller account.
* [ListTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [ListTargetGroups](#listtargetgroups) - Lists your target groups. You can narrow your search by using the filters below in your request.
* [ListTargets](#listtargets) - Lists the targets for the target group. By default, all targets are included. You can use this API to check the health status of targets. You can also ﬁlter the results by target. 
* [PutAuthPolicy](#putauthpolicy) - Creates or updates the auth policy. The policy string in JSON must not contain newlines or blank lines.
* [PutResourcePolicy](#putresourcepolicy) - Attaches a resource-based permission policy to a service or service network. The policy must contain the same actions and condition statements as the Amazon Web Services Resource Access Manager permission for sharing services and service networks.
* [RegisterTargets](#registertargets) - Registers the targets with the target group. If it's a Lambda target, you can only have one target in a target group.
* [TagResource](#tagresource) - Adds the specified tags to the specified resource.
* [UntagResource](#untagresource) - Removes the specified tags from the specified resource.
* [UpdateAccessLogSubscription](#updateaccesslogsubscription) - Updates the specified access log subscription.
* [UpdateListener](#updatelistener) - Updates the specified listener for the specified service.
* [UpdateRule](#updaterule) - Updates a rule for the listener. You can't modify a default listener rule. To modify a default listener rule, use <code>UpdateListener</code>.
* [UpdateService](#updateservice) - Updates the specified service.
* [UpdateServiceNetwork](#updateservicenetwork) - Updates the specified service network.
* [UpdateServiceNetworkVpcAssociation](#updateservicenetworkvpcassociation) - Updates the service network and VPC association. If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.
* [UpdateTargetGroup](#updatetargetgroup) - Updates the specified target group.

## BatchUpdateRule

Updates the listener rules in a batch. You can use this operation to change the priority of listener rules. This can be useful when bulk updating or swapping rule priority. 

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
    res, err := s.SDK.BatchUpdateRule(ctx, operations.BatchUpdateRuleRequest{
        RequestBody: operations.BatchUpdateRuleRequestBody{
            Rules: []shared.RuleUpdate{
                shared.RuleUpdate{
                    Action: &shared.RuleAction{
                        FixedResponse: &shared.FixedResponseAction{
                            StatusCode: 196582,
                        },
                        Forward: &shared.ForwardAction{
                            TargetGroups: []shared.WeightedTargetGroup{
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "ipsam",
                                    Weight: sdk.Int64(662527),
                                },
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "possimus",
                                    Weight: sdk.Int64(13571),
                                },
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "quasi",
                                    Weight: sdk.Int64(622846),
                                },
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "temporibus",
                                    Weight: sdk.Int64(673660),
                                },
                            },
                        },
                    },
                    Match: &shared.RuleMatch{
                        HTTPMatch: &shared.HTTPMatch{
                            HeaderMatches: []shared.HeaderMatch{
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("reiciendis"),
                                        Exact: sdk.String("voluptatibus"),
                                        Prefix: sdk.String("vero"),
                                    },
                                    Name: "Miss Irma Wolff",
                                },
                            },
                            Method: sdk.String("cum"),
                            PathMatch: &shared.PathMatch{
                                CaseSensitive: sdk.Bool(false),
                                Match: shared.PathMatchType{
                                    Exact: sdk.String("perferendis"),
                                    Prefix: sdk.String("doloremque"),
                                },
                            },
                        },
                    },
                    Priority: sdk.Int64(441711),
                    RuleIdentifier: "ut",
                },
                shared.RuleUpdate{
                    Action: &shared.RuleAction{
                        FixedResponse: &shared.FixedResponseAction{
                            StatusCode: 979587,
                        },
                        Forward: &shared.ForwardAction{
                            TargetGroups: []shared.WeightedTargetGroup{
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "corporis",
                                    Weight: sdk.Int64(296140),
                                },
                            },
                        },
                    },
                    Match: &shared.RuleMatch{
                        HTTPMatch: &shared.HTTPMatch{
                            HeaderMatches: []shared.HeaderMatch{
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("dicta"),
                                        Exact: sdk.String("harum"),
                                        Prefix: sdk.String("enim"),
                                    },
                                    Name: "Mrs. Leslie VonRueden",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("molestias"),
                                        Exact: sdk.String("excepturi"),
                                        Prefix: sdk.String("pariatur"),
                                    },
                                    Name: "Irma Ledner DVM",
                                },
                            },
                            Method: sdk.String("sint"),
                            PathMatch: &shared.PathMatch{
                                CaseSensitive: sdk.Bool(false),
                                Match: shared.PathMatchType{
                                    Exact: sdk.String("veritatis"),
                                    Prefix: sdk.String("itaque"),
                                },
                            },
                        },
                    },
                    Priority: sdk.Int64(277718),
                    RuleIdentifier: "enim",
                },
                shared.RuleUpdate{
                    Action: &shared.RuleAction{
                        FixedResponse: &shared.FixedResponseAction{
                            StatusCode: 9356,
                        },
                        Forward: &shared.ForwardAction{
                            TargetGroups: []shared.WeightedTargetGroup{
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "quibusdam",
                                    Weight: sdk.Int64(131797),
                                },
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "deserunt",
                                    Weight: sdk.Int64(716327),
                                },
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "quibusdam",
                                    Weight: sdk.Int64(289406),
                                },
                            },
                        },
                    },
                    Match: &shared.RuleMatch{
                        HTTPMatch: &shared.HTTPMatch{
                            HeaderMatches: []shared.HeaderMatch{
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("qui"),
                                        Exact: sdk.String("aliquid"),
                                        Prefix: sdk.String("cupiditate"),
                                    },
                                    Name: "Christopher Cummerata",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("alias"),
                                        Exact: sdk.String("fugit"),
                                        Prefix: sdk.String("dolorum"),
                                    },
                                    Name: "Eddie Prosacco",
                                },
                            },
                            Method: sdk.String("delectus"),
                            PathMatch: &shared.PathMatch{
                                CaseSensitive: sdk.Bool(false),
                                Match: shared.PathMatchType{
                                    Exact: sdk.String("eum"),
                                    Prefix: sdk.String("non"),
                                },
                            },
                        },
                    },
                    Priority: sdk.Int64(756107),
                    RuleIdentifier: "sint",
                },
                shared.RuleUpdate{
                    Action: &shared.RuleAction{
                        FixedResponse: &shared.FixedResponseAction{
                            StatusCode: 396098,
                        },
                        Forward: &shared.ForwardAction{
                            TargetGroups: []shared.WeightedTargetGroup{
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "necessitatibus",
                                    Weight: sdk.Int64(572252),
                                },
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "officia",
                                    Weight: sdk.Int64(223081),
                                },
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "debitis",
                                    Weight: sdk.Int64(952749),
                                },
                            },
                        },
                    },
                    Match: &shared.RuleMatch{
                        HTTPMatch: &shared.HTTPMatch{
                            HeaderMatches: []shared.HeaderMatch{
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("in"),
                                        Exact: sdk.String("in"),
                                        Prefix: sdk.String("illum"),
                                    },
                                    Name: "Jean Buckridge",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("facere"),
                                        Exact: sdk.String("ea"),
                                        Prefix: sdk.String("aliquid"),
                                    },
                                    Name: "Tomas Friesen",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("accusamus"),
                                        Exact: sdk.String("delectus"),
                                        Prefix: sdk.String("quidem"),
                                    },
                                    Name: "Marco Olson",
                                },
                            },
                            Method: sdk.String("sapiente"),
                            PathMatch: &shared.PathMatch{
                                CaseSensitive: sdk.Bool(false),
                                Match: shared.PathMatchType{
                                    Exact: sdk.String("amet"),
                                    Prefix: sdk.String("deserunt"),
                                },
                            },
                        },
                    },
                    Priority: sdk.Int64(394869),
                    RuleIdentifier: "vel",
                },
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        ListenerIdentifier: "id",
        ServiceIdentifier: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateRuleResponse != nil {
        // handle response
    }
}
```

## CreateAccessLogSubscription

Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner will only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html">Access logs</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAccessLogSubscription(ctx, operations.CreateAccessLogSubscriptionRequest{
        RequestBody: operations.CreateAccessLogSubscriptionRequestBody{
            ClientToken: sdk.String("labore"),
            DestinationArn: "suscipit",
            ResourceIdentifier: "natus",
            Tags: map[string]string{
                "eum": "vero",
                "aspernatur": "architecto",
                "magnam": "et",
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccessLogSubscriptionResponse != nil {
        // handle response
    }
}
```

## CreateListener

Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html">Listeners</a> in the <i>Amazon VPC Lattice User Guide</i>.

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
    res, err := s.SDK.CreateListener(ctx, operations.CreateListenerRequest{
        RequestBody: operations.CreateListenerRequestBody{
            ClientToken: sdk.String("reiciendis"),
            DefaultAction: operations.CreateListenerRequestBodyDefaultAction{
                FixedResponse: &shared.FixedResponseAction{
                    StatusCode: 652103,
                },
                Forward: &shared.ForwardAction{
                    TargetGroups: []shared.WeightedTargetGroup{
                        shared.WeightedTargetGroup{
                            TargetGroupIdentifier: "eum",
                            Weight: sdk.Int64(221262),
                        },
                        shared.WeightedTargetGroup{
                            TargetGroupIdentifier: "necessitatibus",
                            Weight: sdk.Int64(141264),
                        },
                    },
                },
            },
            Name: "Joyce Kertzmann",
            Port: sdk.Int64(260341),
            Protocol: operations.CreateListenerRequestBodyProtocolEnumHTTPS,
            Tags: map[string]string{
                "facilis": "in",
                "architecto": "architecto",
                "repudiandae": "ullam",
            },
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        ServiceIdentifier: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateListenerResponse != nil {
        // handle response
    }
}
```

## CreateRule

Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.

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
    res, err := s.SDK.CreateRule(ctx, operations.CreateRuleRequest{
        RequestBody: operations.CreateRuleRequestBody{
            Action: operations.CreateRuleRequestBodyAction{
                FixedResponse: &shared.FixedResponseAction{
                    StatusCode: 162493,
                },
                Forward: &shared.ForwardAction{
                    TargetGroups: []shared.WeightedTargetGroup{
                        shared.WeightedTargetGroup{
                            TargetGroupIdentifier: "natus",
                            Weight: sdk.Int64(166847),
                        },
                        shared.WeightedTargetGroup{
                            TargetGroupIdentifier: "sunt",
                            Weight: sdk.Int64(779051),
                        },
                        shared.WeightedTargetGroup{
                            TargetGroupIdentifier: "illum",
                            Weight: sdk.Int64(864934),
                        },
                    },
                },
            },
            ClientToken: sdk.String("maxime"),
            Match: operations.CreateRuleRequestBodyMatch{
                HTTPMatch: &shared.HTTPMatch{
                    HeaderMatches: []shared.HeaderMatch{
                        shared.HeaderMatch{
                            CaseSensitive: sdk.Bool(false),
                            Match: shared.HeaderMatchType{
                                Contains: sdk.String("excepturi"),
                                Exact: sdk.String("odit"),
                                Prefix: sdk.String("ea"),
                            },
                            Name: "Virginia Wunsch",
                        },
                        shared.HeaderMatch{
                            CaseSensitive: sdk.Bool(false),
                            Match: shared.HeaderMatchType{
                                Contains: sdk.String("voluptate"),
                                Exact: sdk.String("autem"),
                                Prefix: sdk.String("nam"),
                            },
                            Name: "Meredith Hickle PhD",
                        },
                    },
                    Method: sdk.String("amet"),
                    PathMatch: &shared.PathMatch{
                        CaseSensitive: sdk.Bool(false),
                        Match: shared.PathMatchType{
                            Exact: sdk.String("aut"),
                            Prefix: sdk.String("cumque"),
                        },
                    },
                },
            },
            Name: "Mindy Renner",
            Priority: 339404,
            Tags: map[string]string{
                "dignissimos": "eaque",
                "quis": "nesciunt",
                "eos": "perferendis",
            },
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("hic"),
        ListenerIdentifier: "recusandae",
        ServiceIdentifier: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRuleResponse != nil {
        // handle response
    }
}
```

## CreateService

<p>Creates a service. A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html">Services</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateService(ctx, operations.CreateServiceRequest{
        RequestBody: operations.CreateServiceRequestBody{
            AuthType: operations.CreateServiceRequestBodyAuthTypeEnumAwsIam.ToPointer(),
            CertificateArn: sdk.String("perspiciatis"),
            ClientToken: sdk.String("voluptatem"),
            CustomDomainName: sdk.String("porro"),
            Name: "Ms. Vickie Mraz",
            Tags: map[string]string{
                "asperiores": "earum",
            },
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServiceResponse != nil {
        // handle response
    }
}
```

## CreateServiceNetwork

<p>Creates a service network. A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html">Service networks</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateServiceNetwork(ctx, operations.CreateServiceNetworkRequest{
        RequestBody: operations.CreateServiceNetworkRequestBody{
            AuthType: operations.CreateServiceNetworkRequestBodyAuthTypeEnumAwsIam.ToPointer(),
            ClientToken: sdk.String("delectus"),
            Name: "Billie Jacobi",
            Tags: map[string]string{
                "qui": "ipsum",
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServiceNetworkResponse != nil {
        // handle response
    }
}
```

## CreateServiceNetworkServiceAssociation

<p>Associates a service with a service network.</p> <p>You can't use this operation if the service and service network are already associated or if there is a disassociation or deletion in progress. If the association fails, you can retry the operation by deleting the association and recreating it.</p> <p>You cannot associate a service and service network that are shared with a caller. The caller must own either the service or the service network.</p> <p>As a result of this operation, the association is created in the service network account and the association owner account.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateServiceNetworkServiceAssociation(ctx, operations.CreateServiceNetworkServiceAssociationRequest{
        RequestBody: operations.CreateServiceNetworkServiceAssociationRequestBody{
            ClientToken: sdk.String("dolorum"),
            ServiceIdentifier: "numquam",
            ServiceNetworkIdentifier: "veritatis",
            Tags: map[string]string{
                "ipsa": "iure",
            },
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServiceNetworkServiceAssociationResponse != nil {
        // handle response
    }
}
```

## CreateServiceNetworkVpcAssociation

<p>Associates a VPC with a service network. When you associate a VPC with the service network, it enables all the resources within that VPC to be clients and communicate with other services in the service network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-vpc-associations">Manage VPC associations</a> in the <i>Amazon VPC Lattice User Guide</i>.</p> <p>You can't use this operation if there is a disassociation in progress. If the association fails, retry by deleting the association and recreating it.</p> <p>As a result of this operation, the association gets created in the service network account and the VPC owner account.</p> <p>If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateServiceNetworkVpcAssociation(ctx, operations.CreateServiceNetworkVpcAssociationRequest{
        RequestBody: operations.CreateServiceNetworkVpcAssociationRequestBody{
            ClientToken: sdk.String("eos"),
            SecurityGroupIds: []string{
                "sit",
                "fugiat",
                "ab",
            },
            ServiceNetworkIdentifier: "soluta",
            Tags: map[string]string{
                "iusto": "voluptate",
                "dolorum": "deleniti",
                "omnis": "necessitatibus",
            },
            VpcIdentifier: "distinctio",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServiceNetworkVpcAssociationResponse != nil {
        // handle response
    }
}
```

## CreateTargetGroup

<p>Creates a target group. A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html">Target groups</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>

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
    res, err := s.SDK.CreateTargetGroup(ctx, operations.CreateTargetGroupRequest{
        RequestBody: operations.CreateTargetGroupRequestBody{
            ClientToken: sdk.String("aspernatur"),
            Config: &operations.CreateTargetGroupRequestBodyConfig{
                HealthCheck: &shared.HealthCheckConfig{
                    Enabled: sdk.Bool(false),
                    HealthCheckIntervalSeconds: sdk.Int64(20651),
                    HealthCheckTimeoutSeconds: sdk.Int64(229219),
                    HealthyThresholdCount: sdk.Int64(758379),
                    Matcher: &shared.Matcher{
                        HTTPCode: sdk.String("accusamus"),
                    },
                    Path: sdk.String("ad"),
                    Port: sdk.Int64(904425),
                    Protocol: shared.TargetGroupProtocolEnumHTTP.ToPointer(),
                    ProtocolVersion: shared.HealthCheckProtocolVersionEnumHttp2.ToPointer(),
                    UnhealthyThresholdCount: sdk.Int64(588317),
                },
                IPAddressType: shared.IPAddressTypeEnumIpv4.ToPointer(),
                Port: sdk.Int64(831049),
                Protocol: shared.TargetGroupProtocolEnumHTTPS.ToPointer(),
                ProtocolVersion: shared.TargetGroupProtocolVersionEnumHttp2.ToPointer(),
                VpcIdentifier: sdk.String("alias"),
            },
            Name: "Alex Goodwin",
            Tags: map[string]string{
                "qui": "dolorum",
                "a": "esse",
                "harum": "iusto",
                "ipsum": "quisquam",
            },
            Type: operations.CreateTargetGroupRequestBodyTypeEnumAlb,
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTargetGroupResponse != nil {
        // handle response
    }
}
```

## DeleteAccessLogSubscription

Deletes the specified access log subscription.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAccessLogSubscription(ctx, operations.DeleteAccessLogSubscriptionRequest{
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("vel"),
        AccessLogSubscriptionIdentifier: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAccessLogSubscriptionResponse != nil {
        // handle response
    }
}
```

## DeleteAuthPolicy

Deletes the specified auth policy. If an auth is set to <code>AWS_IAM</code> and the auth policy is deleted, all requests will be denied by default. If you are trying to remove the auth policy completely, you must set the auth_type to <code>NONE</code>. If auth is enabled on the resource, but no auth policy is set, all requests will be denied.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAuthPolicy(ctx, operations.DeleteAuthPolicyRequest{
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        ResourceIdentifier: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAuthPolicyResponse != nil {
        // handle response
    }
}
```

## DeleteListener

Deletes the specified listener.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteListener(ctx, operations.DeleteListenerRequest{
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        ListenerIdentifier: "dolores",
        ServiceIdentifier: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteListenerResponse != nil {
        // handle response
    }
}
```

## DeleteResourcePolicy

Deletes the specified resource policy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteResourcePolicy(ctx, operations.DeleteResourcePolicyRequest{
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("neque"),
        ResourceArn: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcePolicyResponse != nil {
        // handle response
    }
}
```

## DeleteRule

<p>Deletes a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. You can delete additional listener rules, but you cannot delete the default rule.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRule(ctx, operations.DeleteRuleRequest{
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        ListenerIdentifier: "cumque",
        RuleIdentifier: "soluta",
        ServiceIdentifier: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRuleResponse != nil {
        // handle response
    }
}
```

## DeleteService

Deletes a service. A service can't be deleted if it's associated with a service network. If you delete a service, all resources related to the service, such as the resource policy, auth policy, listeners, listener rules, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html#delete-service">Delete a service</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteService(ctx, operations.DeleteServiceRequest{
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("tempore"),
        ServiceIdentifier: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServiceResponse != nil {
        // handle response
    }
}
```

## DeleteServiceNetwork

Deletes a service network. You can only delete the service network if there is no service or VPC associated with it. If you delete a service network, all resources related to the service network, such as the resource policy, auth policy, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#delete-service-network">Delete a service network</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteServiceNetwork(ctx, operations.DeleteServiceNetworkRequest{
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        ServiceNetworkIdentifier: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServiceNetworkResponse != nil {
        // handle response
    }
}
```

## DeleteServiceNetworkServiceAssociation

Deletes the association between a specified service and the specific service network. This request will fail if an association is still in progress.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteServiceNetworkServiceAssociation(ctx, operations.DeleteServiceNetworkServiceAssociationRequest{
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        ServiceNetworkServiceAssociationIdentifier: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServiceNetworkServiceAssociationResponse != nil {
        // handle response
    }
}
```

## DeleteServiceNetworkVpcAssociation

Disassociates the VPC from the service network. You can't disassociate the VPC if there is a create or update association in progress.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteServiceNetworkVpcAssociation(ctx, operations.DeleteServiceNetworkVpcAssociationRequest{
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        ServiceNetworkVpcAssociationIdentifier: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServiceNetworkVpcAssociationResponse != nil {
        // handle response
    }
}
```

## DeleteTargetGroup

Deletes a target group. You can't delete a target group if it is used in a listener rule or if the target group creation is in progress.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTargetGroup(ctx, operations.DeleteTargetGroupRequest{
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        TargetGroupIdentifier: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTargetGroupResponse != nil {
        // handle response
    }
}
```

## DeregisterTargets

Deregisters the specified targets from the specified target group.

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
    res, err := s.SDK.DeregisterTargets(ctx, operations.DeregisterTargetsRequest{
        RequestBody: operations.DeregisterTargetsRequestBody{
            Targets: []shared.Target{
                shared.Target{
                    ID: "3ef7fbc7-abd7-44dd-b9c0-f5d2cff7c70a",
                    Port: sdk.Int64(269479),
                },
                shared.Target{
                    ID: "5626d436-813f-416d-9f5f-ce6c556146c3",
                    Port: sdk.Int64(926213),
                },
            },
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("aut"),
        TargetGroupIdentifier: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterTargetsResponse != nil {
        // handle response
    }
}
```

## GetAccessLogSubscription

Retrieves information about the specified access log subscription.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAccessLogSubscription(ctx, operations.GetAccessLogSubscriptionRequest{
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("et"),
        AccessLogSubscriptionIdentifier: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccessLogSubscriptionResponse != nil {
        // handle response
    }
}
```

## GetAuthPolicy

Retrieves information about the auth policy for the specified service or service network.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAuthPolicy(ctx, operations.GetAuthPolicyRequest{
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quas"),
        ResourceIdentifier: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuthPolicyResponse != nil {
        // handle response
    }
}
```

## GetListener

Retrieves information about the specified listener for the specified service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetListener(ctx, operations.GetListenerRequest{
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        ListenerIdentifier: "provident",
        ServiceIdentifier: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetListenerResponse != nil {
        // handle response
    }
}
```

## GetResourcePolicy

Retrieves information about the resource policy. The resource policy is an IAM policy created on behalf of the resource owner when they share a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetResourcePolicy(ctx, operations.GetResourcePolicyRequest{
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("rem"),
        ResourceArn: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcePolicyResponse != nil {
        // handle response
    }
}
```

## GetRule

Retrieves information about listener rules. You can also retrieve information about the default listener rule. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRule(ctx, operations.GetRuleRequest{
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        ListenerIdentifier: "eos",
        RuleIdentifier: "praesentium",
        ServiceIdentifier: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRuleResponse != nil {
        // handle response
    }
}
```

## GetService

Retrieves information about the specified service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetService(ctx, operations.GetServiceRequest{
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("illum"),
        ServiceIdentifier: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceResponse != nil {
        // handle response
    }
}
```

## GetServiceNetwork

Retrieves information about the specified service network.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetServiceNetwork(ctx, operations.GetServiceNetworkRequest{
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        ServiceNetworkIdentifier: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceNetworkResponse != nil {
        // handle response
    }
}
```

## GetServiceNetworkServiceAssociation

Retrieves information about the specified association between a service network and a service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetServiceNetworkServiceAssociation(ctx, operations.GetServiceNetworkServiceAssociationRequest{
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        ServiceNetworkServiceAssociationIdentifier: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceNetworkServiceAssociationResponse != nil {
        // handle response
    }
}
```

## GetServiceNetworkVpcAssociation

Retrieves information about the association between a service network and a VPC.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetServiceNetworkVpcAssociation(ctx, operations.GetServiceNetworkVpcAssociationRequest{
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        ServiceNetworkVpcAssociationIdentifier: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceNetworkVpcAssociationResponse != nil {
        // handle response
    }
}
```

## GetTargetGroup

Retrieves information about the specified target group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTargetGroup(ctx, operations.GetTargetGroupRequest{
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        TargetGroupIdentifier: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTargetGroupResponse != nil {
        // handle response
    }
}
```

## ListAccessLogSubscriptions

Lists all access log subscriptions for the specified service network or service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAccessLogSubscriptions(ctx, operations.ListAccessLogSubscriptionsRequest{
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("fugit"),
        MaxResults: sdk.Int64(681393),
        NextToken: sdk.String("mollitia"),
        ResourceIdentifier: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccessLogSubscriptionsResponse != nil {
        // handle response
    }
}
```

## ListListeners

Lists the listeners for the specified service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListListeners(ctx, operations.ListListenersRequest{
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        MaxResults: sdk.Int64(187131),
        NextToken: sdk.String("explicabo"),
        ServiceIdentifier: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListListenersResponse != nil {
        // handle response
    }
}
```

## ListRules

Lists the rules for the listener.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRules(ctx, operations.ListRulesRequest{
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        ListenerIdentifier: "esse",
        MaxResults: sdk.Int64(800379),
        NextToken: sdk.String("nam"),
        ServiceIdentifier: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRulesResponse != nil {
        // handle response
    }
}
```

## ListServiceNetworkServiceAssociations

<p>Lists the associations between the service network and the service. You can filter the list either by service or service network. You must provide either the service network identifier or the service identifier.</p> <p>Every association in Amazon VPC Lattice is given a unique Amazon Resource Name (ARN), such as when a service network is associated with a VPC or when a service is associated with a service network. If the association is for a resource that is shared with another account, the association will include the local account ID as the prefix in the ARN for each account the resource is shared with.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListServiceNetworkServiceAssociations(ctx, operations.ListServiceNetworkServiceAssociationsRequest{
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("rerum"),
        MaxResults: sdk.Int64(580197),
        NextToken: sdk.String("minima"),
        ServiceIdentifier: sdk.String("distinctio"),
        ServiceNetworkIdentifier: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceNetworkServiceAssociationsResponse != nil {
        // handle response
    }
}
```

## ListServiceNetworkVpcAssociations

Lists the service network and VPC associations. You can filter the list either by VPC or service network. You must provide either the service network identifier or the VPC identifier.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListServiceNetworkVpcAssociations(ctx, operations.ListServiceNetworkVpcAssociationsRequest{
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        MaxResults: sdk.Int64(796392),
        NextToken: sdk.String("quaerat"),
        ServiceNetworkIdentifier: sdk.String("sapiente"),
        VpcIdentifier: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceNetworkVpcAssociationsResponse != nil {
        // handle response
    }
}
```

## ListServiceNetworks

Lists the service networks owned by the caller account or shared with the caller account. Also includes the account ID in the ARN to show which account owns the service network.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListServiceNetworks(ctx, operations.ListServiceNetworksRequest{
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("esse"),
        MaxResults: sdk.Int64(97468),
        NextToken: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceNetworksResponse != nil {
        // handle response
    }
}
```

## ListServices

Lists the services owned by the caller account or shared with the caller account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListServices(ctx, operations.ListServicesRequest{
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        MaxResults: sdk.Int64(815524),
        NextToken: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags for the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("quae"),
        ResourceArn: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTargetGroups

Lists your target groups. You can narrow your search by using the filters below in your request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTargetGroups(ctx, operations.ListTargetGroupsRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        MaxResults: sdk.Int64(306986),
        NextToken: sdk.String("sapiente"),
        TargetGroupType: operations.ListTargetGroupsTargetGroupTypeEnumIP.ToPointer(),
        VpcIdentifier: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTargetGroupsResponse != nil {
        // handle response
    }
}
```

## ListTargets

Lists the targets for the target group. By default, all targets are included. You can use this API to check the health status of targets. You can also ﬁlter the results by target. 

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
    res, err := s.SDK.ListTargets(ctx, operations.ListTargetsRequest{
        RequestBody: operations.ListTargetsRequestBody{
            Targets: []shared.Target{
                shared.Target{
                    ID: "56082d68-ea19-4f1d-9705-1339d08086a1",
                    Port: sdk.Int64(544591),
                },
                shared.Target{
                    ID: "40394c26-071f-493f-9f06-42dac7af515c",
                    Port: sdk.Int64(801836),
                },
            },
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("velit"),
        MaxResults: sdk.Int64(633931),
        NextToken: sdk.String("est"),
        TargetGroupIdentifier: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTargetsResponse != nil {
        // handle response
    }
}
```

## PutAuthPolicy

Creates or updates the auth policy. The policy string in JSON must not contain newlines or blank lines.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutAuthPolicy(ctx, operations.PutAuthPolicyRequest{
        RequestBody: operations.PutAuthPolicyRequestBody{
            Policy: "totam",
        },
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("possimus"),
        ResourceIdentifier: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAuthPolicyResponse != nil {
        // handle response
    }
}
```

## PutResourcePolicy

Attaches a resource-based permission policy to a service or service network. The policy must contain the same actions and condition statements as the Amazon Web Services Resource Access Manager permission for sharing services and service networks.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutResourcePolicy(ctx, operations.PutResourcePolicyRequest{
        RequestBody: operations.PutResourcePolicyRequestBody{
            Policy: "cum",
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        ResourceArn: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResourcePolicyResponse != nil {
        // handle response
    }
}
```

## RegisterTargets

Registers the targets with the target group. If it's a Lambda target, you can only have one target in a target group.

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
    res, err := s.SDK.RegisterTargets(ctx, operations.RegisterTargetsRequest{
        RequestBody: operations.RegisterTargetsRequestBody{
            Targets: []shared.Target{
                shared.Target{
                    ID: "b375ed4f-6fbe-4e41-b333-17fe35b60eb1",
                    Port: sdk.Int64(881721),
                },
            },
        },
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("minima"),
        TargetGroupIdentifier: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterTargetsResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds the specified tags to the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "adipisci": "minus",
                "dolores": "blanditiis",
                "in": "dolore",
            },
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        ResourceArn: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes the specified tags from the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("hic"),
        ResourceArn: "exercitationem",
        TagKeys: []string{
            "sit",
            "rerum",
            "sed",
            "reiciendis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAccessLogSubscription

Updates the specified access log subscription.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAccessLogSubscription(ctx, operations.UpdateAccessLogSubscriptionRequest{
        RequestBody: operations.UpdateAccessLogSubscriptionRequestBody{
            DestinationArn: "explicabo",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolore"),
        AccessLogSubscriptionIdentifier: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAccessLogSubscriptionResponse != nil {
        // handle response
    }
}
```

## UpdateListener

Updates the specified listener for the specified service.

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
    res, err := s.SDK.UpdateListener(ctx, operations.UpdateListenerRequest{
        RequestBody: operations.UpdateListenerRequestBody{
            DefaultAction: operations.UpdateListenerRequestBodyDefaultAction{
                FixedResponse: &shared.FixedResponseAction{
                    StatusCode: 152354,
                },
                Forward: &shared.ForwardAction{
                    TargetGroups: []shared.WeightedTargetGroup{
                        shared.WeightedTargetGroup{
                            TargetGroupIdentifier: "commodi",
                            Weight: sdk.Int64(696077),
                        },
                        shared.WeightedTargetGroup{
                            TargetGroupIdentifier: "explicabo",
                            Weight: sdk.Int64(378326),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        ListenerIdentifier: "perferendis",
        ServiceIdentifier: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateListenerResponse != nil {
        // handle response
    }
}
```

## UpdateRule

Updates a rule for the listener. You can't modify a default listener rule. To modify a default listener rule, use <code>UpdateListener</code>.

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
    res, err := s.SDK.UpdateRule(ctx, operations.UpdateRuleRequest{
        RequestBody: operations.UpdateRuleRequestBody{
            Action: &operations.UpdateRuleRequestBodyAction{
                FixedResponse: &shared.FixedResponseAction{
                    StatusCode: 979574,
                },
                Forward: &shared.ForwardAction{
                    TargetGroups: []shared.WeightedTargetGroup{
                        shared.WeightedTargetGroup{
                            TargetGroupIdentifier: "sed",
                            Weight: sdk.Int64(592231),
                        },
                        shared.WeightedTargetGroup{
                            TargetGroupIdentifier: "eius",
                            Weight: sdk.Int64(896762),
                        },
                    },
                },
            },
            Match: &operations.UpdateRuleRequestBodyMatch{
                HTTPMatch: &shared.HTTPMatch{
                    HeaderMatches: []shared.HeaderMatch{
                        shared.HeaderMatch{
                            CaseSensitive: sdk.Bool(false),
                            Match: shared.HeaderMatchType{
                                Contains: sdk.String("ea"),
                                Exact: sdk.String("occaecati"),
                                Prefix: sdk.String("quos"),
                            },
                            Name: "Eddie Goodwin",
                        },
                    },
                    Method: sdk.String("ex"),
                    PathMatch: &shared.PathMatch{
                        CaseSensitive: sdk.Bool(false),
                        Match: shared.PathMatchType{
                            Exact: sdk.String("sit"),
                            Prefix: sdk.String("non"),
                        },
                    },
                },
            },
            Priority: sdk.Int64(888044),
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("rem"),
        ListenerIdentifier: "sit",
        RuleIdentifier: "nobis",
        ServiceIdentifier: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRuleResponse != nil {
        // handle response
    }
}
```

## UpdateService

Updates the specified service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateService(ctx, operations.UpdateServiceRequest{
        RequestBody: operations.UpdateServiceRequestBody{
            AuthType: operations.UpdateServiceRequestBodyAuthTypeEnumNone.ToPointer(),
            CertificateArn: sdk.String("minima"),
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("numquam"),
        ServiceIdentifier: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceResponse != nil {
        // handle response
    }
}
```

## UpdateServiceNetwork

Updates the specified service network.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateServiceNetwork(ctx, operations.UpdateServiceNetworkRequest{
        RequestBody: operations.UpdateServiceNetworkRequestBody{
            AuthType: operations.UpdateServiceNetworkRequestBodyAuthTypeEnumNone,
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        ServiceNetworkIdentifier: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceNetworkResponse != nil {
        // handle response
    }
}
```

## UpdateServiceNetworkVpcAssociation

Updates the service network and VPC association. If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateServiceNetworkVpcAssociation(ctx, operations.UpdateServiceNetworkVpcAssociationRequest{
        RequestBody: operations.UpdateServiceNetworkVpcAssociationRequestBody{
            SecurityGroupIds: []string{
                "error",
                "hic",
                "expedita",
            },
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        ServiceNetworkVpcAssociationIdentifier: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceNetworkVpcAssociationResponse != nil {
        // handle response
    }
}
```

## UpdateTargetGroup

Updates the specified target group.

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
    res, err := s.SDK.UpdateTargetGroup(ctx, operations.UpdateTargetGroupRequest{
        RequestBody: operations.UpdateTargetGroupRequestBody{
            HealthCheck: operations.UpdateTargetGroupRequestBodyHealthCheck{
                Enabled: sdk.Bool(false),
                HealthCheckIntervalSeconds: sdk.Int64(272683),
                HealthCheckTimeoutSeconds: sdk.Int64(543678),
                HealthyThresholdCount: sdk.Int64(148268),
                Matcher: &shared.Matcher{
                    HTTPCode: sdk.String("ut"),
                },
                Path: sdk.String("fugiat"),
                Port: sdk.Int64(30235),
                Protocol: shared.TargetGroupProtocolEnumHTTPS.ToPointer(),
                ProtocolVersion: shared.HealthCheckProtocolVersionEnumHttp2.ToPointer(),
                UnhealthyThresholdCount: sdk.Int64(299643),
            },
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        TargetGroupIdentifier: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTargetGroupResponse != nil {
        // handle response
    }
}
```
