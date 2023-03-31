<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.LeadsAddRequest(
    lead_input=shared.LeadInput(
        addresses=[
            shared.Address(
                city="San Francisco",
                contact_name="Elon Musk",
                country="US",
                county="Santa Clara",
                email="elon@musk.com",
                fax="122-111-1111",
                id="123",
                latitude="40.759211",
                line1="Main street",
                line2="apt #",
                line3="Suite #",
                line4="delivery instructions",
                longitude="-73.984638",
                name="HQ US",
                phone_number="111-111-1111",
                postal_code="94104",
                row_version="1-12345",
                salutation="Mr",
                state="CA",
                street_number="25",
                string="25 Spring Street, Blackburn, VIC 3130",
                type="primary",
                website="https://elonmusk.com",
            ),
            shared.Address(
                city="San Francisco",
                contact_name="Elon Musk",
                country="US",
                county="Santa Clara",
                email="elon@musk.com",
                fax="122-111-1111",
                id="123",
                latitude="40.759211",
                line1="Main street",
                line2="apt #",
                line3="Suite #",
                line4="delivery instructions",
                longitude="-73.984638",
                name="HQ US",
                phone_number="111-111-1111",
                postal_code="94104",
                row_version="1-12345",
                salutation="Mr",
                state="CA",
                street_number="25",
                string="25 Spring Street, Blackburn, VIC 3130",
                type="primary",
                website="https://elonmusk.com",
            ),
            shared.Address(
                city="San Francisco",
                contact_name="Elon Musk",
                country="US",
                county="Santa Clara",
                email="elon@musk.com",
                fax="122-111-1111",
                id="123",
                latitude="40.759211",
                line1="Main street",
                line2="apt #",
                line3="Suite #",
                line4="delivery instructions",
                longitude="-73.984638",
                name="HQ US",
                phone_number="111-111-1111",
                postal_code="94104",
                row_version="1-12345",
                salutation="Mr",
                state="CA",
                street_number="25",
                string="25 Spring Street, Blackburn, VIC 3130",
                type="primary",
                website="https://elonmusk.com",
            ),
        ],
        company_id="2",
        company_name="Spacex",
        contact_id="2",
        currency="USD",
        custom_fields=[
            shared.CustomField(
                description="Employee Level",
                id="2389328923893298",
                name="employee_level",
                value=True,
            ),
            shared.CustomField(
                description="Employee Level",
                id="2389328923893298",
                name="employee_level",
                value=[
                    "nulla",
                    "corrupti",
                    "illum",
                ],
            ),
            shared.CustomField(
                description="Employee Level",
                id="2389328923893298",
                name="employee_level",
                value=10,
            ),
        ],
        description="A thinker",
        emails=[
            shared.Email(
                email="elon@musk.com",
                id="123",
                type="primary",
            ),
            shared.Email(
                email="elon@musk.com",
                id="123",
                type="primary",
            ),
            shared.Email(
                email="elon@musk.com",
                id="123",
                type="primary",
            ),
        ],
        fax="+12129876543",
        first_name="Elon",
        language="EN",
        last_name="Musk",
        lead_source="Cold Call",
        monetary_amount=75000,
        name="Elon Musk",
        owner_id="54321",
        phone_numbers=[
            shared.PhoneNumber(
                area_code="323",
                country_code="1",
                extension="105",
                id="12345",
                number="111-111-1111",
                type="primary",
            ),
            shared.PhoneNumber(
                area_code="323",
                country_code="1",
                extension="105",
                id="12345",
                number="111-111-1111",
                type="primary",
            ),
            shared.PhoneNumber(
                area_code="323",
                country_code="1",
                extension="105",
                id="12345",
                number="111-111-1111",
                type="primary",
            ),
        ],
        prefix="Sir",
        social_links=[
            shared.SocialLink(
                id="12345",
                type="twitter",
                url="https://www.twitter.com/apideck-io",
            ),
            shared.SocialLink(
                id="12345",
                type="twitter",
                url="https://www.twitter.com/apideck-io",
            ),
        ],
        status="New",
        tags=[
            "magnam",
            "debitis",
        ],
        title="CEO",
        websites=[
            shared.Website(
                id="12345",
                type="primary",
                url="http://example.com",
            ),
        ],
    ),
    raw=False,
    x_apideck_app_id="delectus",
    x_apideck_consumer_id="tempora",
    x_apideck_service_id="suscipit",
)
    
res = s.leads.leads_add(req, operations.LeadsAddSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.create_lead_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->