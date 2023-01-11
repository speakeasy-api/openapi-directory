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