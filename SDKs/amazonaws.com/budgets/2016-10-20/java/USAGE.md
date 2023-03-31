<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateBudgetXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateBudgetHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateBudgetRequest req = new CreateBudgetRequest() {{
                headers = new CreateBudgetHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSBudgetServiceGateway.CreateBudget";
                }};
                request = new CreateBudgetRequest() {{
                    accountId = "illum";
                    budget = new Budget() {{
                        autoAdjustData = new AutoAdjustData() {{
                            autoAdjustType = "HISTORICAL";
                            historicalOptions = new HistoricalOptions() {{
                                budgetAdjustmentPeriod = 623564;
                                lookBackAvailablePeriods = 645894;
                            }};
                            lastAutoAdjustTime = "2022-07-25T06:44:09.184Z";
                        }};
                        budgetLimit = new Spend() {{
                            amount = "magnam";
                            unit = "debitis";
                        }};
                        budgetName = "ipsa";
                        budgetType = "SAVINGS_PLANS_COVERAGE";
                        calculatedSpend = new CalculatedSpend() {{
                            actualSpend = new Spend() {{
                                amount = "tempora";
                                unit = "suscipit";
                            }};
                            forecastedSpend = new Spend() {{
                                amount = "molestiae";
                                unit = "minus";
                            }};
                        }};
                        costFilters = new java.util.HashMap<String, String[]>() {{
                            put("voluptatum", new String[]{{
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
                            put("quo", new String[]{{
                                add("at"),
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
                        lastUpdatedTime = "2020-01-25T09:54:35.794Z";
                        plannedBudgetLimits = new java.util.HashMap<String, org.openapis.openapi.models.shared.Spend>() {{
                            put("quod", new Spend() {{
                                amount = "quod";
                                unit = "esse";
                            }});
                            put("totam", new Spend() {{
                                amount = "porro";
                                unit = "dolorum";
                            }});
                        }};
                        timePeriod = new TimePeriod() {{
                            end = "2022-04-12T23:15:28.420Z";
                            start = "2021-11-02T03:00:47.309Z";
                        }};
                        timeUnit = "DAILY";
                    }};
                    notificationsWithSubscribers = new org.openapis.openapi.models.shared.NotificationWithSubscribers[]{{
                        add(new NotificationWithSubscribers() {{
                            notification = new Notification() {{
                                comparisonOperator = "EQUAL_TO";
                                notificationState = "ALARM";
                                notificationType = "FORECASTED";
                                threshold = 1059.07;
                                thresholdType = "PERCENTAGE";
                            }};
                            subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                add(new Subscriber() {{
                                    address = "modi";
                                    subscriptionType = "SNS";
                                }}),
                                add(new Subscriber() {{
                                    address = "impedit";
                                    subscriptionType = "EMAIL";
                                }}),
                            }};
                        }}),
                        add(new NotificationWithSubscribers() {{
                            notification = new Notification() {{
                                comparisonOperator = "LESS_THAN";
                                notificationState = "OK";
                                notificationType = "FORECASTED";
                                threshold = 1352.18;
                                thresholdType = "PERCENTAGE";
                            }};
                            subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                add(new Subscriber() {{
                                    address = "natus";
                                    subscriptionType = "SNS";
                                }}),
                                add(new Subscriber() {{
                                    address = "iste";
                                    subscriptionType = "SNS";
                                }}),
                            }};
                        }}),
                        add(new NotificationWithSubscribers() {{
                            notification = new Notification() {{
                                comparisonOperator = "LESS_THAN";
                                notificationState = "OK";
                                notificationType = "FORECASTED";
                                threshold = 9025.99;
                                thresholdType = "ABSOLUTE_VALUE";
                            }};
                            subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                add(new Subscriber() {{
                                    address = "corporis";
                                    subscriptionType = "EMAIL";
                                }}),
                                add(new Subscriber() {{
                                    address = "iure";
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