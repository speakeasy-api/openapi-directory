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