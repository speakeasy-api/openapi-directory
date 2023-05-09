# SDK

## Overview

Amazon VPC Lattice is a fully managed application networking service that you use to connect, secure, and monitor all of your services across multiple accounts and virtual private clouds (VPCs). Amazon VPC Lattice interconnects your microservices and legacy services within a logical boundary, so that you can discover and manage them more efficiently. For more information, see the <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/">Amazon VPC Lattice User Guide</a> 

Amazon Web Services documentation
<https://docs.aws.amazon.com/vpc-lattice/>
### Available Operations

* [batchUpdateRule](#batchupdaterule) - Updates the listener rules in a batch. You can use this operation to change the priority of listener rules. This can be useful when bulk updating or swapping rule priority. 
* [createAccessLogSubscription](#createaccesslogsubscription) - Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner will only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html">Access logs</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [createListener](#createlistener) - Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html">Listeners</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [createRule](#createrule) - Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [createService](#createservice) - <p>Creates a service. A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html">Services</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [createServiceNetwork](#createservicenetwork) - <p>Creates a service network. A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html">Service networks</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [createServiceNetworkServiceAssociation](#createservicenetworkserviceassociation) - <p>Associates a service with a service network.</p> <p>You can't use this operation if the service and service network are already associated or if there is a disassociation or deletion in progress. If the association fails, you can retry the operation by deleting the association and recreating it.</p> <p>You cannot associate a service and service network that are shared with a caller. The caller must own either the service or the service network.</p> <p>As a result of this operation, the association is created in the service network account and the association owner account.</p>
* [createServiceNetworkVpcAssociation](#createservicenetworkvpcassociation) - <p>Associates a VPC with a service network. When you associate a VPC with the service network, it enables all the resources within that VPC to be clients and communicate with other services in the service network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-vpc-associations">Manage VPC associations</a> in the <i>Amazon VPC Lattice User Guide</i>.</p> <p>You can't use this operation if there is a disassociation in progress. If the association fails, retry by deleting the association and recreating it.</p> <p>As a result of this operation, the association gets created in the service network account and the VPC owner account.</p> <p>If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.</p>
* [createTargetGroup](#createtargetgroup) - <p>Creates a target group. A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html">Target groups</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [deleteAccessLogSubscription](#deleteaccesslogsubscription) - Deletes the specified access log subscription.
* [deleteAuthPolicy](#deleteauthpolicy) - Deletes the specified auth policy. If an auth is set to <code>AWS_IAM</code> and the auth policy is deleted, all requests will be denied by default. If you are trying to remove the auth policy completely, you must set the auth_type to <code>NONE</code>. If auth is enabled on the resource, but no auth policy is set, all requests will be denied.
* [deleteListener](#deletelistener) - Deletes the specified listener.
* [deleteResourcePolicy](#deleteresourcepolicy) - Deletes the specified resource policy.
* [deleteRule](#deleterule) - <p>Deletes a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. You can delete additional listener rules, but you cannot delete the default rule.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [deleteService](#deleteservice) - Deletes a service. A service can't be deleted if it's associated with a service network. If you delete a service, all resources related to the service, such as the resource policy, auth policy, listeners, listener rules, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html#delete-service">Delete a service</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [deleteServiceNetwork](#deleteservicenetwork) - Deletes a service network. You can only delete the service network if there is no service or VPC associated with it. If you delete a service network, all resources related to the service network, such as the resource policy, auth policy, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#delete-service-network">Delete a service network</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [deleteServiceNetworkServiceAssociation](#deleteservicenetworkserviceassociation) - Deletes the association between a specified service and the specific service network. This request will fail if an association is still in progress.
* [deleteServiceNetworkVpcAssociation](#deleteservicenetworkvpcassociation) - Disassociates the VPC from the service network. You can't disassociate the VPC if there is a create or update association in progress.
* [deleteTargetGroup](#deletetargetgroup) - Deletes a target group. You can't delete a target group if it is used in a listener rule or if the target group creation is in progress.
* [deregisterTargets](#deregistertargets) - Deregisters the specified targets from the specified target group.
* [getAccessLogSubscription](#getaccesslogsubscription) - Retrieves information about the specified access log subscription.
* [getAuthPolicy](#getauthpolicy) - Retrieves information about the auth policy for the specified service or service network.
* [getListener](#getlistener) - Retrieves information about the specified listener for the specified service.
* [getResourcePolicy](#getresourcepolicy) - Retrieves information about the resource policy. The resource policy is an IAM policy created on behalf of the resource owner when they share a resource.
* [getRule](#getrule) - Retrieves information about listener rules. You can also retrieve information about the default listener rule. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [getService](#getservice) - Retrieves information about the specified service.
* [getServiceNetwork](#getservicenetwork) - Retrieves information about the specified service network.
* [getServiceNetworkServiceAssociation](#getservicenetworkserviceassociation) - Retrieves information about the specified association between a service network and a service.
* [getServiceNetworkVpcAssociation](#getservicenetworkvpcassociation) - Retrieves information about the association between a service network and a VPC.
* [getTargetGroup](#gettargetgroup) - Retrieves information about the specified target group.
* [listAccessLogSubscriptions](#listaccesslogsubscriptions) - Lists all access log subscriptions for the specified service network or service.
* [listListeners](#listlisteners) - Lists the listeners for the specified service.
* [listRules](#listrules) - Lists the rules for the listener.
* [listServiceNetworkServiceAssociations](#listservicenetworkserviceassociations) - <p>Lists the associations between the service network and the service. You can filter the list either by service or service network. You must provide either the service network identifier or the service identifier.</p> <p>Every association in Amazon VPC Lattice is given a unique Amazon Resource Name (ARN), such as when a service network is associated with a VPC or when a service is associated with a service network. If the association is for a resource that is shared with another account, the association will include the local account ID as the prefix in the ARN for each account the resource is shared with.</p>
* [listServiceNetworkVpcAssociations](#listservicenetworkvpcassociations) - Lists the service network and VPC associations. You can filter the list either by VPC or service network. You must provide either the service network identifier or the VPC identifier.
* [listServiceNetworks](#listservicenetworks) - Lists the service networks owned by the caller account or shared with the caller account. Also includes the account ID in the ARN to show which account owns the service network.
* [listServices](#listservices) - Lists the services owned by the caller account or shared with the caller account.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [listTargetGroups](#listtargetgroups) - Lists your target groups. You can narrow your search by using the filters below in your request.
* [listTargets](#listtargets) - Lists the targets for the target group. By default, all targets are included. You can use this API to check the health status of targets. You can also ﬁlter the results by target. 
* [putAuthPolicy](#putauthpolicy) - Creates or updates the auth policy. The policy string in JSON must not contain newlines or blank lines.
* [putResourcePolicy](#putresourcepolicy) - Attaches a resource-based permission policy to a service or service network. The policy must contain the same actions and condition statements as the Amazon Web Services Resource Access Manager permission for sharing services and service networks.
* [registerTargets](#registertargets) - Registers the targets with the target group. If it's a Lambda target, you can only have one target in a target group.
* [tagResource](#tagresource) - Adds the specified tags to the specified resource.
* [untagResource](#untagresource) - Removes the specified tags from the specified resource.
* [updateAccessLogSubscription](#updateaccesslogsubscription) - Updates the specified access log subscription.
* [updateListener](#updatelistener) - Updates the specified listener for the specified service.
* [updateRule](#updaterule) - Updates a rule for the listener. You can't modify a default listener rule. To modify a default listener rule, use <code>UpdateListener</code>.
* [updateService](#updateservice) - Updates the specified service.
* [updateServiceNetwork](#updateservicenetwork) - Updates the specified service network.
* [updateServiceNetworkVpcAssociation](#updateservicenetworkvpcassociation) - Updates the service network and VPC association. If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.
* [updateTargetGroup](#updatetargetgroup) - Updates the specified target group.

## batchUpdateRule

Updates the listener rules in a batch. You can use this operation to change the priority of listener rules. This can be useful when bulk updating or swapping rule priority. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchUpdateRuleRequest;
import org.openapis.openapi.models.operations.BatchUpdateRuleRequestBody;
import org.openapis.openapi.models.operations.BatchUpdateRuleResponse;
import org.openapis.openapi.models.shared.FixedResponseAction;
import org.openapis.openapi.models.shared.ForwardAction;
import org.openapis.openapi.models.shared.HeaderMatch;
import org.openapis.openapi.models.shared.HeaderMatchType;
import org.openapis.openapi.models.shared.HttpMatch;
import org.openapis.openapi.models.shared.PathMatch;
import org.openapis.openapi.models.shared.PathMatchType;
import org.openapis.openapi.models.shared.RuleAction;
import org.openapis.openapi.models.shared.RuleMatch;
import org.openapis.openapi.models.shared.RuleUpdate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeightedTargetGroup;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchUpdateRuleRequest req = new BatchUpdateRuleRequest(                new BatchUpdateRuleRequestBody(                new org.openapis.openapi.models.shared.RuleUpdate[]{{
                                                add(new RuleUpdate("magnam") {{
                                                    action = new RuleAction() {{
                                                        fixedResponse = new FixedResponseAction(397821L) {{
                                                            statusCode = 183191L;
                                                        }};
                                                        forward = new ForwardAction(                new org.openapis.openapi.models.shared.WeightedTargetGroup[]{{
                                                                            add(new WeightedTargetGroup("labore") {{
                                                                                targetGroupIdentifier = "facilis";
                                                                                weight = 735194L;
                                                                            }}),
                                                                            add(new WeightedTargetGroup("non") {{
                                                                                targetGroupIdentifier = "delectus";
                                                                                weight = 433288L;
                                                                            }}),
                                                                        }}) {{
                                                            targetGroups = new org.openapis.openapi.models.shared.WeightedTargetGroup[]{{
                                                                add(new WeightedTargetGroup("magni") {{
                                                                    targetGroupIdentifier = "quos";
                                                                    weight = 20107L;
                                                                }}),
                                                                add(new WeightedTargetGroup("alias") {{
                                                                    targetGroupIdentifier = "assumenda";
                                                                    weight = 369808L;
                                                                }}),
                                                                add(new WeightedTargetGroup("excepturi") {{
                                                                    targetGroupIdentifier = "fugit";
                                                                    weight = 677817L;
                                                                }}),
                                                            }};
                                                        }};
                                                    }};
                                                    match = new RuleMatch() {{
                                                        httpMatch = new HttpMatch() {{
                                                            headerMatches = new org.openapis.openapi.models.shared.HeaderMatch[]{{
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "a";
                                                                                    exact = "dolorum";
                                                                                    prefix = "in";
                                                                                }};, "in") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "sint";
                                                                        exact = "aliquid";
                                                                        prefix = "provident";
                                                                    }};
                                                                    name = "Perry Nikolaus";
                                                                }}),
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "aliquid";
                                                                                    exact = "laborum";
                                                                                    prefix = "accusamus";
                                                                                }};, "non") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "illum";
                                                                        exact = "maiores";
                                                                        prefix = "rerum";
                                                                    }};
                                                                    name = "Valerie Runolfsson";
                                                                }}),
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "blanditiis";
                                                                                    exact = "deleniti";
                                                                                    prefix = "sapiente";
                                                                                }};, "amet") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "occaecati";
                                                                        exact = "enim";
                                                                        prefix = "accusamus";
                                                                    }};
                                                                    name = "Abraham McKenzie";
                                                                }}),
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "distinctio";
                                                                                    exact = "id";
                                                                                    prefix = "labore";
                                                                                }};, "labore") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "deserunt";
                                                                        exact = "nisi";
                                                                        prefix = "vel";
                                                                    }};
                                                                    name = "Ms. Arturo Krajcik";
                                                                }}),
                                                            }};
                                                            method = "suscipit";
                                                            pathMatch = new PathMatch(                new PathMatchType() {{
                                                                                exact = "eum";
                                                                                prefix = "vero";
                                                                            }};) {{
                                                                caseSensitive = false;
                                                                match = new PathMatchType() {{
                                                                    exact = "natus";
                                                                    prefix = "nobis";
                                                                }};
                                                            }};
                                                        }};
                                                    }};
                                                    priority = 135474L;
                                                    ruleIdentifier = "architecto";
                                                }}),
                                                add(new RuleUpdate("eos") {{
                                                    action = new RuleAction() {{
                                                        fixedResponse = new FixedResponseAction(569965L) {{
                                                            statusCode = 92373L;
                                                        }};
                                                        forward = new ForwardAction(                new org.openapis.openapi.models.shared.WeightedTargetGroup[]{{
                                                                            add(new WeightedTargetGroup("dolor") {{
                                                                                targetGroupIdentifier = "ad";
                                                                                weight = 431418L;
                                                                            }}),
                                                                            add(new WeightedTargetGroup("nemo") {{
                                                                                targetGroupIdentifier = "necessitatibus";
                                                                                weight = 141264L;
                                                                            }}),
                                                                            add(new WeightedTargetGroup("doloribus") {{
                                                                                targetGroupIdentifier = "quasi";
                                                                                weight = 435865L;
                                                                            }}),
                                                                        }}) {{
                                                            targetGroups = new org.openapis.openapi.models.shared.WeightedTargetGroup[]{{
                                                                add(new WeightedTargetGroup("sint") {{
                                                                    targetGroupIdentifier = "provident";
                                                                    weight = 551816L;
                                                                }}),
                                                                add(new WeightedTargetGroup("reiciendis") {{
                                                                    targetGroupIdentifier = "accusantium";
                                                                    weight = 653201L;
                                                                }}),
                                                            }};
                                                        }};
                                                    }};
                                                    match = new RuleMatch() {{
                                                        httpMatch = new HttpMatch() {{
                                                            headerMatches = new org.openapis.openapi.models.shared.HeaderMatch[]{{
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "expedita";
                                                                                    exact = "nihil";
                                                                                    prefix = "repellat";
                                                                                }};, "quibusdam") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "eius";
                                                                        exact = "maxime";
                                                                        prefix = "deleniti";
                                                                    }};
                                                                    name = "Dr. Arnold Bradtke";
                                                                }}),
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "sunt";
                                                                                    exact = "quo";
                                                                                    prefix = "illum";
                                                                                }};, "pariatur") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "sed";
                                                                        exact = "saepe";
                                                                        prefix = "pariatur";
                                                                    }};
                                                                    name = "Kathryn Lang";
                                                                }}),
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "ipsam";
                                                                                    exact = "voluptate";
                                                                                    prefix = "autem";
                                                                                }};, "nam") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "maxime";
                                                                        exact = "ea";
                                                                        prefix = "excepturi";
                                                                    }};
                                                                    name = "Dr. Rosemary Bartoletti";
                                                                }}),
                                                                add(new HeaderMatch(                new HeaderMatchType() {{
                                                                                    contains = "corporis";
                                                                                    exact = "hic";
                                                                                    prefix = "libero";
                                                                                }};, "nobis") {{
                                                                    caseSensitive = false;
                                                                    match = new HeaderMatchType() {{
                                                                        contains = "eaque";
                                                                        exact = "pariatur";
                                                                        prefix = "nemo";
                                                                    }};
                                                                    name = "Joseph Steuber DDS";
                                                                }}),
                                                            }};
                                                            method = "dolores";
                                                            pathMatch = new PathMatch(                new PathMatchType() {{
                                                                                exact = "dignissimos";
                                                                                prefix = "eaque";
                                                                            }};) {{
                                                                caseSensitive = false;
                                                                match = new PathMatchType() {{
                                                                    exact = "quis";
                                                                    prefix = "totam";
                                                                }};
                                                            }};
                                                        }};
                                                    }};
                                                    priority = 338985L;
                                                    ruleIdentifier = "nesciunt";
                                                }}),
                                            }});, "perferendis", "dolores") {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "quam";
                xAmzCredential = "dolor";
                xAmzDate = "vero";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "recusandae";
            }};            

            BatchUpdateRuleResponse res = sdk.sdk.batchUpdateRule(req);

            if (res.batchUpdateRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccessLogSubscription

Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner will only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html">Access logs</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessLogSubscriptionRequest;
import org.openapis.openapi.models.operations.CreateAccessLogSubscriptionRequestBody;
import org.openapis.openapi.models.operations.CreateAccessLogSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccessLogSubscriptionRequest req = new CreateAccessLogSubscriptionRequest(                new CreateAccessLogSubscriptionRequestBody("facilis", "perspiciatis") {{
                                clientToken = "voluptatem";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("consequuntur", "blanditiis");
                                    put("error", "eaque");
                                    put("occaecati", "rerum");
                                    put("adipisci", "asperiores");
                                }};
                            }};) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "modi";
                xAmzCredential = "iste";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "provident";
            }};            

            CreateAccessLogSubscriptionResponse res = sdk.sdk.createAccessLogSubscription(req);

            if (res.createAccessLogSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createListener

Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html">Listeners</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateListenerRequest;
import org.openapis.openapi.models.operations.CreateListenerRequestBody;
import org.openapis.openapi.models.operations.CreateListenerRequestBodyDefaultAction;
import org.openapis.openapi.models.operations.CreateListenerRequestBodyProtocolEnum;
import org.openapis.openapi.models.operations.CreateListenerResponse;
import org.openapis.openapi.models.shared.FixedResponseAction;
import org.openapis.openapi.models.shared.ForwardAction;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeightedTargetGroup;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateListenerRequest req = new CreateListenerRequest(                new CreateListenerRequestBody(                new CreateListenerRequestBodyDefaultAction() {{
                                                fixedResponse = new FixedResponseAction(730122L);;
                                                forward = new ForwardAction(                new org.openapis.openapi.models.shared.WeightedTargetGroup[]{{
                                                                    add(new WeightedTargetGroup("aliquid") {{
                                                                        targetGroupIdentifier = "quaerat";
                                                                        weight = 554242L;
                                                                    }}),
                                                                    add(new WeightedTargetGroup("dolor") {{
                                                                        targetGroupIdentifier = "dolorem";
                                                                        weight = 209843L;
                                                                    }}),
                                                                    add(new WeightedTargetGroup("hic") {{
                                                                        targetGroupIdentifier = "qui";
                                                                        weight = 218749L;
                                                                    }}),
                                                                    add(new WeightedTargetGroup("voluptate") {{
                                                                        targetGroupIdentifier = "excepturi";
                                                                        weight = 739551L;
                                                                    }}),
                                                                }});;
                                            }};, "dignissimos", CreateListenerRequestBodyProtocolEnum.HTTPS) {{
                                clientToken = "amet";
                                port = 680545L;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("veritatis", "ipsa");
                                    put("ipsa", "iure");
                                }};
                            }};, "odio") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "quidem";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "eos";
            }};            

            CreateListenerResponse res = sdk.sdk.createListener(req);

            if (res.createListenerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRule

Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRuleRequest;
import org.openapis.openapi.models.operations.CreateRuleRequestBody;
import org.openapis.openapi.models.operations.CreateRuleRequestBodyAction;
import org.openapis.openapi.models.operations.CreateRuleRequestBodyMatch;
import org.openapis.openapi.models.operations.CreateRuleResponse;
import org.openapis.openapi.models.shared.FixedResponseAction;
import org.openapis.openapi.models.shared.ForwardAction;
import org.openapis.openapi.models.shared.HeaderMatch;
import org.openapis.openapi.models.shared.HeaderMatchType;
import org.openapis.openapi.models.shared.HttpMatch;
import org.openapis.openapi.models.shared.PathMatch;
import org.openapis.openapi.models.shared.PathMatchType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeightedTargetGroup;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRuleRequest req = new CreateRuleRequest(                new CreateRuleRequestBody(                new CreateRuleRequestBodyAction() {{
                                                fixedResponse = new FixedResponseAction(24678L);;
                                                forward = new ForwardAction(                new org.openapis.openapi.models.shared.WeightedTargetGroup[]{{
                                                                    add(new WeightedTargetGroup("dolorum") {{
                                                                        targetGroupIdentifier = "ab";
                                                                        weight = 743835L;
                                                                    }}),
                                                                    add(new WeightedTargetGroup("dolorum") {{
                                                                        targetGroupIdentifier = "iusto";
                                                                        weight = 453697L;
                                                                    }}),
                                                                    add(new WeightedTargetGroup("necessitatibus") {{
                                                                        targetGroupIdentifier = "deleniti";
                                                                        weight = 607045L;
                                                                    }}),
                                                                    add(new WeightedTargetGroup("nihil") {{
                                                                        targetGroupIdentifier = "distinctio";
                                                                        weight = 990339L;
                                                                    }}),
                                                                }});;
                                            }};,                 new CreateRuleRequestBodyMatch() {{
                                                httpMatch = new HttpMatch() {{
                                                    headerMatches = new org.openapis.openapi.models.shared.HeaderMatch[]{{
                                                        add(new HeaderMatch(                new HeaderMatchType() {{
                                                                            contains = "accusamus";
                                                                            exact = "ad";
                                                                            prefix = "saepe";
                                                                        }};, "suscipit") {{
                                                            caseSensitive = false;
                                                            match = new HeaderMatchType() {{
                                                                contains = "voluptate";
                                                                exact = "id";
                                                                prefix = "saepe";
                                                            }};
                                                            name = "Judy Aufderhar";
                                                        }}),
                                                    }};
                                                    method = "deserunt";
                                                    pathMatch = new PathMatch(                new PathMatchType() {{
                                                                        exact = "provident";
                                                                        prefix = "minima";
                                                                    }};) {{
                                                        caseSensitive = false;
                                                    }};;
                                                }};;
                                            }};, "repellendus", 519711L) {{
                                clientToken = "similique";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("at", "quaerat");
                                }};
                            }};, "tempora", "vel") {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "qui";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "a";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "harum";
            }};            

            CreateRuleResponse res = sdk.sdk.createRule(req);

            if (res.createRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createService

<p>Creates a service. A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html">Services</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceRequest;
import org.openapis.openapi.models.operations.CreateServiceRequestBody;
import org.openapis.openapi.models.operations.CreateServiceRequestBodyAuthTypeEnum;
import org.openapis.openapi.models.operations.CreateServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServiceRequest req = new CreateServiceRequest(                new CreateServiceRequestBody("ipsum") {{
                                authType = CreateServiceRequestBodyAuthTypeEnum.AWS_IAM;
                                certificateArn = "tenetur";
                                clientToken = "amet";
                                customDomainName = "tempore";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("numquam", "enim");
                                    put("dolorem", "sapiente");
                                    put("totam", "nihil");
                                    put("sit", "expedita");
                                }};
                            }};) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "sed";
                xAmzCredential = "vel";
                xAmzDate = "libero";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "quam";
            }};            

            CreateServiceResponse res = sdk.sdk.createService(req);

            if (res.createServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceNetwork

<p>Creates a service network. A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html">Service networks</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceNetworkRequest;
import org.openapis.openapi.models.operations.CreateServiceNetworkRequestBody;
import org.openapis.openapi.models.operations.CreateServiceNetworkRequestBodyAuthTypeEnum;
import org.openapis.openapi.models.operations.CreateServiceNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServiceNetworkRequest req = new CreateServiceNetworkRequest(                new CreateServiceNetworkRequestBody("incidunt") {{
                                authType = CreateServiceNetworkRequestBodyAuthTypeEnum.NONE;
                                clientToken = "cupiditate";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("pariatur", "soluta");
                                    put("dicta", "laborum");
                                    put("totam", "incidunt");
                                    put("aspernatur", "dolores");
                                }};
                            }};) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "aliquid";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "qui";
            }};            

            CreateServiceNetworkResponse res = sdk.sdk.createServiceNetwork(req);

            if (res.createServiceNetworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceNetworkServiceAssociation

<p>Associates a service with a service network.</p> <p>You can't use this operation if the service and service network are already associated or if there is a disassociation or deletion in progress. If the association fails, you can retry the operation by deleting the association and recreating it.</p> <p>You cannot associate a service and service network that are shared with a caller. The caller must own either the service or the service network.</p> <p>As a result of this operation, the association is created in the service network account and the association owner account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceNetworkServiceAssociationRequest;
import org.openapis.openapi.models.operations.CreateServiceNetworkServiceAssociationRequestBody;
import org.openapis.openapi.models.operations.CreateServiceNetworkServiceAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServiceNetworkServiceAssociationRequest req = new CreateServiceNetworkServiceAssociationRequest(                new CreateServiceNetworkServiceAssociationRequestBody("fugit", "magni") {{
                                clientToken = "odio";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("ullam", "nam");
                                }};
                            }};) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "cumque";
                xAmzDate = "soluta";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "et";
                xAmzSignedHeaders = "saepe";
            }};            

            CreateServiceNetworkServiceAssociationResponse res = sdk.sdk.createServiceNetworkServiceAssociation(req);

            if (res.createServiceNetworkServiceAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceNetworkVpcAssociation

<p>Associates a VPC with a service network. When you associate a VPC with the service network, it enables all the resources within that VPC to be clients and communicate with other services in the service network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-vpc-associations">Manage VPC associations</a> in the <i>Amazon VPC Lattice User Guide</i>.</p> <p>You can't use this operation if there is a disassociation in progress. If the association fails, retry by deleting the association and recreating it.</p> <p>As a result of this operation, the association gets created in the service network account and the VPC owner account.</p> <p>If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceNetworkVpcAssociationRequest;
import org.openapis.openapi.models.operations.CreateServiceNetworkVpcAssociationRequestBody;
import org.openapis.openapi.models.operations.CreateServiceNetworkVpcAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServiceNetworkVpcAssociationRequest req = new CreateServiceNetworkVpcAssociationRequest(                new CreateServiceNetworkVpcAssociationRequestBody("veritatis", "nobis") {{
                                clientToken = "quos";
                                securityGroupIds = new String[]{{
                                    add("cupiditate"),
                                    add("aperiam"),
                                    add("delectus"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("dolore", "labore");
                                }};
                            }};) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "architecto";
                xAmzDate = "quae";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "itaque";
            }};            

            CreateServiceNetworkVpcAssociationResponse res = sdk.sdk.createServiceNetworkVpcAssociation(req);

            if (res.createServiceNetworkVpcAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTargetGroup

<p>Creates a target group. A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html">Target groups</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTargetGroupRequest;
import org.openapis.openapi.models.operations.CreateTargetGroupRequestBody;
import org.openapis.openapi.models.operations.CreateTargetGroupRequestBodyConfig;
import org.openapis.openapi.models.operations.CreateTargetGroupRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateTargetGroupResponse;
import org.openapis.openapi.models.shared.HealthCheckConfig;
import org.openapis.openapi.models.shared.HealthCheckProtocolVersionEnum;
import org.openapis.openapi.models.shared.IpAddressTypeEnum;
import org.openapis.openapi.models.shared.Matcher;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetGroupProtocolEnum;
import org.openapis.openapi.models.shared.TargetGroupProtocolVersionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTargetGroupRequest req = new CreateTargetGroupRequest(                new CreateTargetGroupRequestBody("est", CreateTargetGroupRequestBodyTypeEnum.ALB) {{
                                clientToken = "porro";
                                config = new CreateTargetGroupRequestBodyConfig() {{
                                    healthCheck = new HealthCheckConfig() {{
                                        enabled = false;
                                        healthCheckIntervalSeconds = 984330L;
                                        healthCheckTimeoutSeconds = 281730L;
                                        healthyThresholdCount = 703495L;
                                        matcher = new Matcher() {{
                                            httpCode = "cupiditate";
                                        }};;
                                        path = "qui";
                                        port = 63955L;
                                        protocol = TargetGroupProtocolEnum.HTTPS;
                                        protocolVersion = HealthCheckProtocolVersionEnum.HTTP1;
                                        unhealthyThresholdCount = 580447L;
                                    }};;
                                    ipAddressType = IpAddressTypeEnum.IPV6;
                                    port = 787542L;
                                    protocol = TargetGroupProtocolEnum.HTTPS;
                                    protocolVersion = TargetGroupProtocolVersionEnum.HTTP2;
                                    vpcIdentifier = "quis";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("delectus", "voluptate");
                                }};
                            }};) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "vero";
                xAmzCredential = "tenetur";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "hic";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quod";
            }};            

            CreateTargetGroupResponse res = sdk.sdk.createTargetGroup(req);

            if (res.createTargetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccessLogSubscription

Deletes the specified access log subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccessLogSubscriptionRequest;
import org.openapis.openapi.models.operations.DeleteAccessLogSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAccessLogSubscriptionRequest req = new DeleteAccessLogSubscriptionRequest("similique") {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "vero";
                xAmzCredential = "ducimus";
                xAmzDate = "dolore";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "sequi";
            }};            

            DeleteAccessLogSubscriptionResponse res = sdk.sdk.deleteAccessLogSubscription(req);

            if (res.deleteAccessLogSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAuthPolicy

Deletes the specified auth policy. If an auth is set to <code>AWS_IAM</code> and the auth policy is deleted, all requests will be denied by default. If you are trying to remove the auth policy completely, you must set the auth_type to <code>NONE</code>. If auth is enabled on the resource, but no auth policy is set, all requests will be denied.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAuthPolicyRequest;
import org.openapis.openapi.models.operations.DeleteAuthPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAuthPolicyRequest req = new DeleteAuthPolicyRequest("impedit") {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "exercitationem";
                xAmzDate = "nulla";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "maiores";
            }};            

            DeleteAuthPolicyResponse res = sdk.sdk.deleteAuthPolicy(req);

            if (res.deleteAuthPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteListener

Deletes the specified listener.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteListenerRequest;
import org.openapis.openapi.models.operations.DeleteListenerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteListenerRequest req = new DeleteListenerRequest("iusto", "eligendi") {{
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "alias";
                xAmzCredential = "officia";
                xAmzDate = "tempora";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DeleteListenerResponse res = sdk.sdk.deleteListener(req);

            if (res.deleteListenerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourcePolicy

Deletes the specified resource policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.operations.DeleteResourcePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePolicyRequest req = new DeleteResourcePolicyRequest("possimus") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "ex";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "maiores";
            }};            

            DeleteResourcePolicyResponse res = sdk.sdk.deleteResourcePolicy(req);

            if (res.deleteResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRule

<p>Deletes a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. You can delete additional listener rules, but you cannot delete the default rule.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRuleRequest;
import org.openapis.openapi.models.operations.DeleteRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRuleRequest req = new DeleteRuleRequest("ex", "nulla", "excepturi") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "sapiente";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "impedit";
            }};            

            DeleteRuleResponse res = sdk.sdk.deleteRule(req);

            if (res.deleteRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteService

Deletes a service. A service can't be deleted if it's associated with a service network. If you delete a service, all resources related to the service, such as the resource policy, auth policy, listeners, listener rules, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html#delete-service">Delete a service</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceRequest;
import org.openapis.openapi.models.operations.DeleteServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServiceRequest req = new DeleteServiceRequest("veniam") {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "magnam";
                xAmzDate = "ea";
                xAmzSecurityToken = "quo";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "recusandae";
            }};            

            DeleteServiceResponse res = sdk.sdk.deleteService(req);

            if (res.deleteServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteServiceNetwork

Deletes a service network. You can only delete the service network if there is no service or VPC associated with it. If you delete a service network, all resources related to the service network, such as the resource policy, auth policy, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#delete-service-network">Delete a service network</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceNetworkRequest;
import org.openapis.openapi.models.operations.DeleteServiceNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServiceNetworkRequest req = new DeleteServiceNetworkRequest("minima") {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "a";
                xAmzCredential = "libero";
                xAmzDate = "aut";
                xAmzSecurityToken = "aut";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "impedit";
            }};            

            DeleteServiceNetworkResponse res = sdk.sdk.deleteServiceNetwork(req);

            if (res.deleteServiceNetworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteServiceNetworkServiceAssociation

Deletes the association between a specified service and the specific service network. This request will fail if an association is still in progress.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceNetworkServiceAssociationRequest;
import org.openapis.openapi.models.operations.DeleteServiceNetworkServiceAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServiceNetworkServiceAssociationRequest req = new DeleteServiceNetworkServiceAssociationRequest("fugit") {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "non";
                xAmzDate = "et";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "placeat";
            }};            

            DeleteServiceNetworkServiceAssociationResponse res = sdk.sdk.deleteServiceNetworkServiceAssociation(req);

            if (res.deleteServiceNetworkServiceAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteServiceNetworkVpcAssociation

Disassociates the VPC from the service network. You can't disassociate the VPC if there is a create or update association in progress.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceNetworkVpcAssociationRequest;
import org.openapis.openapi.models.operations.DeleteServiceNetworkVpcAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServiceNetworkVpcAssociationRequest req = new DeleteServiceNetworkVpcAssociationRequest("eum") {{
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quas";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "libero";
            }};            

            DeleteServiceNetworkVpcAssociationResponse res = sdk.sdk.deleteServiceNetworkVpcAssociation(req);

            if (res.deleteServiceNetworkVpcAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTargetGroup

Deletes a target group. You can't delete a target group if it is used in a listener rule or if the target group creation is in progress.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTargetGroupRequest;
import org.openapis.openapi.models.operations.DeleteTargetGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTargetGroupRequest req = new DeleteTargetGroupRequest("tempora") {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "provident";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "odio";
            }};            

            DeleteTargetGroupResponse res = sdk.sdk.deleteTargetGroup(req);

            if (res.deleteTargetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterTargets

Deregisters the specified targets from the specified target group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterTargetsRequest;
import org.openapis.openapi.models.operations.DeregisterTargetsRequestBody;
import org.openapis.openapi.models.operations.DeregisterTargetsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterTargetsRequest req = new DeregisterTargetsRequest(                new DeregisterTargetsRequestBody(                new org.openapis.openapi.models.shared.Target[]{{
                                                add(new Target("sequi") {{
                                                    id = "78a7bd46-6d28-4c10-ab3c-dca4251904e5";
                                                    port = 133465L;
                                                }}),
                                                add(new Target("minima") {{
                                                    id = "c7e0bc71-78e4-4796-b2a7-0c688282aa48";
                                                    port = 128860L;
                                                }}),
                                            }});, "nisi") {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "consequuntur";
                xAmzDate = "ratione";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "occaecati";
            }};            

            DeregisterTargetsResponse res = sdk.sdk.deregisterTargets(req);

            if (res.deregisterTargetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccessLogSubscription

Retrieves information about the specified access log subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccessLogSubscriptionRequest;
import org.openapis.openapi.models.operations.GetAccessLogSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccessLogSubscriptionRequest req = new GetAccessLogSubscriptionRequest("et") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "accusamus";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "esse";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "nam";
            }};            

            GetAccessLogSubscriptionResponse res = sdk.sdk.getAccessLogSubscription(req);

            if (res.getAccessLogSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuthPolicy

Retrieves information about the auth policy for the specified service or service network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthPolicyRequest;
import org.openapis.openapi.models.operations.GetAuthPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAuthPolicyRequest req = new GetAuthPolicyRequest("aliquid") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "vel";
                xAmzDate = "harum";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "occaecati";
            }};            

            GetAuthPolicyResponse res = sdk.sdk.getAuthPolicy(req);

            if (res.getAuthPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListener

Retrieves information about the specified listener for the specified service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListenerRequest;
import org.openapis.openapi.models.operations.GetListenerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetListenerRequest req = new GetListenerRequest("distinctio", "eligendi") {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "tempore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "consequatur";
            }};            

            GetListenerResponse res = sdk.sdk.getListener(req);

            if (res.getListenerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcePolicy

Retrieves information about the resource policy. The resource policy is an IAM policy created on behalf of the resource owner when they share a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcePolicyRequest;
import org.openapis.openapi.models.operations.GetResourcePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourcePolicyRequest req = new GetResourcePolicyRequest("quaerat") {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "esse";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "provident";
                xAmzSignature = "a";
                xAmzSignedHeaders = "nulla";
            }};            

            GetResourcePolicyResponse res = sdk.sdk.getResourcePolicy(req);

            if (res.getResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRule

Retrieves information about listener rules. You can also retrieve information about the default listener rule. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRuleRequest;
import org.openapis.openapi.models.operations.GetRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRuleRequest req = new GetRuleRequest("esse", "quasi", "a") {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "sint";
                xAmzCredential = "pariatur";
                xAmzDate = "possimus";
                xAmzSecurityToken = "quia";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "asperiores";
            }};            

            GetRuleResponse res = sdk.sdk.getRule(req);

            if (res.getRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getService

Retrieves information about the specified service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceRequest;
import org.openapis.openapi.models.operations.GetServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceRequest req = new GetServiceRequest("veritatis") {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "similique";
                xAmzDate = "culpa";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "quae";
            }};            

            GetServiceResponse res = sdk.sdk.getService(req);

            if (res.getServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceNetwork

Retrieves information about the specified service network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceNetworkRequest;
import org.openapis.openapi.models.operations.GetServiceNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceNetworkRequest req = new GetServiceNetworkRequest("vel") {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "eius";
                xAmzCredential = "libero";
                xAmzDate = "illum";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "aliquam";
            }};            

            GetServiceNetworkResponse res = sdk.sdk.getServiceNetwork(req);

            if (res.getServiceNetworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceNetworkServiceAssociation

Retrieves information about the specified association between a service network and a service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceNetworkServiceAssociationRequest;
import org.openapis.openapi.models.operations.GetServiceNetworkServiceAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceNetworkServiceAssociationRequest req = new GetServiceNetworkServiceAssociationRequest("dicta") {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ullam";
                xAmzDate = "nisi";
                xAmzSecurityToken = "aut";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "qui";
            }};            

            GetServiceNetworkServiceAssociationResponse res = sdk.sdk.getServiceNetworkServiceAssociation(req);

            if (res.getServiceNetworkServiceAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceNetworkVpcAssociation

Retrieves information about the association between a service network and a VPC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceNetworkVpcAssociationRequest;
import org.openapis.openapi.models.operations.GetServiceNetworkVpcAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceNetworkVpcAssociationRequest req = new GetServiceNetworkVpcAssociationRequest("ex") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "dolorum";
                xAmzDate = "architecto";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "quasi";
            }};            

            GetServiceNetworkVpcAssociationResponse res = sdk.sdk.getServiceNetworkVpcAssociation(req);

            if (res.getServiceNetworkVpcAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTargetGroup

Retrieves information about the specified target group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTargetGroupRequest;
import org.openapis.openapi.models.operations.GetTargetGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTargetGroupRequest req = new GetTargetGroupRequest("et") {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "minima";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "iste";
            }};            

            GetTargetGroupResponse res = sdk.sdk.getTargetGroup(req);

            if (res.getTargetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccessLogSubscriptions

Lists all access log subscriptions for the specified service network or service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccessLogSubscriptionsRequest;
import org.openapis.openapi.models.operations.ListAccessLogSubscriptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccessLogSubscriptionsRequest req = new ListAccessLogSubscriptionsRequest("accusantium") {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "aut";
                xAmzCredential = "laudantium";
                xAmzDate = "eum";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "corrupti";
                maxResults = 251941L;
                nextToken = "voluptatem";
            }};            

            ListAccessLogSubscriptionsResponse res = sdk.sdk.listAccessLogSubscriptions(req);

            if (res.listAccessLogSubscriptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listListeners

Lists the listeners for the specified service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListListenersRequest;
import org.openapis.openapi.models.operations.ListListenersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListListenersRequest req = new ListListenersRequest("occaecati") {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "explicabo";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "aut";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "dicta";
                maxResults = 981640L;
                nextToken = "natus";
            }};            

            ListListenersResponse res = sdk.sdk.listListeners(req);

            if (res.listListenersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRules

Lists the rules for the listener.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRulesRequest;
import org.openapis.openapi.models.operations.ListRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRulesRequest req = new ListRulesRequest("voluptatibus", "voluptas") {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "ea";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "officia";
                maxResults = 807023L;
                nextToken = "dignissimos";
            }};            

            ListRulesResponse res = sdk.sdk.listRules(req);

            if (res.listRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceNetworkServiceAssociations

<p>Lists the associations between the service network and the service. You can filter the list either by service or service network. You must provide either the service network identifier or the service identifier.</p> <p>Every association in Amazon VPC Lattice is given a unique Amazon Resource Name (ARN), such as when a service network is associated with a VPC or when a service is associated with a service network. If the association is for a resource that is shared with another account, the association will include the local account ID as the prefix in the ARN for each account the resource is shared with.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceNetworkServiceAssociationsRequest;
import org.openapis.openapi.models.operations.ListServiceNetworkServiceAssociationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServiceNetworkServiceAssociationsRequest req = new ListServiceNetworkServiceAssociationsRequest() {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "quae";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "porro";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "labore";
                maxResults = 70447L;
                nextToken = "adipisci";
                serviceIdentifier = "fuga";
                serviceNetworkIdentifier = "id";
            }};            

            ListServiceNetworkServiceAssociationsResponse res = sdk.sdk.listServiceNetworkServiceAssociations(req);

            if (res.listServiceNetworkServiceAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceNetworkVpcAssociations

Lists the service network and VPC associations. You can filter the list either by VPC or service network. You must provide either the service network identifier or the VPC identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceNetworkVpcAssociationsRequest;
import org.openapis.openapi.models.operations.ListServiceNetworkVpcAssociationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServiceNetworkVpcAssociationsRequest req = new ListServiceNetworkVpcAssociationsRequest() {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "est";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "totam";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "vel";
                maxResults = 497678L;
                nextToken = "quos";
                serviceNetworkIdentifier = "vel";
                vpcIdentifier = "labore";
            }};            

            ListServiceNetworkVpcAssociationsResponse res = sdk.sdk.listServiceNetworkVpcAssociations(req);

            if (res.listServiceNetworkVpcAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceNetworks

Lists the service networks owned by the caller account or shared with the caller account. Also includes the account ID in the ARN to show which account owns the service network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceNetworksRequest;
import org.openapis.openapi.models.operations.ListServiceNetworksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServiceNetworksRequest req = new ListServiceNetworksRequest() {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "cum";
                xAmzCredential = "commodi";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "assumenda";
                maxResults = 363161L;
                nextToken = "recusandae";
            }};            

            ListServiceNetworksResponse res = sdk.sdk.listServiceNetworks(req);

            if (res.listServiceNetworksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServices

Lists the services owned by the caller account or shared with the caller account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServicesRequest;
import org.openapis.openapi.models.operations.ListServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServicesRequest req = new ListServicesRequest() {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "cum";
                xAmzCredential = "consectetur";
                xAmzDate = "in";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "facere";
                maxResults = 257233L;
                nextToken = "doloribus";
            }};            

            ListServicesResponse res = sdk.sdk.listServices(req);

            if (res.listServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags for the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("reiciendis") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "necessitatibus";
                xAmzDate = "dolore";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "adipisci";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTargetGroups

Lists your target groups. You can narrow your search by using the filters below in your request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTargetGroupsRequest;
import org.openapis.openapi.models.operations.ListTargetGroupsResponse;
import org.openapis.openapi.models.operations.ListTargetGroupsTargetGroupTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTargetGroupsRequest req = new ListTargetGroupsRequest() {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "dignissimos";
                xAmzDate = "a";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "corporis";
                maxResults = 689768L;
                nextToken = "laboriosam";
                targetGroupType = ListTargetGroupsTargetGroupTypeEnum.IP;
                vpcIdentifier = "voluptates";
            }};            

            ListTargetGroupsResponse res = sdk.sdk.listTargetGroups(req);

            if (res.listTargetGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTargets

Lists the targets for the target group. By default, all targets are included. You can use this API to check the health status of targets. You can also ﬁlter the results by target. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTargetsRequest;
import org.openapis.openapi.models.operations.ListTargetsRequestBody;
import org.openapis.openapi.models.operations.ListTargetsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTargetsRequest req = new ListTargetsRequest(                new ListTargetsRequestBody() {{
                                targets = new org.openapis.openapi.models.shared.Target[]{{
                                    add(new Target("nobis") {{
                                        id = "ea426555-ba3c-4287-84ed-53b88f3a8d8f";
                                        port = 348783L;
                                    }}),
                                }};
                            }};, "sit") {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "sed";
                xAmzCredential = "reiciendis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "voluptate";
                maxResults = 709072L;
                nextToken = "ab";
            }};            

            ListTargetsResponse res = sdk.sdk.listTargets(req);

            if (res.listTargetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAuthPolicy

Creates or updates the auth policy. The policy string in JSON must not contain newlines or blank lines.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAuthPolicyRequest;
import org.openapis.openapi.models.operations.PutAuthPolicyRequestBody;
import org.openapis.openapi.models.operations.PutAuthPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAuthPolicyRequest req = new PutAuthPolicyRequest(                new PutAuthPolicyRequestBody("dolore");, "laborum") {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "in";
                xAmzCredential = "commodi";
                xAmzDate = "quidem";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "unde";
            }};            

            PutAuthPolicyResponse res = sdk.sdk.putAuthPolicy(req);

            if (res.putAuthPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResourcePolicy

Attaches a resource-based permission policy to a service or service network. The policy must contain the same actions and condition statements as the Amazon Web Services Resource Access Manager permission for sharing services and service networks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResourcePolicyRequest;
import org.openapis.openapi.models.operations.PutResourcePolicyRequestBody;
import org.openapis.openapi.models.operations.PutResourcePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourcePolicyRequest req = new PutResourcePolicyRequest(                new PutResourcePolicyRequestBody("suscipit");, "sapiente") {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "illo";
                xAmzCredential = "reiciendis";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "incidunt";
            }};            

            PutResourcePolicyResponse res = sdk.sdk.putResourcePolicy(req);

            if (res.putResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerTargets

Registers the targets with the target group. If it's a Lambda target, you can only have one target in a target group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterTargetsRequest;
import org.openapis.openapi.models.operations.RegisterTargetsRequestBody;
import org.openapis.openapi.models.operations.RegisterTargetsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterTargetsRequest req = new RegisterTargetsRequest(                new RegisterTargetsRequestBody(                new org.openapis.openapi.models.shared.Target[]{{
                                                add(new Target("saepe") {{
                                                    id = "4e3698f4-47f6-403e-8b44-5e80ca55efd2";
                                                    port = 48690L;
                                                }}),
                                                add(new Target("consequatur") {{
                                                    id = "457e1858-b6a8-49fb-a3a5-aa8e4824d0ab";
                                                    port = 299643L;
                                                }}),
                                                add(new Target("amet") {{
                                                    id = "75088e51-8620-465e-904f-3b1194b8abf6";
                                                    port = 2703L;
                                                }}),
                                            }});, "deserunt") {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "unde";
                xAmzCredential = "reiciendis";
                xAmzDate = "provident";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "voluptates";
            }};            

            RegisterTargetsResponse res = sdk.sdk.registerTargets(req);

            if (res.registerTargetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds the specified tags to the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("quidem", "reprehenderit");
                                                put("facere", "fuga");
                                                put("praesentium", "mollitia");
                                            }});, "veniam") {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "repudiandae";
                xAmzDate = "quasi";
                xAmzSecurityToken = "atque";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "asperiores";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes the specified tags from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("suscipit",                 new String[]{{
                                add("maxime"),
                                add("et"),
                                add("esse"),
                            }}) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "ea";
                xAmzDate = "atque";
                xAmzSecurityToken = "error";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "officiis";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccessLogSubscription

Updates the specified access log subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccessLogSubscriptionRequest;
import org.openapis.openapi.models.operations.UpdateAccessLogSubscriptionRequestBody;
import org.openapis.openapi.models.operations.UpdateAccessLogSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAccessLogSubscriptionRequest req = new UpdateAccessLogSubscriptionRequest(                new UpdateAccessLogSubscriptionRequestBody("natus");, "minima") {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "ex";
                xAmzCredential = "maiores";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "at";
                xAmzSignature = "error";
                xAmzSignedHeaders = "blanditiis";
            }};            

            UpdateAccessLogSubscriptionResponse res = sdk.sdk.updateAccessLogSubscription(req);

            if (res.updateAccessLogSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateListener

Updates the specified listener for the specified service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateListenerRequest;
import org.openapis.openapi.models.operations.UpdateListenerRequestBody;
import org.openapis.openapi.models.operations.UpdateListenerRequestBodyDefaultAction;
import org.openapis.openapi.models.operations.UpdateListenerResponse;
import org.openapis.openapi.models.shared.FixedResponseAction;
import org.openapis.openapi.models.shared.ForwardAction;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeightedTargetGroup;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateListenerRequest req = new UpdateListenerRequest(                new UpdateListenerRequestBody(                new UpdateListenerRequestBodyDefaultAction() {{
                                                fixedResponse = new FixedResponseAction(922348L);;
                                                forward = new ForwardAction(                new org.openapis.openapi.models.shared.WeightedTargetGroup[]{{
                                                                    add(new WeightedTargetGroup("recusandae") {{
                                                                        targetGroupIdentifier = "atque";
                                                                        weight = 120919L;
                                                                    }}),
                                                                    add(new WeightedTargetGroup("labore") {{
                                                                        targetGroupIdentifier = "dolorum";
                                                                        weight = 829898L;
                                                                    }}),
                                                                    add(new WeightedTargetGroup("repudiandae") {{
                                                                        targetGroupIdentifier = "reiciendis";
                                                                        weight = 42976L;
                                                                    }}),
                                                                }});;
                                            }};);, "dicta", "accusantium") {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "enim";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "velit";
                xAmzSignature = "a";
                xAmzSignedHeaders = "molestias";
            }};            

            UpdateListenerResponse res = sdk.sdk.updateListener(req);

            if (res.updateListenerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRule

Updates a rule for the listener. You can't modify a default listener rule. To modify a default listener rule, use <code>UpdateListener</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRuleRequest;
import org.openapis.openapi.models.operations.UpdateRuleRequestBody;
import org.openapis.openapi.models.operations.UpdateRuleRequestBodyAction;
import org.openapis.openapi.models.operations.UpdateRuleRequestBodyMatch;
import org.openapis.openapi.models.operations.UpdateRuleResponse;
import org.openapis.openapi.models.shared.FixedResponseAction;
import org.openapis.openapi.models.shared.ForwardAction;
import org.openapis.openapi.models.shared.HeaderMatch;
import org.openapis.openapi.models.shared.HeaderMatchType;
import org.openapis.openapi.models.shared.HttpMatch;
import org.openapis.openapi.models.shared.PathMatch;
import org.openapis.openapi.models.shared.PathMatchType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeightedTargetGroup;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRuleRequest req = new UpdateRuleRequest(                new UpdateRuleRequestBody() {{
                                action = new UpdateRuleRequestBodyAction() {{
                                    fixedResponse = new FixedResponseAction(906355L);;
                                    forward = new ForwardAction(                new org.openapis.openapi.models.shared.WeightedTargetGroup[]{{
                                                        add(new WeightedTargetGroup("perspiciatis") {{
                                                            targetGroupIdentifier = "occaecati";
                                                            weight = 886305L;
                                                        }}),
                                                    }});;
                                }};;
                                match = new UpdateRuleRequestBodyMatch() {{
                                    httpMatch = new HttpMatch() {{
                                        headerMatches = new org.openapis.openapi.models.shared.HeaderMatch[]{{
                                            add(new HeaderMatch(                new HeaderMatchType() {{
                                                                contains = "error";
                                                                exact = "illo";
                                                                prefix = "corporis";
                                                            }};, "quidem") {{
                                                caseSensitive = false;
                                                match = new HeaderMatchType() {{
                                                    contains = "adipisci";
                                                    exact = "eveniet";
                                                    prefix = "occaecati";
                                                }};
                                                name = "Beverly Olson";
                                            }}),
                                            add(new HeaderMatch(                new HeaderMatchType() {{
                                                                contains = "eveniet";
                                                                exact = "qui";
                                                                prefix = "cum";
                                                            }};, "iure") {{
                                                caseSensitive = false;
                                                match = new HeaderMatchType() {{
                                                    contains = "eveniet";
                                                    exact = "non";
                                                    prefix = "vero";
                                                }};
                                                name = "Vera Beier IV";
                                            }}),
                                        }};
                                        method = "necessitatibus";
                                        pathMatch = new PathMatch(                new PathMatchType() {{
                                                            exact = "ratione";
                                                            prefix = "laborum";
                                                        }};) {{
                                            caseSensitive = false;
                                        }};;
                                    }};;
                                }};;
                                priority = 715208L;
                            }};, "voluptatum", "rem", "aliquam") {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "alias";
                xAmzDate = "corporis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "mollitia";
            }};            

            UpdateRuleResponse res = sdk.sdk.updateRule(req);

            if (res.updateRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateService

Updates the specified service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceRequestBody;
import org.openapis.openapi.models.operations.UpdateServiceRequestBodyAuthTypeEnum;
import org.openapis.openapi.models.operations.UpdateServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest(                new UpdateServiceRequestBody() {{
                                authType = UpdateServiceRequestBodyAuthTypeEnum.NONE;
                                certificateArn = "maiores";
                            }};, "reiciendis") {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "id";
                xAmzCredential = "minima";
                xAmzDate = "dolore";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "quae";
            }};            

            UpdateServiceResponse res = sdk.sdk.updateService(req);

            if (res.updateServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceNetwork

Updates the specified service network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceNetworkRequest;
import org.openapis.openapi.models.operations.UpdateServiceNetworkRequestBody;
import org.openapis.openapi.models.operations.UpdateServiceNetworkRequestBodyAuthTypeEnum;
import org.openapis.openapi.models.operations.UpdateServiceNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceNetworkRequest req = new UpdateServiceNetworkRequest(                new UpdateServiceNetworkRequestBody(UpdateServiceNetworkRequestBodyAuthTypeEnum.AWS_IAM);, "quaerat") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "ex";
                xAmzCredential = "ut";
                xAmzDate = "culpa";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "laudantium";
            }};            

            UpdateServiceNetworkResponse res = sdk.sdk.updateServiceNetwork(req);

            if (res.updateServiceNetworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceNetworkVpcAssociation

Updates the service network and VPC association. If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceNetworkVpcAssociationRequest;
import org.openapis.openapi.models.operations.UpdateServiceNetworkVpcAssociationRequestBody;
import org.openapis.openapi.models.operations.UpdateServiceNetworkVpcAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceNetworkVpcAssociationRequest req = new UpdateServiceNetworkVpcAssociationRequest(                new UpdateServiceNetworkVpcAssociationRequestBody(                new String[]{{
                                                add("recusandae"),
                                                add("esse"),
                                            }});, "provident") {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "eum";
                xAmzCredential = "reiciendis";
                xAmzDate = "provident";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "quasi";
            }};            

            UpdateServiceNetworkVpcAssociationResponse res = sdk.sdk.updateServiceNetworkVpcAssociation(req);

            if (res.updateServiceNetworkVpcAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTargetGroup

Updates the specified target group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTargetGroupRequest;
import org.openapis.openapi.models.operations.UpdateTargetGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateTargetGroupRequestBodyHealthCheck;
import org.openapis.openapi.models.operations.UpdateTargetGroupResponse;
import org.openapis.openapi.models.shared.HealthCheckProtocolVersionEnum;
import org.openapis.openapi.models.shared.Matcher;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetGroupProtocolEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTargetGroupRequest req = new UpdateTargetGroupRequest(                new UpdateTargetGroupRequestBody(                new UpdateTargetGroupRequestBodyHealthCheck() {{
                                                enabled = false;
                                                healthCheckIntervalSeconds = 343392L;
                                                healthCheckTimeoutSeconds = 652309L;
                                                healthyThresholdCount = 591027L;
                                                matcher = new Matcher() {{
                                                    httpCode = "possimus";
                                                }};;
                                                path = "animi";
                                                port = 402767L;
                                                protocol = TargetGroupProtocolEnum.HTTP;
                                                protocolVersion = HealthCheckProtocolVersionEnum.HTTP1;
                                                unhealthyThresholdCount = 999278L;
                                            }};);, "doloribus") {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "in";
                xAmzCredential = "nam";
                xAmzDate = "earum";
                xAmzSecurityToken = "officia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "placeat";
            }};            

            UpdateTargetGroupResponse res = sdk.sdk.updateTargetGroup(req);

            if (res.updateTargetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
