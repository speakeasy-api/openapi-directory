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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSBudgetServiceGateway.CreateBudget";
                }};
                request = new CreateBudgetRequest() {{
                    accountId = "fugit";
                    budget = new Budget() {{
                        budgetLimit = new Spend() {{
                            amount = "et";
                            unit = "nihil";
                        }};
                        budgetName = "rerum";
                        budgetType = "SAVINGS_PLANS_COVERAGE";
                        calculatedSpend = new CalculatedSpend() {{
                            actualSpend = new Spend() {{
                                amount = "debitis";
                                unit = "voluptatum";
                            }};
                            forecastedSpend = new Spend() {{
                                amount = "et";
                                unit = "ut";
                            }};
                        }};
                        costFilters = new java.util.HashMap<String, String[]>() {{
                            put("et", new String[]() {{
                                add("iste"),
                            }});
                            put("vitae", new String[]() {{
                                add("dolores"),
                                add("illum"),
                                add("debitis"),
                            }});
                            put("vel", new String[]() {{
                                add("dolore"),
                            }});
                        }};
                        costTypes = new CostTypes() {{
                            includeCredit = false;
                            includeDiscount = true;
                            includeOtherSubscription = true;
                            includeRecurring = false;
                            includeRefund = false;
                            includeSubscription = true;
                            includeSupport = false;
                            includeTax = true;
                            includeUpfront = true;
                            useAmortized = true;
                            useBlended = false;
                        }};
                        lastUpdatedTime = "1987-09-29T10:21:53Z";
                        plannedBudgetLimits = new java.util.HashMap<String, openapisdk.models.shared.Spend>() {{
                            put("illo", new Spend() {{
                                amount = "sed";
                                unit = "officiis";
                            }});
                        }};
                        timePeriod = new TimePeriod() {{
                            end = "2017-04-22T14:51:53Z";
                            start = "1990-12-08T19:16:18Z";
                        }};
                        timeUnit = "MONTHLY";
                    }};
                    notificationsWithSubscribers = new openapisdk.models.shared.NotificationWithSubscribers[]() {{
                        add(new NotificationWithSubscribers() {{
                            notification = new Notification() {{
                                comparisonOperator = "LESS_THAN";
                                notificationState = "OK";
                                notificationType = "ACTUAL";
                                threshold = 19.100000;
                                thresholdType = "ABSOLUTE_VALUE";
                            }};
                            subscribers = new openapisdk.models.shared.Subscriber[]() {{
                                add(new Subscriber() {{
                                    address = "exercitationem";
                                    subscriptionType = "SNS";
                                }}),
                                add(new Subscriber() {{
                                    address = "reprehenderit";
                                    subscriptionType = "EMAIL";
                                }}),
                                add(new Subscriber() {{
                                    address = "maiores";
                                    subscriptionType = "SNS";
                                }}),
                            }};
                        }}),
                        add(new NotificationWithSubscribers() {{
                            notification = new Notification() {{
                                comparisonOperator = "LESS_THAN";
                                notificationState = "ALARM";
                                notificationType = "FORECASTED";
                                threshold = 80.199997;
                                thresholdType = "ABSOLUTE_VALUE";
                            }};
                            subscribers = new openapisdk.models.shared.Subscriber[]() {{
                                add(new Subscriber() {{
                                    address = "ex";
                                    subscriptionType = "SNS";
                                }}),
                            }};
                        }}),
                        add(new NotificationWithSubscribers() {{
                            notification = new Notification() {{
                                comparisonOperator = "GREATER_THAN";
                                notificationState = "OK";
                                notificationType = "FORECASTED";
                                threshold = 89.099998;
                                thresholdType = "ABSOLUTE_VALUE";
                            }};
                            subscribers = new openapisdk.models.shared.Subscriber[]() {{
                                add(new Subscriber() {{
                                    address = "qui";
                                    subscriptionType = "SNS";
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