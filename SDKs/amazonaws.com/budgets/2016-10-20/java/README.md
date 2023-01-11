# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateBudgetRequest req = new CreateBudgetRequest() {{
                headers = new CreateBudgetHeaders() {{
                    xAmzAlgorithm = "ea";
                    xAmzContentSha256 = "ad";
                    xAmzCredential = "et";
                    xAmzDate = "nemo";
                    xAmzSecurityToken = "illo";
                    xAmzSignature = "animi";
                    xAmzSignedHeaders = "earum";
                    xAmzTarget = "AWSBudgetServiceGateway.CreateBudget";
                }};
                request = new CreateBudgetRequest() {{
                    accountId = "vero";
                    budget = new Budget() {{
                        budgetLimit = new Spend() {{
                            amount = "et";
                            unit = "quam";
                        }};
                        budgetName = "iste";
                        budgetType = "SAVINGS_PLANS_UTILIZATION";
                        calculatedSpend = new CalculatedSpend() {{
                            actualSpend = new Spend() {{
                                amount = "eos";
                                unit = "aut";
                            }};
                            forecastedSpend = new Spend() {{
                                amount = "ut";
                                unit = "enim";
                            }};
                        }};
                        costFilters = new java.util.HashMap<String, String[]>() {{
                            put("cupiditate", new String[]() {{
                                add("id"),
                                add("molestiae"),
                            }});
                        }};
                        costTypes = new CostTypes() {{
                            includeCredit = true;
                            includeDiscount = true;
                            includeOtherSubscription = false;
                            includeRecurring = false;
                            includeRefund = false;
                            includeSubscription = true;
                            includeSupport = true;
                            includeTax = false;
                            includeUpfront = true;
                            useAmortized = true;
                            useBlended = true;
                        }};
                        lastUpdatedTime = "2020-04-04T17:02:02Z";
                        plannedBudgetLimits = new java.util.HashMap<String, openapisdk.models.shared.Spend>() {{
                            put("modi", new Spend() {{
                                amount = "dolor";
                                unit = "omnis";
                            }});
                            put("explicabo", new Spend() {{
                                amount = "voluptatum";
                                unit = "quia";
                            }});
                            put("perferendis", new Spend() {{
                                amount = "temporibus";
                                unit = "incidunt";
                            }});
                        }};
                        timePeriod = new TimePeriod() {{
                            end = "1983-11-22T04:40:57Z";
                            start = "2006-01-09T19:38:06Z";
                        }};
                        timeUnit = "QUARTERLY";
                    }};
                    notificationsWithSubscribers = new openapisdk.models.shared.NotificationWithSubscribers[]() {{
                        add(new NotificationWithSubscribers() {{
                            notification = new Notification() {{
                                comparisonOperator = "EQUAL_TO";
                                notificationState = "OK";
                                notificationType = "FORECASTED";
                                threshold = 7.100000;
                                thresholdType = "ABSOLUTE_VALUE";
                            }};
                            subscribers = new openapisdk.models.shared.Subscriber[]() {{
                                add(new Subscriber() {{
                                    address = "iste";
                                    subscriptionType = "EMAIL";
                                }}),
                            }};
                        }}),
                    }};
                }};
            }};

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
## SDK Available Operations

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
* `describeBudgetPerformanceHistory` - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* `describeBudgets` - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* `describeNotificationsForBudget` - Lists the notifications that are associated with a budget.
* `describeSubscribersForNotification` - Lists the subscribers that are associated with a notification.
* `executeBudgetAction` -  Executes a budget action. 
* `updateBudget` - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until AWS has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* `updateBudgetAction` -  Updates a budget action. 
* `updateNotification` - Updates a notification.
* `updateSubscriber` - Updates a subscriber.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
