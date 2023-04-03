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

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateBudgetXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateBudgetRequest;
import org.openapis.openapi.models.operations.CreateBudgetResponse;
import org.openapis.openapi.models.shared.CreateBudgetRequest;
import org.openapis.openapi.models.shared.NotificationWithSubscribers;
import org.openapis.openapi.models.shared.Subscriber;
import org.openapis.openapi.models.shared.SubscriptionTypeEnum;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.ThresholdTypeEnum;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.NotificationStateEnum;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.Budget;
import org.openapis.openapi.models.shared.TimeUnitEnum;
import org.openapis.openapi.models.shared.TimePeriod;
import org.openapis.openapi.models.shared.Spend;
import org.openapis.openapi.models.shared.CostTypes;
import org.openapis.openapi.models.shared.CalculatedSpend;
import org.openapis.openapi.models.shared.BudgetTypeEnum;
import org.openapis.openapi.models.shared.AutoAdjustData;
import org.openapis.openapi.models.shared.HistoricalOptions;
import org.openapis.openapi.models.shared.AutoAdjustTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBudgetRequest req = new CreateBudgetRequest() {{
                createBudgetRequest = new CreateBudgetRequest() {{
                    accountId = "corrupti";
                    budget = new Budget() {{
                        autoAdjustData = new AutoAdjustData() {{
                            autoAdjustType = "FORECAST";
                            historicalOptions = new HistoricalOptions() {{
                                budgetAdjustmentPeriod = 715190;
                                lookBackAvailablePeriods = 844266;
                            }};
                            lastAutoAdjustTime = "2021-04-14T16:47:33.722Z";
                        }};
                        budgetLimit = new Spend() {{
                            amount = "corrupti";
                            unit = "illum";
                        }};
                        budgetName = "vel";
                        budgetType = "RI_COVERAGE";
                        calculatedSpend = new CalculatedSpend() {{
                            actualSpend = new Spend() {{
                                amount = "deserunt";
                                unit = "suscipit";
                            }};
                            forecastedSpend = new Spend() {{
                                amount = "iure";
                                unit = "magnam";
                            }};
                        }};
                        costFilters = new java.util.HashMap<String, String[]>() {{
                            put("ipsa", new String[]{{
                                add("tempora"),
                                add("suscipit"),
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
                        }};
                        lastUpdatedTime = "2022-07-31T07:34:52.790Z";
                        plannedBudgetLimits = new java.util.HashMap<String, org.openapis.openapi.models.shared.Spend>() {{
                            put("at", new Spend() {{
                                amount = "maiores";
                                unit = "molestiae";
                            }});
                            put("quod", new Spend() {{
                                amount = "quod";
                                unit = "esse";
                            }});
                            put("totam", new Spend() {{
                                amount = "porro";
                                unit = "dolorum";
                            }});
                            put("dicta", new Spend() {{
                                amount = "nam";
                                unit = "officia";
                            }});
                        }};
                        timePeriod = new TimePeriod() {{
                            end = "2022-09-18T08:27:00.721Z";
                            start = "2021-02-10T09:24:01.909Z";
                        }};
                        timeUnit = "ANNUALLY";
                    }};
                    notificationsWithSubscribers = new org.openapis.openapi.models.shared.NotificationWithSubscribers[]{{
                        add(new NotificationWithSubscribers() {{
                            notification = new Notification() {{
                                comparisonOperator = "GREATER_THAN";
                                notificationState = "OK";
                                notificationType = "ACTUAL";
                                threshold = 2645.55;
                                thresholdType = "PERCENTAGE";
                            }};
                            subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                add(new Subscriber() {{
                                    address = "cum";
                                    subscriptionType = "SNS";
                                }}),
                                add(new Subscriber() {{
                                    address = "ipsum";
                                    subscriptionType = "EMAIL";
                                }}),
                                add(new Subscriber() {{
                                    address = "aspernatur";
                                    subscriptionType = "SNS";
                                }}),
                                add(new Subscriber() {{
                                    address = "ad";
                                    subscriptionType = "EMAIL";
                                }}),
                            }};
                        }}),
                        add(new NotificationWithSubscribers() {{
                            notification = new Notification() {{
                                comparisonOperator = "GREATER_THAN";
                                notificationState = "ALARM";
                                notificationType = "ACTUAL";
                                threshold = 6169.34;
                                thresholdType = "PERCENTAGE";
                            }};
                            subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                add(new Subscriber() {{
                                    address = "saepe";
                                    subscriptionType = "EMAIL";
                                }}),
                                add(new Subscriber() {{
                                    address = "in";
                                    subscriptionType = "SNS";
                                }}),
                                add(new Subscriber() {{
                                    address = "iste";
                                    subscriptionType = "SNS";
                                }}),
                                add(new Subscriber() {{
                                    address = "saepe";
                                    subscriptionType = "EMAIL";
                                }}),
                            }};
                        }}),
                        add(new NotificationWithSubscribers() {{
                            notification = new Notification() {{
                                comparisonOperator = "GREATER_THAN";
                                notificationState = "OK";
                                notificationType = "FORECASTED";
                                threshold = 6667.67;
                                thresholdType = "ABSOLUTE_VALUE";
                            }};
                            subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                add(new Subscriber() {{
                                    address = "dolores";
                                    subscriptionType = "SNS";
                                }}),
                                add(new Subscriber() {{
                                    address = "corporis";
                                    subscriptionType = "SNS";
                                }}),
                                add(new Subscriber() {{
                                    address = "nobis";
                                    subscriptionType = "SNS";
                                }}),
                            }};
                        }}),
                    }};
                }};
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
                xAmzTarget = "AWSBudgetServiceGateway.CreateBudget";
            }}            

            CreateBudgetResponse res = sdk.createBudget(req);

            if (res.createBudgetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createBudget` - <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
* `createBudgetAction` -  Creates a budget action. 
* `createNotification` - Creates a notification. You must create the budget before you create the associated notification.
* `createSubscriber` - Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
* `deleteBudget` - <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
* `deleteBudgetAction` -  Deletes a budget action. 
* `deleteNotification` - <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
* `deleteSubscriber` - <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
* `describeBudget` - <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
* `describeBudgetAction` -  Describes a budget action detail. 
* `describeBudgetActionHistories` -  Describes a budget action history detail. 
* `describeBudgetActionsForAccount` -  Describes all of the budget actions for an account. 
* `describeBudgetActionsForBudget` -  Describes all of the budget actions for a budget. 
* `describeBudgetNotificationsForAccount` -  Lists the budget names and notifications that are associated with an account. 
* `describeBudgetPerformanceHistory` - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* `describeBudgets` - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* `describeNotificationsForBudget` - Lists the notifications that are associated with a budget.
* `describeSubscribersForNotification` - Lists the subscribers that are associated with a notification.
* `executeBudgetAction` -  Executes a budget action. 
* `updateBudget` - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* `updateBudgetAction` -  Updates a budget action. 
* `updateNotification` - Updates a notification.
* `updateSubscriber` - Updates a subscriber.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
