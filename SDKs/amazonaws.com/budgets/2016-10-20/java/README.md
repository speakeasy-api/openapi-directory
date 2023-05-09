# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBudgetRequest req = new CreateBudgetRequest(                new CreateBudgetRequest("provident",                 new Budget("distinctio", BudgetTypeEnum.SAVINGS_PLANS_COVERAGE, TimeUnitEnum.QUARTERLY) {{
                                                autoAdjustData = new AutoAdjustData(AutoAdjustTypeEnum.FORECAST) {{
                                                    historicalOptions = new HistoricalOptions(544883L) {{
                                                        lookBackAvailablePeriods = 847252L;
                                                    }};;
                                                    lastAutoAdjustTime = OffsetDateTime.parse("2022-05-18T09:34:54.894Z");
                                                }};;
                                                budgetLimit = new Spend("deserunt", "suscipit");;
                                                calculatedSpend = new CalculatedSpend(                new Spend("iure", "magnam");) {{
                                                    forecastedSpend = new Spend("debitis", "ipsa");;
                                                }};;
                                                costFilters = new java.util.HashMap<String, String[]>() {{
                                                    put("tempora", new String[]{{
                                                        add("molestiae"),
                                                        add("minus"),
                                                    }});
                                                    put("placeat", new String[]{{
                                                        add("iusto"),
                                                        add("excepturi"),
                                                        add("nisi"),
                                                    }});
                                                    put("recusandae", new String[]{{
                                                        add("ab"),
                                                        add("quis"),
                                                        add("veritatis"),
                                                        add("deserunt"),
                                                    }});
                                                    put("perferendis", new String[]{{
                                                        add("repellendus"),
                                                        add("sapiente"),
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
                                                lastUpdatedTime = OffsetDateTime.parse("2022-07-31T07:34:52.790Z");
                                                plannedBudgetLimits = new java.util.HashMap<String, org.openapis.openapi.models.shared.Spend>() {{
                                                    put("at", new Spend("quod", "quod") {{
                                                        amount = "maiores";
                                                        unit = "molestiae";
                                                    }});
                                                    put("esse", new Spend("dolorum", "dicta") {{
                                                        amount = "totam";
                                                        unit = "porro";
                                                    }});
                                                    put("nam", new Spend("fugit", "deleniti") {{
                                                        amount = "officia";
                                                        unit = "occaecati";
                                                    }});
                                                    put("hic", new Spend("beatae", "commodi") {{
                                                        amount = "optio";
                                                        unit = "totam";
                                                    }});
                                                }};
                                                timePeriod = new TimePeriod() {{
                                                    end = OffsetDateTime.parse("2022-09-26T10:29:33.503Z");
                                                    start = OffsetDateTime.parse("2022-03-24T09:42:46.236Z");
                                                }};;
                                            }};) {{
                                notificationsWithSubscribers = new org.openapis.openapi.models.shared.NotificationWithSubscribers[]{{
                                    add(new NotificationWithSubscribers(                new Notification(ComparisonOperatorEnum.GREATER_THAN, NotificationTypeEnum.ACTUAL, 9698.1) {{
                                                        notificationState = NotificationStateEnum.ALARM;
                                                        thresholdType = ThresholdTypeEnum.ABSOLUTE_VALUE;
                                                    }};,                 new org.openapis.openapi.models.shared.Subscriber[]{{
                                                        add(new Subscriber("corporis", SubscriptionTypeEnum.SNS) {{
                                                            address = "dolores";
                                                            subscriptionType = SubscriptionTypeEnum.SNS;
                                                        }}),
                                                        add(new Subscriber("omnis", SubscriptionTypeEnum.SNS) {{
                                                            address = "nobis";
                                                            subscriptionType = SubscriptionTypeEnum.SNS;
                                                        }}),
                                                        add(new Subscriber("accusantium", SubscriptionTypeEnum.SNS) {{
                                                            address = "minima";
                                                            subscriptionType = SubscriptionTypeEnum.EMAIL;
                                                        }}),
                                                    }}) {{
                                        notification = new Notification(ComparisonOperatorEnum.GREATER_THAN, NotificationTypeEnum.FORECASTED, 1496.75) {{
                                            comparisonOperator = ComparisonOperatorEnum.LESS_THAN;
                                            notificationState = NotificationStateEnum.OK;
                                            notificationType = NotificationTypeEnum.FORECASTED;
                                            threshold = 1352.18;
                                            thresholdType = ThresholdTypeEnum.PERCENTAGE;
                                        }};
                                        subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                            add(new Subscriber("laboriosam", SubscriptionTypeEnum.EMAIL) {{
                                                address = "dolor";
                                                subscriptionType = SubscriptionTypeEnum.EMAIL;
                                            }}),
                                            add(new Subscriber("in", SubscriptionTypeEnum.SNS) {{
                                                address = "saepe";
                                                subscriptionType = SubscriptionTypeEnum.EMAIL;
                                            }}),
                                            add(new Subscriber("saepe", SubscriptionTypeEnum.EMAIL) {{
                                                address = "iste";
                                                subscriptionType = SubscriptionTypeEnum.SNS;
                                            }}),
                                        }};
                                    }}),
                                    add(new NotificationWithSubscribers(                new Notification(ComparisonOperatorEnum.GREATER_THAN, NotificationTypeEnum.FORECASTED, 3687.25) {{
                                                        notificationState = NotificationStateEnum.ALARM;
                                                        thresholdType = ThresholdTypeEnum.ABSOLUTE_VALUE;
                                                    }};,                 new org.openapis.openapi.models.shared.Subscriber[]{{
                                                        add(new Subscriber("temporibus", SubscriptionTypeEnum.EMAIL) {{
                                                            address = "quasi";
                                                            subscriptionType = SubscriptionTypeEnum.EMAIL;
                                                        }}),
                                                    }}) {{
                                        notification = new Notification(ComparisonOperatorEnum.GREATER_THAN, NotificationTypeEnum.FORECASTED, 1613.09) {{
                                            comparisonOperator = ComparisonOperatorEnum.LESS_THAN;
                                            notificationState = NotificationStateEnum.ALARM;
                                            notificationType = NotificationTypeEnum.FORECASTED;
                                            threshold = 1020.44;
                                            thresholdType = ThresholdTypeEnum.ABSOLUTE_VALUE;
                                        }};
                                        subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                            add(new Subscriber("numquam", SubscriptionTypeEnum.SNS) {{
                                                address = "mollitia";
                                                subscriptionType = SubscriptionTypeEnum.EMAIL;
                                            }}),
                                            add(new Subscriber("velit", SubscriptionTypeEnum.EMAIL) {{
                                                address = "quam";
                                                subscriptionType = SubscriptionTypeEnum.SNS;
                                            }}),
                                            add(new Subscriber("vitae", SubscriptionTypeEnum.EMAIL) {{
                                                address = "quia";
                                                subscriptionType = SubscriptionTypeEnum.SNS;
                                            }}),
                                            add(new Subscriber("odit", SubscriptionTypeEnum.EMAIL) {{
                                                address = "animi";
                                                subscriptionType = SubscriptionTypeEnum.SNS;
                                            }}),
                                        }};
                                    }}),
                                    add(new NotificationWithSubscribers(                new Notification(ComparisonOperatorEnum.EQUAL_TO, NotificationTypeEnum.ACTUAL, 8804.76) {{
                                                        notificationState = NotificationStateEnum.OK;
                                                        thresholdType = ThresholdTypeEnum.ABSOLUTE_VALUE;
                                                    }};,                 new org.openapis.openapi.models.shared.Subscriber[]{{
                                                        add(new Subscriber("molestias", SubscriptionTypeEnum.EMAIL) {{
                                                            address = "ipsum";
                                                            subscriptionType = SubscriptionTypeEnum.EMAIL;
                                                        }}),
                                                    }}) {{
                                        notification = new Notification(ComparisonOperatorEnum.LESS_THAN, NotificationTypeEnum.FORECASTED, 557.14) {{
                                            comparisonOperator = ComparisonOperatorEnum.GREATER_THAN;
                                            notificationState = NotificationStateEnum.ALARM;
                                            notificationType = NotificationTypeEnum.FORECASTED;
                                            threshold = 8781.94;
                                            thresholdType = ThresholdTypeEnum.PERCENTAGE;
                                        }};
                                        subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                            add(new Subscriber("perferendis", SubscriptionTypeEnum.SNS) {{
                                                address = "voluptate";
                                                subscriptionType = SubscriptionTypeEnum.EMAIL;
                                            }}),
                                            add(new Subscriber("maiores", SubscriptionTypeEnum.SNS) {{
                                                address = "reprehenderit";
                                                subscriptionType = SubscriptionTypeEnum.SNS;
                                            }}),
                                            add(new Subscriber("iusto", SubscriptionTypeEnum.SNS) {{
                                                address = "corporis";
                                                subscriptionType = SubscriptionTypeEnum.SNS;
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};, CreateBudgetXAmzTargetEnum.AWS_BUDGET_SERVICE_GATEWAY_CREATE_BUDGET) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            CreateBudgetResponse res = sdk.createBudget(req);

            if (res.createBudgetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createBudget](docs/sdk/README.md#createbudget) - <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
* [createBudgetAction](docs/sdk/README.md#createbudgetaction) -  Creates a budget action. 
* [createNotification](docs/sdk/README.md#createnotification) - Creates a notification. You must create the budget before you create the associated notification.
* [createSubscriber](docs/sdk/README.md#createsubscriber) - Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
* [deleteBudget](docs/sdk/README.md#deletebudget) - <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
* [deleteBudgetAction](docs/sdk/README.md#deletebudgetaction) -  Deletes a budget action. 
* [deleteNotification](docs/sdk/README.md#deletenotification) - <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
* [deleteSubscriber](docs/sdk/README.md#deletesubscriber) - <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
* [describeBudget](docs/sdk/README.md#describebudget) - <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
* [describeBudgetAction](docs/sdk/README.md#describebudgetaction) -  Describes a budget action detail. 
* [describeBudgetActionHistories](docs/sdk/README.md#describebudgetactionhistories) -  Describes a budget action history detail. 
* [describeBudgetActionsForAccount](docs/sdk/README.md#describebudgetactionsforaccount) -  Describes all of the budget actions for an account. 
* [describeBudgetActionsForBudget](docs/sdk/README.md#describebudgetactionsforbudget) -  Describes all of the budget actions for a budget. 
* [describeBudgetNotificationsForAccount](docs/sdk/README.md#describebudgetnotificationsforaccount) -  Lists the budget names and notifications that are associated with an account. 
* [describeBudgetPerformanceHistory](docs/sdk/README.md#describebudgetperformancehistory) - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* [describeBudgets](docs/sdk/README.md#describebudgets) - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* [describeNotificationsForBudget](docs/sdk/README.md#describenotificationsforbudget) - Lists the notifications that are associated with a budget.
* [describeSubscribersForNotification](docs/sdk/README.md#describesubscribersfornotification) - Lists the subscribers that are associated with a notification.
* [executeBudgetAction](docs/sdk/README.md#executebudgetaction) -  Executes a budget action. 
* [updateBudget](docs/sdk/README.md#updatebudget) - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* [updateBudgetAction](docs/sdk/README.md#updatebudgetaction) -  Updates a budget action. 
* [updateNotification](docs/sdk/README.md#updatenotification) - Updates a notification.
* [updateSubscriber](docs/sdk/README.md#updatesubscriber) - Updates a subscriber.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
