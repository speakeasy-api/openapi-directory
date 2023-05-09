# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/vpc-lattice/2022-11-30/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.BatchUpdateRule(ctx, operations.BatchUpdateRuleRequest{
        RequestBody: operations.BatchUpdateRuleRequestBody{
            Rules: []shared.RuleUpdate{
                shared.RuleUpdate{
                    Action: &shared.RuleAction{
                        FixedResponse: &shared.FixedResponseAction{
                            StatusCode: 592845,
                        },
                        Forward: &shared.ForwardAction{
                            TargetGroups: []shared.WeightedTargetGroup{
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "quibusdam",
                                    Weight: sdk.Int64(602763),
                                },
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "nulla",
                                    Weight: sdk.Int64(544883),
                                },
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "illum",
                                    Weight: sdk.Int64(423655),
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
                                        Contains: sdk.String("deserunt"),
                                        Exact: sdk.String("suscipit"),
                                        Prefix: sdk.String("iure"),
                                    },
                                    Name: "Raquel Bednar",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("suscipit"),
                                        Exact: sdk.String("molestiae"),
                                        Prefix: sdk.String("minus"),
                                    },
                                    Name: "Ken Kshlerin",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("recusandae"),
                                        Exact: sdk.String("temporibus"),
                                        Prefix: sdk.String("ab"),
                                    },
                                    Name: "Mrs. Marie O'Connell",
                                },
                            },
                            Method: sdk.String("sapiente"),
                            PathMatch: &shared.PathMatch{
                                CaseSensitive: sdk.Bool(false),
                                Match: shared.PathMatchType{
                                    Exact: sdk.String("quo"),
                                    Prefix: sdk.String("odit"),
                                },
                            },
                        },
                    },
                    Priority: sdk.Int64(870013),
                    RuleIdentifier: "at",
                },
                shared.RuleUpdate{
                    Action: &shared.RuleAction{
                        FixedResponse: &shared.FixedResponseAction{
                            StatusCode: 978619,
                        },
                        Forward: &shared.ForwardAction{
                            TargetGroups: []shared.WeightedTargetGroup{
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "quod",
                                    Weight: sdk.Int64(800911),
                                },
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "esse",
                                    Weight: sdk.Int64(520478),
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
                                        Contains: sdk.String("dolorum"),
                                        Exact: sdk.String("dicta"),
                                        Prefix: sdk.String("nam"),
                                    },
                                    Name: "Seth Conroy",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("optio"),
                                        Exact: sdk.String("totam"),
                                        Prefix: sdk.String("beatae"),
                                    },
                                    Name: "Tanya Gleason",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("cum"),
                                        Exact: sdk.String("esse"),
                                        Prefix: sdk.String("ipsum"),
                                    },
                                    Name: "Brandon Auer",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("sed"),
                                        Exact: sdk.String("iste"),
                                        Prefix: sdk.String("dolor"),
                                    },
                                    Name: "Lester Welch",
                                },
                            },
                            Method: sdk.String("in"),
                            PathMatch: &shared.PathMatch{
                                CaseSensitive: sdk.Bool(false),
                                Match: shared.PathMatchType{
                                    Exact: sdk.String("corporis"),
                                    Prefix: sdk.String("iste"),
                                },
                            },
                        },
                    },
                    Priority: sdk.Int64(437032),
                    RuleIdentifier: "saepe",
                },
                shared.RuleUpdate{
                    Action: &shared.RuleAction{
                        FixedResponse: &shared.FixedResponseAction{
                            StatusCode: 697631,
                        },
                        Forward: &shared.ForwardAction{
                            TargetGroups: []shared.WeightedTargetGroup{
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "ipsa",
                                    Weight: sdk.Int64(969810),
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
                                        Contains: sdk.String("mollitia"),
                                        Exact: sdk.String("laborum"),
                                        Prefix: sdk.String("dolores"),
                                    },
                                    Name: "Stacy Champlin",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("omnis"),
                                        Exact: sdk.String("nemo"),
                                        Prefix: sdk.String("minima"),
                                    },
                                    Name: "Brian Kessler",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("sapiente"),
                                        Exact: sdk.String("architecto"),
                                        Prefix: sdk.String("mollitia"),
                                    },
                                    Name: "Cecilia Crooks",
                                },
                            },
                            Method: sdk.String("occaecati"),
                            PathMatch: &shared.PathMatch{
                                CaseSensitive: sdk.Bool(false),
                                Match: shared.PathMatchType{
                                    Exact: sdk.String("numquam"),
                                    Prefix: sdk.String("commodi"),
                                },
                            },
                        },
                    },
                    Priority: sdk.Int64(466311),
                    RuleIdentifier: "molestiae",
                },
            },
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("animi"),
        ListenerIdentifier: "enim",
        ServiceIdentifier: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateRuleResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [BatchUpdateRule](docs/sdk/README.md#batchupdaterule) - Updates the listener rules in a batch. You can use this operation to change the priority of listener rules. This can be useful when bulk updating or swapping rule priority. 
* [CreateAccessLogSubscription](docs/sdk/README.md#createaccesslogsubscription) - Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner will only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html">Access logs</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [CreateListener](docs/sdk/README.md#createlistener) - Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html">Listeners</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [CreateRule](docs/sdk/README.md#createrule) - Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [CreateService](docs/sdk/README.md#createservice) - <p>Creates a service. A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html">Services</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [CreateServiceNetwork](docs/sdk/README.md#createservicenetwork) - <p>Creates a service network. A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html">Service networks</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [CreateServiceNetworkServiceAssociation](docs/sdk/README.md#createservicenetworkserviceassociation) - <p>Associates a service with a service network.</p> <p>You can't use this operation if the service and service network are already associated or if there is a disassociation or deletion in progress. If the association fails, you can retry the operation by deleting the association and recreating it.</p> <p>You cannot associate a service and service network that are shared with a caller. The caller must own either the service or the service network.</p> <p>As a result of this operation, the association is created in the service network account and the association owner account.</p>
* [CreateServiceNetworkVpcAssociation](docs/sdk/README.md#createservicenetworkvpcassociation) - <p>Associates a VPC with a service network. When you associate a VPC with the service network, it enables all the resources within that VPC to be clients and communicate with other services in the service network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-vpc-associations">Manage VPC associations</a> in the <i>Amazon VPC Lattice User Guide</i>.</p> <p>You can't use this operation if there is a disassociation in progress. If the association fails, retry by deleting the association and recreating it.</p> <p>As a result of this operation, the association gets created in the service network account and the VPC owner account.</p> <p>If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.</p>
* [CreateTargetGroup](docs/sdk/README.md#createtargetgroup) - <p>Creates a target group. A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html">Target groups</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [DeleteAccessLogSubscription](docs/sdk/README.md#deleteaccesslogsubscription) - Deletes the specified access log subscription.
* [DeleteAuthPolicy](docs/sdk/README.md#deleteauthpolicy) - Deletes the specified auth policy. If an auth is set to <code>AWS_IAM</code> and the auth policy is deleted, all requests will be denied by default. If you are trying to remove the auth policy completely, you must set the auth_type to <code>NONE</code>. If auth is enabled on the resource, but no auth policy is set, all requests will be denied.
* [DeleteListener](docs/sdk/README.md#deletelistener) - Deletes the specified listener.
* [DeleteResourcePolicy](docs/sdk/README.md#deleteresourcepolicy) - Deletes the specified resource policy.
* [DeleteRule](docs/sdk/README.md#deleterule) - <p>Deletes a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. You can delete additional listener rules, but you cannot delete the default rule.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [DeleteService](docs/sdk/README.md#deleteservice) - Deletes a service. A service can't be deleted if it's associated with a service network. If you delete a service, all resources related to the service, such as the resource policy, auth policy, listeners, listener rules, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html#delete-service">Delete a service</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [DeleteServiceNetwork](docs/sdk/README.md#deleteservicenetwork) - Deletes a service network. You can only delete the service network if there is no service or VPC associated with it. If you delete a service network, all resources related to the service network, such as the resource policy, auth policy, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#delete-service-network">Delete a service network</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [DeleteServiceNetworkServiceAssociation](docs/sdk/README.md#deleteservicenetworkserviceassociation) - Deletes the association between a specified service and the specific service network. This request will fail if an association is still in progress.
* [DeleteServiceNetworkVpcAssociation](docs/sdk/README.md#deleteservicenetworkvpcassociation) - Disassociates the VPC from the service network. You can't disassociate the VPC if there is a create or update association in progress.
* [DeleteTargetGroup](docs/sdk/README.md#deletetargetgroup) - Deletes a target group. You can't delete a target group if it is used in a listener rule or if the target group creation is in progress.
* [DeregisterTargets](docs/sdk/README.md#deregistertargets) - Deregisters the specified targets from the specified target group.
* [GetAccessLogSubscription](docs/sdk/README.md#getaccesslogsubscription) - Retrieves information about the specified access log subscription.
* [GetAuthPolicy](docs/sdk/README.md#getauthpolicy) - Retrieves information about the auth policy for the specified service or service network.
* [GetListener](docs/sdk/README.md#getlistener) - Retrieves information about the specified listener for the specified service.
* [GetResourcePolicy](docs/sdk/README.md#getresourcepolicy) - Retrieves information about the resource policy. The resource policy is an IAM policy created on behalf of the resource owner when they share a resource.
* [GetRule](docs/sdk/README.md#getrule) - Retrieves information about listener rules. You can also retrieve information about the default listener rule. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [GetService](docs/sdk/README.md#getservice) - Retrieves information about the specified service.
* [GetServiceNetwork](docs/sdk/README.md#getservicenetwork) - Retrieves information about the specified service network.
* [GetServiceNetworkServiceAssociation](docs/sdk/README.md#getservicenetworkserviceassociation) - Retrieves information about the specified association between a service network and a service.
* [GetServiceNetworkVpcAssociation](docs/sdk/README.md#getservicenetworkvpcassociation) - Retrieves information about the association between a service network and a VPC.
* [GetTargetGroup](docs/sdk/README.md#gettargetgroup) - Retrieves information about the specified target group.
* [ListAccessLogSubscriptions](docs/sdk/README.md#listaccesslogsubscriptions) - Lists all access log subscriptions for the specified service network or service.
* [ListListeners](docs/sdk/README.md#listlisteners) - Lists the listeners for the specified service.
* [ListRules](docs/sdk/README.md#listrules) - Lists the rules for the listener.
* [ListServiceNetworkServiceAssociations](docs/sdk/README.md#listservicenetworkserviceassociations) - <p>Lists the associations between the service network and the service. You can filter the list either by service or service network. You must provide either the service network identifier or the service identifier.</p> <p>Every association in Amazon VPC Lattice is given a unique Amazon Resource Name (ARN), such as when a service network is associated with a VPC or when a service is associated with a service network. If the association is for a resource that is shared with another account, the association will include the local account ID as the prefix in the ARN for each account the resource is shared with.</p>
* [ListServiceNetworkVpcAssociations](docs/sdk/README.md#listservicenetworkvpcassociations) - Lists the service network and VPC associations. You can filter the list either by VPC or service network. You must provide either the service network identifier or the VPC identifier.
* [ListServiceNetworks](docs/sdk/README.md#listservicenetworks) - Lists the service networks owned by the caller account or shared with the caller account. Also includes the account ID in the ARN to show which account owns the service network.
* [ListServices](docs/sdk/README.md#listservices) - Lists the services owned by the caller account or shared with the caller account.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [ListTargetGroups](docs/sdk/README.md#listtargetgroups) - Lists your target groups. You can narrow your search by using the filters below in your request.
* [ListTargets](docs/sdk/README.md#listtargets) - Lists the targets for the target group. By default, all targets are included. You can use this API to check the health status of targets. You can also ﬁlter the results by target. 
* [PutAuthPolicy](docs/sdk/README.md#putauthpolicy) - Creates or updates the auth policy. The policy string in JSON must not contain newlines or blank lines.
* [PutResourcePolicy](docs/sdk/README.md#putresourcepolicy) - Attaches a resource-based permission policy to a service or service network. The policy must contain the same actions and condition statements as the Amazon Web Services Resource Access Manager permission for sharing services and service networks.
* [RegisterTargets](docs/sdk/README.md#registertargets) - Registers the targets with the target group. If it's a Lambda target, you can only have one target in a target group.
* [TagResource](docs/sdk/README.md#tagresource) - Adds the specified tags to the specified resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes the specified tags from the specified resource.
* [UpdateAccessLogSubscription](docs/sdk/README.md#updateaccesslogsubscription) - Updates the specified access log subscription.
* [UpdateListener](docs/sdk/README.md#updatelistener) - Updates the specified listener for the specified service.
* [UpdateRule](docs/sdk/README.md#updaterule) - Updates a rule for the listener. You can't modify a default listener rule. To modify a default listener rule, use <code>UpdateListener</code>.
* [UpdateService](docs/sdk/README.md#updateservice) - Updates the specified service.
* [UpdateServiceNetwork](docs/sdk/README.md#updateservicenetwork) - Updates the specified service network.
* [UpdateServiceNetworkVpcAssociation](docs/sdk/README.md#updateservicenetworkvpcassociation) - Updates the service network and VPC association. If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.
* [UpdateTargetGroup](docs/sdk/README.md#updatetargetgroup) - Updates the specified target group.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
