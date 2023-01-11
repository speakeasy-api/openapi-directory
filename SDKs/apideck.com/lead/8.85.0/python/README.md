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
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        application_id=shared.SchemeApplicationID(
            api_key="YOUR_API_KEY_HERE",
        ),
        consumer_id=shared.SchemeConsumerID(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.LeadsAddRequest(
    security=operations.LeadsAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.LeadsAddQueryParams(
        raw=False,
    ),
    headers=operations.LeadsAddHeaders(
        x_apideck_app_id="quaerat",
        x_apideck_consumer_id="ipsa",
        x_apideck_service_id="ut",
    ),
    request=shared.LeadInput(
        addresses=[
            shared.Address(
                city="ea",
                contact_name="minima",
                country="animi",
                county="quo",
                email="architecto",
                fax="quia",
                id="voluptas",
                latitude="molestiae",
                line1="blanditiis",
                line2="nostrum",
                line3="ipsa",
                line4="alias",
                longitude="qui",
                name="veritatis",
                phone_number="magnam",
                postal_code="veritatis",
                row_version="ut",
                salutation="sed",
                state="est",
                street_number="qui",
                string="ad",
                type="home",
                website="aliquid",
            ),
            shared.Address(
                city="laboriosam",
                contact_name="consequuntur",
                country="voluptatem",
                county="dolor",
                email="expedita",
                fax="qui",
                id="reprehenderit",
                latitude="dolores",
                line1="error",
                line2="totam",
                line3="iusto",
                line4="odio",
                longitude="et",
                name="at",
                phone_number="dolores",
                postal_code="numquam",
                row_version="est",
                salutation="dolores",
                state="in",
                street_number="sed",
                string="dolore",
                type="primary",
                website="dolorem",
            ),
            shared.Address(
                city="eum",
                contact_name="et",
                country="provident",
                county="expedita",
                email="sit",
                fax="quis",
                id="nihil",
                latitude="adipisci",
                line1="praesentium",
                line2="laudantium",
                line3="et",
                line4="beatae",
                longitude="fuga",
                name="perspiciatis",
                phone_number="quas",
                postal_code="incidunt",
                row_version="et",
                salutation="placeat",
                state="culpa",
                street_number="praesentium",
                string="quae",
                type="primary",
                website="qui",
            ),
        ],
        company_id="iusto",
        company_name="nihil",
        contact_id="ab",
        currency="UYU",
        custom_fields=[
            shared.CustomField(
                description="natus",
                id="quo",
                name="error",
                value="neque",
            ),
        ],
        description="deserunt",
        emails=[
            shared.Email(
                email="qui",
                id="molestiae",
                type="primary",
            ),
            shared.Email(
                email="dolore",
                id="dolor",
                type="work",
            ),
        ],
        fax="aspernatur",
        first_name="non",
        language="sint",
        last_name="laboriosam",
        lead_source="quia",
        monetary_amount=20.200001,
        name="nobis",
        owner_id="eum",
        phone_numbers=[
            shared.PhoneNumber(
                area_code="sapiente",
                country_code="similique",
                extension="temporibus",
                id="alias",
                number="dignissimos",
                type="personal",
            ),
            shared.PhoneNumber(
                area_code="nihil",
                country_code="nulla",
                extension="consequatur",
                id="dolorem",
                number="voluptatibus",
                type="fax",
            ),
        ],
        prefix="nostrum",
        social_links=[
            shared.SocialLink(
                id="laudantium",
                type="et",
                url="omnis",
            ),
            shared.SocialLink(
                id="et",
                type="eius",
                url="earum",
            ),
            shared.SocialLink(
                id="error",
                type="et",
                url="nesciunt",
            ),
        ],
        status="dolores",
        tags=[
            "ipsam",
            "ipsam",
        ],
        title="blanditiis",
        websites=[
            shared.Website(
                id="iure",
                type="secondary",
                url="consequatur",
            ),
            shared.Website(
                id="quaerat",
                type="work",
                url="ut",
            ),
            shared.Website(
                id="delectus",
                type="primary",
                url="commodi",
            ),
        ],
    ),
)
    
res = s.leads.leads_add(req)

if res.create_lead_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Leads

* `leads_add` - Create lead
* `leads_all` - List leads
* `leads_delete` - Delete lead
* `leads_one` - Get lead
* `leads_update` - Update lead

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
