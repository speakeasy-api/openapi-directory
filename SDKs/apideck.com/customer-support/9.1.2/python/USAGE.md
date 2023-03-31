<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CustomersAddRequest(
    customer_support_customer_input=shared.CustomerSupportCustomerInput(
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
        bank_accounts=shared.BankAccount(
            account_name="SPACEX LLC",
            account_number="123465",
            account_type="credit_card",
            bank_code="BNH",
            bic="AUDSCHGGXXX",
            branch_identifier="001",
            bsb_number="062-001",
            currency="USD",
            iban="CH2989144532982975332",
        ),
        company_name="SpaceX",
        currency="USD",
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
        first_name="Elon",
        individual=True,
        last_name="Musk",
        notes="Some notes about this customer",
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
        tax_number="US123945459",
    ),
    raw=False,
    x_apideck_app_id="quibusdam",
    x_apideck_consumer_id="unde",
    x_apideck_service_id="nulla",
)
    
res = s.customers.customers_add(req, operations.CustomersAddSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.create_customer_support_customer_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->