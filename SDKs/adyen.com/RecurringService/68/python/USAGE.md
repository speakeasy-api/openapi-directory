<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.CreatePermitRequest(
    merchant_account="corrupti",
    permits=[
        shared.Permit(
            partner_id="distinctio",
            profile_reference="quibusdam",
            restriction=shared.PermitRestriction(
                max_amount=shared.Amount(
                    currency="unde",
                    value=857946,
                ),
                single_transaction_limit=shared.Amount(
                    currency="corrupti",
                    value=847252,
                ),
                single_use=False,
            ),
            result_key="vel",
            valid_till_date="2021-09-16T11:56:06.019Z",
        ),
        shared.Permit(
            partner_id="suscipit",
            profile_reference="iure",
            restriction=shared.PermitRestriction(
                max_amount=shared.Amount(
                    currency="magnam",
                    value=891773,
                ),
                single_transaction_limit=shared.Amount(
                    currency="ipsa",
                    value=963663,
                ),
                single_use=False,
            ),
            result_key="tempora",
            valid_till_date="2022-07-10T15:39:12.517Z",
        ),
        shared.Permit(
            partner_id="minus",
            profile_reference="placeat",
            restriction=shared.PermitRestriction(
                max_amount=shared.Amount(
                    currency="voluptatum",
                    value=479977,
                ),
                single_transaction_limit=shared.Amount(
                    currency="excepturi",
                    value=392785,
                ),
                single_use=False,
            ),
            result_key="recusandae",
            valid_till_date="2022-10-15T05:10:19.629Z",
        ),
    ],
    recurring_detail_reference="quis",
    shopper_reference="veritatis",
)
    
res = s.general.post_create_permit(req, operations.PostCreatePermitSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.create_permit_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->