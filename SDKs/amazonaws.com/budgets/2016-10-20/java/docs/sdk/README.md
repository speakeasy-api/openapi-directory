# SDK

## Overview

<p>Use the Amazon Web Services Budgets API to plan your service usage, service costs, and instance reservations. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for the Amazon Web Services Budgets feature. </p> <p>Budgets provide you with a way to see the following information:</p> <ul> <li> <p>How close your plan is to your budgeted amount or to the free tier limits</p> </li> <li> <p>Your usage-to-date, including how much you've used of your Reserved Instances (RIs)</p> </li> <li> <p>Your current estimated charges from Amazon Web Services, and how much your predicted usage will accrue in charges by the end of the month</p> </li> <li> <p>How much of your budget has been used</p> </li> </ul> <p>Amazon Web Services updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:</p> <ul> <li> <p> <b>Cost budgets</b> - Plan how much you want to spend on a service.</p> </li> <li> <p> <b>Usage budgets</b> - Plan how much you want to use one or more services.</p> </li> <li> <p> <b>RI utilization budgets</b> - Define a utilization threshold, and receive alerts when your RI usage falls below that threshold. This lets you see if your RIs are unused or under-utilized.</p> </li> <li> <p> <b>RI coverage budgets</b> - Define a coverage threshold, and receive alerts when the number of your instance hours that are covered by RIs fall below that threshold. This lets you see how much of your instance usage is covered by a reservation.</p> </li> </ul> <p>Service Endpoint</p> <p>The Amazon Web Services Budgets API provides the following endpoint:</p> <ul> <li> <p>https://budgets.amazonaws.com</p> </li> </ul> <p>For information about costs that are associated with the Amazon Web Services Budgets API, see <a href="https://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost Management Pricing</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/budgets/>
### Available Operations

* [createBudget](#createbudget) - <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
* [createBudgetAction](#createbudgetaction) -  Creates a budget action. 
* [createNotification](#createnotification) - Creates a notification. You must create the budget before you create the associated notification.
* [createSubscriber](#createsubscriber) - Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
* [deleteBudget](#deletebudget) - <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
* [deleteBudgetAction](#deletebudgetaction) -  Deletes a budget action. 
* [deleteNotification](#deletenotification) - <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
* [deleteSubscriber](#deletesubscriber) - <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
* [describeBudget](#describebudget) - <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
* [describeBudgetAction](#describebudgetaction) -  Describes a budget action detail. 
* [describeBudgetActionHistories](#describebudgetactionhistories) -  Describes a budget action history detail. 
* [describeBudgetActionsForAccount](#describebudgetactionsforaccount) -  Describes all of the budget actions for an account. 
* [describeBudgetActionsForBudget](#describebudgetactionsforbudget) -  Describes all of the budget actions for a budget. 
* [describeBudgetNotificationsForAccount](#describebudgetnotificationsforaccount) -  Lists the budget names and notifications that are associated with an account. 
* [describeBudgetPerformanceHistory](#describebudgetperformancehistory) - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* [describeBudgets](#describebudgets) - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* [describeNotificationsForBudget](#describenotificationsforbudget) - Lists the notifications that are associated with a budget.
* [describeSubscribersForNotification](#describesubscribersfornotification) - Lists the subscribers that are associated with a notification.
* [executeBudgetAction](#executebudgetaction) -  Executes a budget action. 
* [updateBudget](#updatebudget) - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* [updateBudgetAction](#updatebudgetaction) -  Updates a budget action. 
* [updateNotification](#updatenotification) - Updates a notification.
* [updateSubscriber](#updatesubscriber) - Updates a subscriber.

## createBudget

<p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBudgetRequest;
import org.openapis.openapi.models.operations.CreateBudgetResponse;
import org.openapis.openapi.models.operations.CreateBudgetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoAdjustData;
import org.openapis.openapi.models.shared.AutoAdjustTypeEnum;
import org.openapis.openapi.models.shared.Budget;
import org.openapis.openapi.models.shared.BudgetTypeEnum;
import org.openapis.openapi.models.shared.CalculatedSpend;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.CostTypes;
import org.openapis.openapi.models.shared.CreateBudgetRequest;
import org.openapis.openapi.models.shared.HistoricalOptions;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.NotificationStateEnum;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.NotificationWithSubscribers;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Spend;
import org.openapis.openapi.models.shared.Subscriber;
import org.openapis.openapi.models.shared.SubscriptionTypeEnum;
import org.openapis.openapi.models.shared.ThresholdTypeEnum;
import org.openapis.openapi.models.shared.TimePeriod;
import org.openapis.openapi.models.shared.TimeUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBudgetRequest req = new CreateBudgetRequest(                new CreateBudgetRequest("veritatis",                 new Budget("itaque", BudgetTypeEnum.COST, TimeUnitEnum.MONTHLY) {{
                                                autoAdjustData = new AutoAdjustData(AutoAdjustTypeEnum.HISTORICAL) {{
                                                    historicalOptions = new HistoricalOptions(667411L) {{
                                                        lookBackAvailablePeriods = 842342L;
                                                    }};;
                                                    lastAutoAdjustTime = OffsetDateTime.parse("2022-05-09T18:45:16.013Z");
                                                }};;
                                                budgetLimit = new Spend("distinctio", "quibusdam");;
                                                calculatedSpend = new CalculatedSpend(                new Spend("labore", "modi");) {{
                                                    forecastedSpend = new Spend("qui", "aliquid");;
                                                }};;
                                                costFilters = new java.util.HashMap<String, String[]>() {{
                                                    put("quos", new String[]{{
                                                        add("magni"),
                                                    }});
                                                    put("assumenda", new String[]{{
                                                        add("alias"),
                                                        add("fugit"),
                                                    }});
                                                    put("dolorum", new String[]{{
                                                        add("tempora"),
                                                        add("facilis"),
                                                        add("tempore"),
                                                    }});
                                                }};
                                                costTypes = new CostTypes() {{
                                                    includeCredit = false;
                                                    includeDiscount = false;
                                                    includeOtherSubscription = false;
                                                    includeRecurring = false;
                                                    includeRefund = false;
                                                    includeSubscription = false;
                                                    includeSupport = false;
                                                    includeTax = false;
                                                    includeUpfront = false;
                                                    useAmortized = false;
                                                    useBlended = false;
                                                }};;
                                                lastUpdatedTime = OffsetDateTime.parse("2022-01-14T19:13:42.009Z");
                                                plannedBudgetLimits = new java.util.HashMap<String, org.openapis.openapi.models.shared.Spend>() {{
                                                    put("non", new Spend("aliquid", "provident") {{
                                                        amount = "eligendi";
                                                        unit = "sint";
                                                    }});
                                                    put("necessitatibus", new Spend("dolor", "debitis") {{
                                                        amount = "sint";
                                                        unit = "officia";
                                                    }});
                                                }};
                                                timePeriod = new TimePeriod() {{
                                                    end = OffsetDateTime.parse("2020-12-17T08:08:22.040Z");
                                                    start = OffsetDateTime.parse("2022-07-21T01:01:39.776Z");
                                                }};;
                                            }};) {{
                                notificationsWithSubscribers = new org.openapis.openapi.models.shared.NotificationWithSubscribers[]{{
                                    add(new NotificationWithSubscribers(                new Notification(ComparisonOperatorEnum.EQUAL_TO, NotificationTypeEnum.ACTUAL, 6439.9) {{
                                                        notificationState = NotificationStateEnum.OK;
                                                        thresholdType = ThresholdTypeEnum.PERCENTAGE;
                                                    }};,                 new org.openapis.openapi.models.shared.Subscriber[]{{
                                                        add(new Subscriber("perferendis", SubscriptionTypeEnum.SNS) {{
                                                            address = "omnis";
                                                            subscriptionType = SubscriptionTypeEnum.SNS;
                                                        }}),
                                                        add(new Subscriber("id", SubscriptionTypeEnum.SNS) {{
                                                            address = "magnam";
                                                            subscriptionType = SubscriptionTypeEnum.EMAIL;
                                                        }}),
                                                        add(new Subscriber("natus", SubscriptionTypeEnum.EMAIL) {{
                                                            address = "labore";
                                                            subscriptionType = SubscriptionTypeEnum.SNS;
                                                        }}),
                                                    }}) {{
                                        notification = new Notification(ComparisonOperatorEnum.EQUAL_TO, NotificationTypeEnum.ACTUAL, 3965.06) {{
                                            comparisonOperator = ComparisonOperatorEnum.EQUAL_TO;
                                            notificationState = NotificationStateEnum.ALARM;
                                            notificationType = NotificationTypeEnum.ACTUAL;
                                            threshold = 2974.37;
                                            thresholdType = ThresholdTypeEnum.ABSOLUTE_VALUE;
                                        }};
                                        subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                            add(new Subscriber("occaecati", SubscriptionTypeEnum.SNS) {{
                                                address = "accusamus";
                                                subscriptionType = SubscriptionTypeEnum.SNS;
                                            }}),
                                            add(new Subscriber("quidem", SubscriptionTypeEnum.EMAIL) {{
                                                address = "accusamus";
                                                subscriptionType = SubscriptionTypeEnum.EMAIL;
                                            }}),
                                            add(new Subscriber("blanditiis", SubscriptionTypeEnum.EMAIL) {{
                                                address = "nam";
                                                subscriptionType = SubscriptionTypeEnum.EMAIL;
                                            }}),
                                        }};
                                    }}),
                                    add(new NotificationWithSubscribers(                new Notification(ComparisonOperatorEnum.GREATER_THAN, NotificationTypeEnum.ACTUAL, 9840.43) {{
                                                        notificationState = NotificationStateEnum.ALARM;
                                                        thresholdType = ThresholdTypeEnum.PERCENTAGE;
                                                    }};,                 new org.openapis.openapi.models.shared.Subscriber[]{{
                                                        add(new Subscriber("in", SubscriptionTypeEnum.SNS) {{
                                                            address = "deleniti";
                                                            subscriptionType = SubscriptionTypeEnum.EMAIL;
                                                        }}),
                                                        add(new Subscriber("ullam", SubscriptionTypeEnum.EMAIL) {{
                                                            address = "architecto";
                                                            subscriptionType = SubscriptionTypeEnum.EMAIL;
                                                        }}),
                                                        add(new Subscriber("quibusdam", SubscriptionTypeEnum.SNS) {{
                                                            address = "nihil";
                                                            subscriptionType = SubscriptionTypeEnum.EMAIL;
                                                        }}),
                                                        add(new Subscriber("accusantium", SubscriptionTypeEnum.SNS) {{
                                                            address = "saepe";
                                                            subscriptionType = SubscriptionTypeEnum.EMAIL;
                                                        }}),
                                                    }}) {{
                                        notification = new Notification(ComparisonOperatorEnum.GREATER_THAN, NotificationTypeEnum.FORECASTED, 3540.47) {{
                                            comparisonOperator = ComparisonOperatorEnum.LESS_THAN;
                                            notificationState = NotificationStateEnum.ALARM;
                                            notificationType = NotificationTypeEnum.ACTUAL;
                                            threshold = 1028.63;
                                            thresholdType = ThresholdTypeEnum.PERCENTAGE;
                                        }};
                                        subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                            add(new Subscriber("accusantium", SubscriptionTypeEnum.EMAIL) {{
                                                address = "quos";
                                                subscriptionType = SubscriptionTypeEnum.EMAIL;
                                            }}),
                                            add(new Subscriber("ad", SubscriptionTypeEnum.SNS) {{
                                                address = "reiciendis";
                                                subscriptionType = SubscriptionTypeEnum.EMAIL;
                                            }}),
                                            add(new Subscriber("odit", SubscriptionTypeEnum.SNS) {{
                                                address = "dolor";
                                                subscriptionType = SubscriptionTypeEnum.EMAIL;
                                            }}),
                                        }};
                                    }}),
                                    add(new NotificationWithSubscribers(                new Notification(ComparisonOperatorEnum.LESS_THAN, NotificationTypeEnum.ACTUAL, 7220.56) {{
                                                        notificationState = NotificationStateEnum.OK;
                                                        thresholdType = ThresholdTypeEnum.ABSOLUTE_VALUE;
                                                    }};,                 new org.openapis.openapi.models.shared.Subscriber[]{{
                                                        add(new Subscriber("fugiat", SubscriptionTypeEnum.SNS) {{
                                                            address = "voluptatibus";
                                                            subscriptionType = SubscriptionTypeEnum.SNS;
                                                        }}),
                                                        add(new Subscriber("corporis", SubscriptionTypeEnum.EMAIL) {{
                                                            address = "aut";
                                                            subscriptionType = SubscriptionTypeEnum.EMAIL;
                                                        }}),
                                                    }}) {{
                                        notification = new Notification(ComparisonOperatorEnum.EQUAL_TO, NotificationTypeEnum.FORECASTED, 8073.19) {{
                                            comparisonOperator = ComparisonOperatorEnum.LESS_THAN;
                                            notificationState = NotificationStateEnum.ALARM;
                                            notificationType = NotificationTypeEnum.ACTUAL;
                                            threshold = 1238.2;
                                            thresholdType = ThresholdTypeEnum.ABSOLUTE_VALUE;
                                        }};
                                        subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                            add(new Subscriber("ea", SubscriptionTypeEnum.SNS) {{
                                                address = "excepturi";
                                                subscriptionType = SubscriptionTypeEnum.SNS;
                                            }}),
                                            add(new Subscriber("quidem", SubscriptionTypeEnum.SNS) {{
                                                address = "ab";
                                                subscriptionType = SubscriptionTypeEnum.EMAIL;
                                            }}),
                                        }};
                                    }}),
                                    add(new NotificationWithSubscribers(                new Notification(ComparisonOperatorEnum.LESS_THAN, NotificationTypeEnum.ACTUAL, 8745.73) {{
                                                        notificationState = NotificationStateEnum.OK;
                                                        thresholdType = ThresholdTypeEnum.ABSOLUTE_VALUE;
                                                    }};,                 new org.openapis.openapi.models.shared.Subscriber[]{{
                                                        add(new Subscriber("perspiciatis", SubscriptionTypeEnum.SNS) {{
                                                            address = "omnis";
                                                            subscriptionType = SubscriptionTypeEnum.EMAIL;
                                                        }}),
                                                        add(new Subscriber("blanditiis", SubscriptionTypeEnum.EMAIL) {{
                                                            address = "porro";
                                                            subscriptionType = SubscriptionTypeEnum.SNS;
                                                        }}),
                                                        add(new Subscriber("rerum", SubscriptionTypeEnum.SNS) {{
                                                            address = "eaque";
                                                            subscriptionType = SubscriptionTypeEnum.EMAIL;
                                                        }}),
                                                        add(new Subscriber("modi", SubscriptionTypeEnum.EMAIL) {{
                                                            address = "asperiores";
                                                            subscriptionType = SubscriptionTypeEnum.EMAIL;
                                                        }}),
                                                    }}) {{
                                        notification = new Notification(ComparisonOperatorEnum.LESS_THAN, NotificationTypeEnum.ACTUAL, 3389.85) {{
                                            comparisonOperator = ComparisonOperatorEnum.EQUAL_TO;
                                            notificationState = NotificationStateEnum.ALARM;
                                            notificationType = NotificationTypeEnum.ACTUAL;
                                            threshold = 3394.04;
                                            thresholdType = ThresholdTypeEnum.ABSOLUTE_VALUE;
                                        }};
                                        subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                            add(new Subscriber("dolores", SubscriptionTypeEnum.EMAIL) {{
                                                address = "eos";
                                                subscriptionType = SubscriptionTypeEnum.SNS;
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};, CreateBudgetXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_CREATE_BUDGET) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "pariatur";
                xAmzDate = "provident";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "delectus";
            }};            

            CreateBudgetResponse res = sdk.sdk.createBudget(req);

            if (res.createBudgetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBudgetAction

 Creates a budget action. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBudgetActionRequest;
import org.openapis.openapi.models.operations.CreateBudgetActionResponse;
import org.openapis.openapi.models.operations.CreateBudgetActionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionSubTypeEnum;
import org.openapis.openapi.models.shared.ActionThreshold;
import org.openapis.openapi.models.shared.ActionTypeEnum;
import org.openapis.openapi.models.shared.ApprovalModelEnum;
import org.openapis.openapi.models.shared.CreateBudgetActionRequest;
import org.openapis.openapi.models.shared.Definition;
import org.openapis.openapi.models.shared.IamActionDefinition;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.ScpActionDefinition;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SsmActionDefinition;
import org.openapis.openapi.models.shared.Subscriber;
import org.openapis.openapi.models.shared.SubscriptionTypeEnum;
import org.openapis.openapi.models.shared.ThresholdTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBudgetActionRequest req = new CreateBudgetActionRequest(                new CreateBudgetActionRequest("quos",                 new ActionThreshold(ThresholdTypeEnum.PERCENTAGE, 2123.9);, ActionTypeEnum.APPLY_IAM_POLICY, ApprovalModelEnum.AUTOMATIC, "qui",                 new Definition() {{
                                                iamActionDefinition = new IamActionDefinition("ipsum") {{
                                                    groups = new String[]{{
                                                        add("excepturi"),
                                                        add("cum"),
                                                        add("voluptate"),
                                                        add("dignissimos"),
                                                    }};
                                                    roles = new String[]{{
                                                        add("amet"),
                                                        add("dolorum"),
                                                        add("numquam"),
                                                        add("veritatis"),
                                                    }};
                                                    users = new String[]{{
                                                        add("ipsa"),
                                                    }};
                                                }};;
                                                scpActionDefinition = new ScpActionDefinition("iure",                 new String[]{{
                                                                    add("quaerat"),
                                                                    add("accusamus"),
                                                                }});;
                                                ssmActionDefinition = new SsmActionDefinition(ActionSubTypeEnum.STOP_RDS_INSTANCES,                 new String[]{{
                                                                    add("voluptas"),
                                                                    add("natus"),
                                                                    add("eos"),
                                                                    add("atque"),
                                                                }}, "sit");;
                                            }};, "fugiat", NotificationTypeEnum.ACTUAL,                 new org.openapis.openapi.models.shared.Subscriber[]{{
                                                add(new Subscriber("voluptate", SubscriptionTypeEnum.EMAIL) {{
                                                    address = "dolorum";
                                                    subscriptionType = SubscriptionTypeEnum.SNS;
                                                }}),
                                                add(new Subscriber("necessitatibus", SubscriptionTypeEnum.EMAIL) {{
                                                    address = "deleniti";
                                                    subscriptionType = SubscriptionTypeEnum.EMAIL;
                                                }}),
                                                add(new Subscriber("ipsum", SubscriptionTypeEnum.SNS) {{
                                                    address = "asperiores";
                                                    subscriptionType = SubscriptionTypeEnum.SNS;
                                                }}),
                                            }});, CreateBudgetActionXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_CREATE_BUDGET_ACTION) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "eius";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "optio";
            }};            

            CreateBudgetActionResponse res = sdk.sdk.createBudgetAction(req);

            if (res.createBudgetActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNotification

Creates a notification. You must create the budget before you create the associated notification.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNotificationRequest;
import org.openapis.openapi.models.operations.CreateNotificationResponse;
import org.openapis.openapi.models.operations.CreateNotificationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.CreateNotificationRequest;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.NotificationStateEnum;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Subscriber;
import org.openapis.openapi.models.shared.SubscriptionTypeEnum;
import org.openapis.openapi.models.shared.ThresholdTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNotificationRequest req = new CreateNotificationRequest(                new CreateNotificationRequest("ad", "saepe",                 new Notification(ComparisonOperatorEnum.LESS_THAN, NotificationTypeEnum.FORECASTED, 5883.17) {{
                                                notificationState = NotificationStateEnum.OK;
                                                thresholdType = ThresholdTypeEnum.ABSOLUTE_VALUE;
                                            }};,                 new org.openapis.openapi.models.shared.Subscriber[]{{
                                                add(new Subscriber("at", SubscriptionTypeEnum.SNS) {{
                                                    address = "similique";
                                                    subscriptionType = SubscriptionTypeEnum.SNS;
                                                }}),
                                                add(new Subscriber("quod", SubscriptionTypeEnum.EMAIL) {{
                                                    address = "tempora";
                                                    subscriptionType = SubscriptionTypeEnum.SNS;
                                                }}),
                                                add(new Subscriber("a", SubscriptionTypeEnum.SNS) {{
                                                    address = "qui";
                                                    subscriptionType = SubscriptionTypeEnum.EMAIL;
                                                }}),
                                            }});, CreateNotificationXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_CREATE_NOTIFICATION) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "ipsum";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "tempore";
            }};            

            CreateNotificationResponse res = sdk.sdk.createNotification(req);

            if (res.createNotificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubscriber

Creates a subscriber. You must create the associated budget and notification before you create the subscriber.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubscriberRequest;
import org.openapis.openapi.models.operations.CreateSubscriberResponse;
import org.openapis.openapi.models.operations.CreateSubscriberXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.CreateSubscriberRequest;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.NotificationStateEnum;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Subscriber;
import org.openapis.openapi.models.shared.SubscriptionTypeEnum;
import org.openapis.openapi.models.shared.ThresholdTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSubscriberRequest req = new CreateSubscriberRequest(                new CreateSubscriberRequest("numquam", "enim",                 new Notification(ComparisonOperatorEnum.GREATER_THAN, NotificationTypeEnum.FORECASTED, 5182.01) {{
                                                notificationState = NotificationStateEnum.OK;
                                                thresholdType = ThresholdTypeEnum.PERCENTAGE;
                                            }};,                 new Subscriber("expedita", SubscriptionTypeEnum.SNS););, CreateSubscriberXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_CREATE_SUBSCRIBER) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "vel";
                xAmzCredential = "libero";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "ipsum";
            }};            

            CreateSubscriberResponse res = sdk.sdk.createSubscriber(req);

            if (res.createSubscriberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBudget

<p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBudgetRequest;
import org.openapis.openapi.models.operations.DeleteBudgetResponse;
import org.openapis.openapi.models.operations.DeleteBudgetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteBudgetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBudgetRequest req = new DeleteBudgetRequest(                new DeleteBudgetRequest("qui", "cupiditate");, DeleteBudgetXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_DELETE_BUDGET) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "soluta";
                xAmzDate = "dicta";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "incidunt";
            }};            

            DeleteBudgetResponse res = sdk.sdk.deleteBudget(req);

            if (res.deleteBudgetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBudgetAction

 Deletes a budget action. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBudgetActionRequest;
import org.openapis.openapi.models.operations.DeleteBudgetActionResponse;
import org.openapis.openapi.models.operations.DeleteBudgetActionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteBudgetActionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBudgetActionRequest req = new DeleteBudgetActionRequest(                new DeleteBudgetActionRequest("dolores", "distinctio", "facilis");, DeleteBudgetActionXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_DELETE_BUDGET_ACTION) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "quam";
                xAmzCredential = "molestias";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "qui";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "fugit";
            }};            

            DeleteBudgetActionResponse res = sdk.sdk.deleteBudgetAction(req);

            if (res.deleteBudgetActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNotification

<p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNotificationRequest;
import org.openapis.openapi.models.operations.DeleteNotificationResponse;
import org.openapis.openapi.models.operations.DeleteNotificationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.DeleteNotificationRequest;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.NotificationStateEnum;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ThresholdTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNotificationRequest req = new DeleteNotificationRequest(                new DeleteNotificationRequest("odio", "sunt",                 new Notification(ComparisonOperatorEnum.LESS_THAN, NotificationTypeEnum.FORECASTED, 9404.32) {{
                                                notificationState = NotificationStateEnum.OK;
                                                thresholdType = ThresholdTypeEnum.ABSOLUTE_VALUE;
                                            }};);, DeleteNotificationXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_DELETE_NOTIFICATION) {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "et";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "nobis";
            }};            

            DeleteNotificationResponse res = sdk.sdk.deleteNotification(req);

            if (res.deleteNotificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubscriber

<p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubscriberRequest;
import org.openapis.openapi.models.operations.DeleteSubscriberResponse;
import org.openapis.openapi.models.operations.DeleteSubscriberXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.DeleteSubscriberRequest;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.NotificationStateEnum;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Subscriber;
import org.openapis.openapi.models.shared.SubscriptionTypeEnum;
import org.openapis.openapi.models.shared.ThresholdTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSubscriberRequest req = new DeleteSubscriberRequest(                new DeleteSubscriberRequest("tempore", "cupiditate",                 new Notification(ComparisonOperatorEnum.GREATER_THAN, NotificationTypeEnum.FORECASTED, 2091.57) {{
                                                notificationState = NotificationStateEnum.OK;
                                                thresholdType = ThresholdTypeEnum.PERCENTAGE;
                                            }};,                 new Subscriber("adipisci", SubscriptionTypeEnum.EMAIL););, DeleteSubscriberXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_DELETE_SUBSCRIBER) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "quae";
                xAmzCredential = "aut";
                xAmzDate = "quas";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "est";
            }};            

            DeleteSubscriberResponse res = sdk.sdk.deleteSubscriber(req);

            if (res.deleteSubscriberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBudget

<p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBudgetRequest;
import org.openapis.openapi.models.operations.DescribeBudgetResponse;
import org.openapis.openapi.models.operations.DescribeBudgetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBudgetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBudgetRequest req = new DescribeBudgetRequest(                new DescribeBudgetRequest("porro", "doloribus");, DescribeBudgetXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "cupiditate";
                xAmzDate = "qui";
                xAmzSecurityToken = "quae";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "odio";
            }};            

            DescribeBudgetResponse res = sdk.sdk.describeBudget(req);

            if (res.describeBudgetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBudgetAction

 Describes a budget action detail. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBudgetActionRequest;
import org.openapis.openapi.models.operations.DescribeBudgetActionResponse;
import org.openapis.openapi.models.operations.DescribeBudgetActionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBudgetActionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBudgetActionRequest req = new DescribeBudgetActionRequest(                new DescribeBudgetActionRequest("voluptatibus", "quisquam", "vero");, DescribeBudgetActionXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET_ACTION) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "quis";
                xAmzCredential = "ipsum";
                xAmzDate = "delectus";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "vero";
            }};            

            DescribeBudgetActionResponse res = sdk.sdk.describeBudgetAction(req);

            if (res.describeBudgetActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBudgetActionHistories

 Describes a budget action history detail. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBudgetActionHistoriesRequest;
import org.openapis.openapi.models.operations.DescribeBudgetActionHistoriesResponse;
import org.openapis.openapi.models.operations.DescribeBudgetActionHistoriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBudgetActionHistoriesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimePeriod;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBudgetActionHistoriesRequest req = new DescribeBudgetActionHistoriesRequest(                new DescribeBudgetActionHistoriesRequest("dignissimos", "hic", "distinctio") {{
                                maxResults = 799203L;
                                nextToken = "odio";
                                timePeriod = new TimePeriod() {{
                                    end = OffsetDateTime.parse("2021-08-01T18:14:10.863Z");
                                    start = OffsetDateTime.parse("2021-07-04T12:52:28.765Z");
                                }};;
                            }};, DescribeBudgetActionHistoriesXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET_ACTION_HISTORIES) {{
                maxResults = "dolore";
                nextToken = "quibusdam";
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "natus";
                xAmzDate = "impedit";
                xAmzSecurityToken = "aut";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "exercitationem";
            }};            

            DescribeBudgetActionHistoriesResponse res = sdk.sdk.describeBudgetActionHistories(req);

            if (res.describeBudgetActionHistoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBudgetActionsForAccount

 Describes all of the budget actions for an account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBudgetActionsForAccountRequest;
import org.openapis.openapi.models.operations.DescribeBudgetActionsForAccountResponse;
import org.openapis.openapi.models.operations.DescribeBudgetActionsForAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBudgetActionsForAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBudgetActionsForAccountRequest req = new DescribeBudgetActionsForAccountRequest(                new DescribeBudgetActionsForAccountRequest("fugit") {{
                                maxResults = 780427L;
                                nextToken = "maiores";
                            }};, DescribeBudgetActionsForAccountXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET_ACTIONS_FOR_ACCOUNT) {{
                maxResults = "doloribus";
                nextToken = "iusto";
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "alias";
                xAmzDate = "officia";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "ea";
            }};            

            DescribeBudgetActionsForAccountResponse res = sdk.sdk.describeBudgetActionsForAccount(req);

            if (res.describeBudgetActionsForAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBudgetActionsForBudget

 Describes all of the budget actions for a budget. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBudgetActionsForBudgetRequest;
import org.openapis.openapi.models.operations.DescribeBudgetActionsForBudgetResponse;
import org.openapis.openapi.models.operations.DescribeBudgetActionsForBudgetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBudgetActionsForBudgetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBudgetActionsForBudgetRequest req = new DescribeBudgetActionsForBudgetRequest(                new DescribeBudgetActionsForBudgetRequest("vel", "possimus") {{
                                maxResults = 297842L;
                                nextToken = "ratione";
                            }};, DescribeBudgetActionsForBudgetXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET_ACTIONS_FOR_BUDGET) {{
                maxResults = "ex";
                nextToken = "laudantium";
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "maiores";
                xAmzDate = "quasi";
                xAmzSecurityToken = "ex";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "excepturi";
            }};            

            DescribeBudgetActionsForBudgetResponse res = sdk.sdk.describeBudgetActionsForBudget(req);

            if (res.describeBudgetActionsForBudgetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBudgetNotificationsForAccount

 Lists the budget names and notifications that are associated with an account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBudgetNotificationsForAccountRequest;
import org.openapis.openapi.models.operations.DescribeBudgetNotificationsForAccountResponse;
import org.openapis.openapi.models.operations.DescribeBudgetNotificationsForAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBudgetNotificationsForAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBudgetNotificationsForAccountRequest req = new DescribeBudgetNotificationsForAccountRequest(                new DescribeBudgetNotificationsForAccountRequest("nostrum") {{
                                maxResults = 960835L;
                                nextToken = "quisquam";
                            }};, DescribeBudgetNotificationsForAccountXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET_NOTIFICATIONS_FOR_ACCOUNT) {{
                maxResults = "saepe";
                nextToken = "ea";
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "veniam";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "ea";
            }};            

            DescribeBudgetNotificationsForAccountResponse res = sdk.sdk.describeBudgetNotificationsForAccount(req);

            if (res.describeBudgetNotificationsForAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBudgetPerformanceHistory

Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBudgetPerformanceHistoryRequest;
import org.openapis.openapi.models.operations.DescribeBudgetPerformanceHistoryResponse;
import org.openapis.openapi.models.operations.DescribeBudgetPerformanceHistoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBudgetPerformanceHistoryRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimePeriod;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBudgetPerformanceHistoryRequest req = new DescribeBudgetPerformanceHistoryRequest(                new DescribeBudgetPerformanceHistoryRequest("consectetur", "recusandae") {{
                                maxResults = 132487L;
                                nextToken = "minima";
                                timePeriod = new TimePeriod() {{
                                    end = OffsetDateTime.parse("2022-01-18T04:51:10.466Z");
                                    start = OffsetDateTime.parse("2022-12-21T19:37:25.645Z");
                                }};;
                            }};, DescribeBudgetPerformanceHistoryXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET_PERFORMANCE_HISTORY) {{
                maxResults = "aut";
                nextToken = "deleniti";
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "fugit";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "non";
                xAmzSignedHeaders = "et";
            }};            

            DescribeBudgetPerformanceHistoryResponse res = sdk.sdk.describeBudgetPerformanceHistory(req);

            if (res.describeBudgetPerformanceHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBudgets

<p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBudgetsRequest;
import org.openapis.openapi.models.operations.DescribeBudgetsResponse;
import org.openapis.openapi.models.operations.DescribeBudgetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBudgetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBudgetsRequest req = new DescribeBudgetsRequest(                new DescribeBudgetsRequest("laborum") {{
                                maxResults = 810424L;
                                nextToken = "velit";
                            }};, DescribeBudgetsXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGETS) {{
                maxResults = "eum";
                nextToken = "autem";
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "quas";
                xAmzCredential = "assumenda";
                xAmzDate = "nulla";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "quasi";
            }};            

            DescribeBudgetsResponse res = sdk.sdk.describeBudgets(req);

            if (res.describeBudgetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeNotificationsForBudget

Lists the notifications that are associated with a budget.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeNotificationsForBudgetRequest;
import org.openapis.openapi.models.operations.DescribeNotificationsForBudgetResponse;
import org.openapis.openapi.models.operations.DescribeNotificationsForBudgetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeNotificationsForBudgetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeNotificationsForBudgetRequest req = new DescribeNotificationsForBudgetRequest(                new DescribeNotificationsForBudgetRequest("numquam", "explicabo") {{
                                maxResults = 591935L;
                                nextToken = "ipsa";
                            }};, DescribeNotificationsForBudgetXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_NOTIFICATIONS_FOR_BUDGET) {{
                maxResults = "molestiae";
                nextToken = "magnam";
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "eius";
                xAmzCredential = "esse";
                xAmzDate = "esse";
                xAmzSecurityToken = "rem";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            DescribeNotificationsForBudgetResponse res = sdk.sdk.describeNotificationsForBudget(req);

            if (res.describeNotificationsForBudgetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSubscribersForNotification

Lists the subscribers that are associated with a notification.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSubscribersForNotificationRequest;
import org.openapis.openapi.models.operations.DescribeSubscribersForNotificationResponse;
import org.openapis.openapi.models.operations.DescribeSubscribersForNotificationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.DescribeSubscribersForNotificationRequest;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.NotificationStateEnum;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ThresholdTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSubscribersForNotificationRequest req = new DescribeSubscribersForNotificationRequest(                new DescribeSubscribersForNotificationRequest("fugiat", "ut",                 new Notification(ComparisonOperatorEnum.LESS_THAN, NotificationTypeEnum.ACTUAL, 8268.71) {{
                                                notificationState = NotificationStateEnum.OK;
                                                thresholdType = ThresholdTypeEnum.ABSOLUTE_VALUE;
                                            }};) {{
                                maxResults = 788546L;
                                nextToken = "veritatis";
                            }};, DescribeSubscribersForNotificationXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_SUBSCRIBERS_FOR_NOTIFICATION) {{
                maxResults = "ipsa";
                nextToken = "id";
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "neque";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "quo";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "eius";
            }};            

            DescribeSubscribersForNotificationResponse res = sdk.sdk.describeSubscribersForNotification(req);

            if (res.describeSubscribersForNotificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## executeBudgetAction

 Executes a budget action. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExecuteBudgetActionRequest;
import org.openapis.openapi.models.operations.ExecuteBudgetActionResponse;
import org.openapis.openapi.models.operations.ExecuteBudgetActionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExecuteBudgetActionRequest;
import org.openapis.openapi.models.shared.ExecutionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExecuteBudgetActionRequest req = new ExecuteBudgetActionRequest(                new ExecuteBudgetActionRequest("voluptas", "ab", "cupiditate", ExecutionTypeEnum.APPROVE_BUDGET_ACTION);, ExecuteBudgetActionXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_EXECUTE_BUDGET_ACTION) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsam";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "esse";
            }};            

            ExecuteBudgetActionResponse res = sdk.sdk.executeBudgetAction(req);

            if (res.executeBudgetActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBudget

<p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBudgetRequest;
import org.openapis.openapi.models.operations.UpdateBudgetResponse;
import org.openapis.openapi.models.operations.UpdateBudgetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoAdjustData;
import org.openapis.openapi.models.shared.AutoAdjustTypeEnum;
import org.openapis.openapi.models.shared.Budget;
import org.openapis.openapi.models.shared.BudgetTypeEnum;
import org.openapis.openapi.models.shared.CalculatedSpend;
import org.openapis.openapi.models.shared.CostTypes;
import org.openapis.openapi.models.shared.HistoricalOptions;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Spend;
import org.openapis.openapi.models.shared.TimePeriod;
import org.openapis.openapi.models.shared.TimeUnitEnum;
import org.openapis.openapi.models.shared.UpdateBudgetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBudgetRequest req = new UpdateBudgetRequest(                new UpdateBudgetRequest("aperiam",                 new Budget("distinctio", BudgetTypeEnum.SAVINGS_PLANS_UTILIZATION, TimeUnitEnum.MONTHLY) {{
                                                autoAdjustData = new AutoAdjustData(AutoAdjustTypeEnum.HISTORICAL) {{
                                                    historicalOptions = new HistoricalOptions(469498L) {{
                                                        lookBackAvailablePeriods = 518835L;
                                                    }};;
                                                    lastAutoAdjustTime = OffsetDateTime.parse("2022-01-30T01:01:49.335Z");
                                                }};;
                                                budgetLimit = new Spend("odio", "occaecati");;
                                                calculatedSpend = new CalculatedSpend(                new Spend("commodi", "sapiente");) {{
                                                    forecastedSpend = new Spend("dolores", "deserunt");;
                                                }};;
                                                costFilters = new java.util.HashMap<String, String[]>() {{
                                                    put("accusantium", new String[]{{
                                                        add("eum"),
                                                        add("quas"),
                                                        add("praesentium"),
                                                        add("consequuntur"),
                                                    }});
                                                    put("deleniti", new String[]{{
                                                        add("fuga"),
                                                    }});
                                                }};
                                                costTypes = new CostTypes() {{
                                                    includeCredit = false;
                                                    includeDiscount = false;
                                                    includeOtherSubscription = false;
                                                    includeRecurring = false;
                                                    includeRefund = false;
                                                    includeSubscription = false;
                                                    includeSupport = false;
                                                    includeTax = false;
                                                    includeUpfront = false;
                                                    useAmortized = false;
                                                    useBlended = false;
                                                }};;
                                                lastUpdatedTime = OffsetDateTime.parse("2022-06-12T08:30:58.411Z");
                                                plannedBudgetLimits = new java.util.HashMap<String, org.openapis.openapi.models.shared.Spend>() {{
                                                    put("explicabo", new Spend("fugit", "sapiente") {{
                                                        amount = "minima";
                                                        unit = "nisi";
                                                    }});
                                                    put("consequuntur", new Spend("saepe", "occaecati") {{
                                                        amount = "ratione";
                                                        unit = "explicabo";
                                                    }});
                                                    put("atque", new Spend("eveniet", "accusamus") {{
                                                        amount = "et";
                                                        unit = "esse";
                                                    }});
                                                }};
                                                timePeriod = new TimePeriod() {{
                                                    end = OffsetDateTime.parse("2022-07-17T14:37:45.086Z");
                                                    start = OffsetDateTime.parse("2020-10-30T00:52:28.005Z");
                                                }};;
                                            }};);, UpdateBudgetXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_UPDATE_BUDGET) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "quasi";
                xAmzDate = "saepe";
                xAmzSecurityToken = "vel";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "molestiae";
            }};            

            UpdateBudgetResponse res = sdk.sdk.updateBudget(req);

            if (res.updateBudgetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBudgetAction

 Updates a budget action. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBudgetActionRequest;
import org.openapis.openapi.models.operations.UpdateBudgetActionResponse;
import org.openapis.openapi.models.operations.UpdateBudgetActionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionSubTypeEnum;
import org.openapis.openapi.models.shared.ActionThreshold;
import org.openapis.openapi.models.shared.ApprovalModelEnum;
import org.openapis.openapi.models.shared.Definition;
import org.openapis.openapi.models.shared.IamActionDefinition;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.ScpActionDefinition;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SsmActionDefinition;
import org.openapis.openapi.models.shared.Subscriber;
import org.openapis.openapi.models.shared.SubscriptionTypeEnum;
import org.openapis.openapi.models.shared.ThresholdTypeEnum;
import org.openapis.openapi.models.shared.UpdateBudgetActionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBudgetActionRequest req = new UpdateBudgetActionRequest(                new UpdateBudgetActionRequest("occaecati", "minima", "distinctio") {{
                                actionThreshold = new ActionThreshold(ThresholdTypeEnum.ABSOLUTE_VALUE, 270.69);;
                                approvalModel = ApprovalModelEnum.MANUAL;
                                definition = new Definition() {{
                                    iamActionDefinition = new IamActionDefinition("tempore") {{
                                        groups = new String[]{{
                                            add("cumque"),
                                        }};
                                        roles = new String[]{{
                                            add("consequatur"),
                                        }};
                                        users = new String[]{{
                                            add("quaerat"),
                                            add("sapiente"),
                                            add("consectetur"),
                                            add("esse"),
                                        }};
                                    }};;
                                    scpActionDefinition = new ScpActionDefinition("blanditiis",                 new String[]{{
                                                        add("a"),
                                                        add("nulla"),
                                                        add("quas"),
                                                    }});;
                                    ssmActionDefinition = new SsmActionDefinition(ActionSubTypeEnum.STOP_EC2_INSTANCES,                 new String[]{{
                                                        add("a"),
                                                    }}, "error");;
                                }};;
                                executionRoleArn = "sint";
                                notificationType = NotificationTypeEnum.FORECASTED;
                                subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                    add(new Subscriber("asperiores", SubscriptionTypeEnum.EMAIL) {{
                                        address = "quia";
                                        subscriptionType = SubscriptionTypeEnum.EMAIL;
                                    }}),
                                    add(new Subscriber("quasi", SubscriptionTypeEnum.EMAIL) {{
                                        address = "veritatis";
                                        subscriptionType = SubscriptionTypeEnum.SNS;
                                    }}),
                                    add(new Subscriber("tenetur", SubscriptionTypeEnum.SNS) {{
                                        address = "culpa";
                                        subscriptionType = SubscriptionTypeEnum.SNS;
                                    }}),
                                    add(new Subscriber("in", SubscriptionTypeEnum.SNS) {{
                                        address = "earum";
                                        subscriptionType = SubscriptionTypeEnum.SNS;
                                    }}),
                                }};
                            }};, UpdateBudgetActionXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_UPDATE_BUDGET_ACTION) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "illum";
                xAmzCredential = "soluta";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "dicta";
            }};            

            UpdateBudgetActionResponse res = sdk.sdk.updateBudgetAction(req);

            if (res.updateBudgetActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNotification

Updates a notification.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNotificationRequest;
import org.openapis.openapi.models.operations.UpdateNotificationResponse;
import org.openapis.openapi.models.operations.UpdateNotificationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.NotificationStateEnum;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ThresholdTypeEnum;
import org.openapis.openapi.models.shared.UpdateNotificationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNotificationRequest req = new UpdateNotificationRequest(                new UpdateNotificationRequest("reprehenderit", "ullam",                 new Notification(ComparisonOperatorEnum.LESS_THAN, NotificationTypeEnum.ACTUAL, 5318.49) {{
                                                notificationState = NotificationStateEnum.OK;
                                                thresholdType = ThresholdTypeEnum.ABSOLUTE_VALUE;
                                            }};,                 new Notification(ComparisonOperatorEnum.LESS_THAN, NotificationTypeEnum.FORECASTED, 9292.92) {{
                                                notificationState = NotificationStateEnum.ALARM;
                                                thresholdType = ThresholdTypeEnum.PERCENTAGE;
                                            }};);, UpdateNotificationXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_UPDATE_NOTIFICATION) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "quasi";
                xAmzDate = "at";
                xAmzSecurityToken = "et";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "ipsa";
            }};            

            UpdateNotificationResponse res = sdk.sdk.updateNotification(req);

            if (res.updateNotificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscriber

Updates a subscriber.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscriberRequest;
import org.openapis.openapi.models.operations.UpdateSubscriberResponse;
import org.openapis.openapi.models.operations.UpdateSubscriberXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.NotificationStateEnum;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Subscriber;
import org.openapis.openapi.models.shared.SubscriptionTypeEnum;
import org.openapis.openapi.models.shared.ThresholdTypeEnum;
import org.openapis.openapi.models.shared.UpdateSubscriberRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSubscriberRequest req = new UpdateSubscriberRequest(                new UpdateSubscriberRequest("veritatis", "consectetur",                 new Subscriber("adipisci", SubscriptionTypeEnum.EMAIL);,                 new Notification(ComparisonOperatorEnum.EQUAL_TO, NotificationTypeEnum.ACTUAL, 5223.71) {{
                                                notificationState = NotificationStateEnum.OK;
                                                thresholdType = ThresholdTypeEnum.ABSOLUTE_VALUE;
                                            }};,                 new Subscriber("eum", SubscriptionTypeEnum.EMAIL););, UpdateSubscriberXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_UPDATE_SUBSCRIBER) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "non";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "numquam";
            }};            

            UpdateSubscriberResponse res = sdk.sdk.updateSubscriber(req);

            if (res.updateSubscriberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
