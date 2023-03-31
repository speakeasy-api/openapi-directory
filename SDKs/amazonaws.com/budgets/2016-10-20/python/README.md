# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/budgets/2016-10-20/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateBudgetRequest(
    create_budget_request=shared.CreateBudgetRequest(
        account_id="corrupti",
        budget=shared.Budget(
            auto_adjust_data=shared.AutoAdjustData(
                auto_adjust_type="FORECAST",
                historical_options=shared.HistoricalOptions(
                    budget_adjustment_period=715190,
                    look_back_available_periods=844266,
                ),
                last_auto_adjust_time="2021-04-14T16:47:33.722Z",
            ),
            budget_limit=shared.Spend(
                amount="corrupti",
                unit="illum",
            ),
            budget_name="vel",
            budget_type="RI_COVERAGE",
            calculated_spend=shared.CalculatedSpend(
                actual_spend=shared.Spend(
                    amount="deserunt",
                    unit="suscipit",
                ),
                forecasted_spend=shared.Spend(
                    amount="iure",
                    unit="magnam",
                ),
            ),
            cost_filters={
                "ipsa": [
                    "tempora",
                    "suscipit",
                    "molestiae",
                    "minus",
                ],
                "placeat": [
                    "iusto",
                    "excepturi",
                    "nisi",
                ],
                "recusandae": [
                    "ab",
                    "quis",
                    "veritatis",
                    "deserunt",
                ],
                "perferendis": [
                    "repellendus",
                    "sapiente",
                ],
            },
            cost_types=shared.CostTypes(
                include_credit=False,
                include_discount=False,
                include_other_subscription=False,
                include_recurring=False,
                include_refund=False,
                include_subscription=False,
                include_support=False,
                include_tax=False,
                include_upfront=False,
                use_amortized=False,
                use_blended=False,
            ),
            last_updated_time="2022-07-31T07:34:52.790Z",
            planned_budget_limits={
                "at": shared.Spend(
                    amount="maiores",
                    unit="molestiae",
                ),
                "quod": shared.Spend(
                    amount="quod",
                    unit="esse",
                ),
                "totam": shared.Spend(
                    amount="porro",
                    unit="dolorum",
                ),
                "dicta": shared.Spend(
                    amount="nam",
                    unit="officia",
                ),
            },
            time_period=shared.TimePeriod(
                end="2022-09-18T08:27:00.721Z",
                start="2021-02-10T09:24:01.909Z",
            ),
            time_unit="ANNUALLY",
        ),
        notifications_with_subscribers=[
            shared.NotificationWithSubscribers(
                notification=shared.Notification(
                    comparison_operator="GREATER_THAN",
                    notification_state="OK",
                    notification_type="ACTUAL",
                    threshold=2645.55,
                    threshold_type="PERCENTAGE",
                ),
                subscribers=[
                    shared.Subscriber(
                        address="cum",
                        subscription_type="SNS",
                    ),
                    shared.Subscriber(
                        address="ipsum",
                        subscription_type="EMAIL",
                    ),
                    shared.Subscriber(
                        address="aspernatur",
                        subscription_type="SNS",
                    ),
                    shared.Subscriber(
                        address="ad",
                        subscription_type="EMAIL",
                    ),
                ],
            ),
            shared.NotificationWithSubscribers(
                notification=shared.Notification(
                    comparison_operator="GREATER_THAN",
                    notification_state="ALARM",
                    notification_type="ACTUAL",
                    threshold=6169.34,
                    threshold_type="PERCENTAGE",
                ),
                subscribers=[
                    shared.Subscriber(
                        address="saepe",
                        subscription_type="EMAIL",
                    ),
                    shared.Subscriber(
                        address="in",
                        subscription_type="SNS",
                    ),
                    shared.Subscriber(
                        address="iste",
                        subscription_type="SNS",
                    ),
                    shared.Subscriber(
                        address="saepe",
                        subscription_type="EMAIL",
                    ),
                ],
            ),
            shared.NotificationWithSubscribers(
                notification=shared.Notification(
                    comparison_operator="GREATER_THAN",
                    notification_state="OK",
                    notification_type="FORECASTED",
                    threshold=6667.67,
                    threshold_type="ABSOLUTE_VALUE",
                ),
                subscribers=[
                    shared.Subscriber(
                        address="dolores",
                        subscription_type="SNS",
                    ),
                    shared.Subscriber(
                        address="corporis",
                        subscription_type="SNS",
                    ),
                    shared.Subscriber(
                        address="nobis",
                        subscription_type="SNS",
                    ),
                ],
            ),
        ],
    ),
    x_amz_algorithm="omnis",
    x_amz_content_sha256="nemo",
    x_amz_credential="minima",
    x_amz_date="excepturi",
    x_amz_security_token="accusantium",
    x_amz_signature="iure",
    x_amz_signed_headers="culpa",
    x_amz_target="AWSBudgetServiceGateway.CreateBudget",
)
    
res = s.create_budget(req)

if res.create_budget_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_budget` - <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
* `create_budget_action` -  Creates a budget action. 
* `create_notification` - Creates a notification. You must create the budget before you create the associated notification.
* `create_subscriber` - Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
* `delete_budget` - <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
* `delete_budget_action` -  Deletes a budget action. 
* `delete_notification` - <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
* `delete_subscriber` - <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
* `describe_budget` - <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
* `describe_budget_action` -  Describes a budget action detail. 
* `describe_budget_action_histories` -  Describes a budget action history detail. 
* `describe_budget_actions_for_account` -  Describes all of the budget actions for an account. 
* `describe_budget_actions_for_budget` -  Describes all of the budget actions for a budget. 
* `describe_budget_notifications_for_account` -  Lists the budget names and notifications that are associated with an account. 
* `describe_budget_performance_history` - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* `describe_budgets` - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* `describe_notifications_for_budget` - Lists the notifications that are associated with a budget.
* `describe_subscribers_for_notification` - Lists the subscribers that are associated with a notification.
* `execute_budget_action` -  Executes a budget action. 
* `update_budget` - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* `update_budget_action` -  Updates a budget action. 
* `update_notification` - Updates a notification.
* `update_subscriber` - Updates a subscriber.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
