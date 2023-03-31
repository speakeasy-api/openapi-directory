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