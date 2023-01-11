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
    
req = operations.CompaniesAddRequest(
    security=operations.CompaniesAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.CompaniesAddQueryParams(
        raw=False,
    ),
    headers=operations.CompaniesAddHeaders(
        x_apideck_app_id="beatae",
        x_apideck_consumer_id="atque",
        x_apideck_service_id="enim",
    ),
    request=shared.HrisCompanyInput(
        addresses=[
            shared.Address(
                city="est",
                contact_name="quod",
                country="tempore",
                county="placeat",
                email="ullam",
                fax="consequuntur",
                id="distinctio",
                latitude="vitae",
                line1="quo",
                line2="aperiam",
                line3="ut",
                line4="qui",
                longitude="tenetur",
                name="labore",
                phone_number="eaque",
                postal_code="quidem",
                row_version="neque",
                salutation="qui",
                state="quisquam",
                street_number="nisi",
                string="aut",
                type="shipping",
                website="laudantium",
            ),
            shared.Address(
                city="nostrum",
                contact_name="sed",
                country="maxime",
                county="sint",
                email="modi",
                fax="consequuntur",
                id="quae",
                latitude="asperiores",
                line1="illo",
                line2="qui",
                line3="molestias",
                line4="eius",
                longitude="totam",
                name="voluptas",
                phone_number="omnis",
                postal_code="vel",
                row_version="nemo",
                salutation="est",
                state="aut",
                street_number="in",
                string="velit",
                type="other",
                website="reiciendis",
            ),
        ],
        company_number="molestiae",
        debtor_id="praesentium",
        display_name="quis",
        emails=[
            shared.Email(
                email="praesentium",
                id="illo",
                type="other",
            ),
            shared.Email(
                email="iure",
                id="est",
                type="work",
            ),
        ],
        legal_name="quas",
        phone_numbers=[
            shared.PhoneNumber(
                area_code="et",
                country_code="maxime",
                extension="officiis",
                id="iste",
                number="ut",
                type="personal",
            ),
            shared.PhoneNumber(
                area_code="nulla",
                country_code="id",
                extension="et",
                id="voluptatem",
                number="officia",
                type="other",
            ),
        ],
        status="other",
        subdomain="corrupti",
        websites=[
            shared.Website(
                id="magni",
                type="primary",
                url="reprehenderit",
            ),
            shared.Website(
                id="atque",
                type="other",
                url="suscipit",
            ),
        ],
    ),
)
    
res = s.companies.companies_add(req)

if res.create_hris_company_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->