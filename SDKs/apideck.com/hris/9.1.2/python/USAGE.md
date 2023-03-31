<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CompaniesAddRequest(
    hris_company_input=shared.HrisCompanyInput(
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
        company_number="123456-AB",
        debtor_id="12345",
        display_name="SpaceX",
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
        legal_name="SpaceX",
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
        status="active",
        subdomain="company",
        websites=[
            shared.Website(
                id="12345",
                type="primary",
                url="http://example.com",
            ),
            shared.Website(
                id="12345",
                type="primary",
                url="http://example.com",
            ),
            shared.Website(
                id="12345",
                type="primary",
                url="http://example.com",
            ),
            shared.Website(
                id="12345",
                type="primary",
                url="http://example.com",
            ),
        ],
    ),
    raw=False,
    x_apideck_app_id="unde",
    x_apideck_consumer_id="nulla",
    x_apideck_service_id="corrupti",
)
    
res = s.companies.companies_add(req, operations.CompaniesAddSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.create_hris_company_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->