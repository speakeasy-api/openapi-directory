# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateBudgetRequest(
    headers=operations.CreateBudgetHeaders(
        x_amz_algorithm="ea",
        x_amz_content_sha256="ad",
        x_amz_credential="et",
        x_amz_date="nemo",
        x_amz_security_token="illo",
        x_amz_signature="animi",
        x_amz_signed_headers="earum",
        x_amz_target="AWSBudgetServiceGateway.CreateBudget",
    ),
    request=shared.CreateBudgetRequest(
        account_id="vero",
        budget=shared.Budget(
            budget_limit=shared.Spend(
                amount="et",
                unit="quam",
            ),
            budget_name="iste",
            budget_type="SAVINGS_PLANS_UTILIZATION",
            calculated_spend=shared.CalculatedSpend(
                actual_spend=shared.Spend(
                    amount="eos",
                    unit="aut",
                ),
                forecasted_spend=shared.Spend(
                    amount="ut",
                    unit="enim",
                ),
            ),
            cost_filters={
                "cupiditate": [
                    "id",
                    "molestiae",
                ],
            },
            cost_types=shared.CostTypes(
                include_credit=True,
                include_discount=True,
                include_other_subscription=False,
                include_recurring=False,
                include_refund=False,
                include_subscription=True,
                include_support=True,
                include_tax=False,
                include_upfront=True,
                use_amortized=True,
                use_blended=True,
            ),
            last_updated_time="2020-04-04T17:02:02Z",
            planned_budget_limits={
                "modi": shared.Spend(
                    amount="dolor",
                    unit="omnis",
                ),
                "explicabo": shared.Spend(
                    amount="voluptatum",
                    unit="quia",
                ),
                "perferendis": shared.Spend(
                    amount="temporibus",
                    unit="incidunt",
                ),
            },
            time_period=shared.TimePeriod(
                end="1983-11-22T04:40:57Z",
                start="2006-01-09T19:38:06Z",
            ),
            time_unit="QUARTERLY",
        ),
        notifications_with_subscribers=[
            shared.NotificationWithSubscribers(
                notification=shared.Notification(
                    comparison_operator="EQUAL_TO",
                    notification_state="OK",
                    notification_type="FORECASTED",
                    threshold=7.100000,
                    threshold_type="ABSOLUTE_VALUE",
                ),
                subscribers=[
                    shared.Subscriber(
                        address="iste",
                        subscription_type="EMAIL",
                    ),
                ],
            ),
        ],
    ),
)
    
res = s.create_budget(req)

if res.create_budget_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

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
* `describe_budget_performance_history` - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* `describe_budgets` - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* `describe_notifications_for_budget` - Lists the notifications that are associated with a budget.
* `describe_subscribers_for_notification` - Lists the subscribers that are associated with a notification.
* `execute_budget_action` -  Executes a budget action. 
* `update_budget` - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until AWS has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* `update_budget_action` -  Updates a budget action. 
* `update_notification` - Updates a notification.
* `update_subscriber` - Updates a subscriber.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
