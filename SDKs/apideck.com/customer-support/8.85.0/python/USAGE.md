<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CustomersAddRequest(
    security=operations.CustomersAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.CustomersAddQueryParams(
        raw=False,
    ),
    headers=operations.CustomersAddHeaders(
        x_apideck_app_id="ut",
        x_apideck_consumer_id="quas",
        x_apideck_service_id="eum",
    ),
    request=shared.CustomerSupportCustomerInput(
        addresses=[
            shared.Address(
                city="distinctio",
                contact_name="molestiae",
                country="sed",
                county="sed",
                email="autem",
                fax="ipsa",
                id="sequi",
                latitude="inventore",
                line1="earum",
                line2="ad",
                line3="eligendi",
                line4="quia",
                longitude="eum",
                name="nihil",
                phone_number="dolorum",
                postal_code="eos",
                row_version="est",
                salutation="et",
                state="dolor",
                street_number="omnis",
                string="itaque",
                type="secondary",
                website="nihil",
            ),
        ],
        bank_accounts=shared.BankAccount(
            account_name="quae",
            account_number="cupiditate",
            account_type="other",
            bank_code="et",
            bic="perferendis",
            branch_identifier="maiores",
            bsb_number="est",
            currency="LAK",
            iban="sint",
        ),
        company_name="vero",
        currency="YER",
        emails=[
            shared.Email(
                email="suscipit",
                id="laudantium",
                type="work",
            ),
            shared.Email(
                email="dicta",
                id="dolorem",
                type="billing",
            ),
        ],
        first_name="reiciendis",
        individual=True,
        last_name="fuga",
        notes="sed",
        phone_numbers=[
            shared.PhoneNumber(
                area_code="velit",
                country_code="consequatur",
                extension="reiciendis",
                id="perspiciatis",
                number="labore",
                type="secondary",
            ),
            shared.PhoneNumber(
                area_code="perferendis",
                country_code="ea",
                extension="adipisci",
                id="quos",
                number="odit",
                type="secondary",
            ),
            shared.PhoneNumber(
                area_code="non",
                country_code="expedita",
                extension="veniam",
                id="quos",
                number="natus",
                type="personal",
            ),
        ],
        status="unknown",
        tax_number="earum",
    ),
)
    
res = s.customers.customers_add(req)

if res.create_customer_support_customer_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->