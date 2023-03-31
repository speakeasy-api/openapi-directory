<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ApplicantsAddRequest(
    applicant_input=shared.ApplicantInput(
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
        anonymized=True,
        applications=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        archived=False,
        birthday="2000-08-12",
        confidential=False,
        coordinator_id="12345",
        cover_letter="I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...",
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
                    "error",
                    "deserunt",
                ],
            ),
            shared.CustomField(
                description="Employee Level",
                id="2389328923893298",
                name="employee_level",
                value=10,
            ),
            shared.CustomField(
                description="Employee Level",
                id="2389328923893298",
                name="employee_level",
                value=10,
            ),
        ],
        deleted=True,
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
        ],
        first_name="Elon",
        followers=[
            "ipsa",
            "delectus",
            "tempora",
            "suscipit",
        ],
        headline="PepsiCo, Inc, Central Perk",
        initials="EM",
        last_name="Musk",
        middle_name="D.",
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
        ],
        photo_url="https://unavatar.io/elon-musk",
        position_id="123",
        record_url="https://app.intercom.io/contacts/12345",
        recruiter_id="12345",
        social_links=[
            shared.ApplicantSocialLinks(
                id="12345",
                type="twitter",
                url="https://www.twitter.com/apideck-io",
            ),
            shared.ApplicantSocialLinks(
                id="12345",
                type="twitter",
                url="https://www.twitter.com/apideck-io",
            ),
            shared.ApplicantSocialLinks(
                id="12345",
                type="twitter",
                url="https://www.twitter.com/apideck-io",
            ),
            shared.ApplicantSocialLinks(
                id="12345",
                type="twitter",
                url="https://www.twitter.com/apideck-io",
            ),
        ],
        sources=[
            "voluptatum",
            "iusto",
            "excepturi",
            "nisi",
        ],
        stage_id="12345",
        tags=[
            "temporibus",
            "ab",
            "quis",
            "veritatis",
        ],
        title="CEO",
        websites=[
            shared.ApplicantWebsites(
                id="12345",
                type="primary",
                url="http://example.com",
            ),
            shared.ApplicantWebsites(
                id="12345",
                type="primary",
                url="http://example.com",
            ),
            shared.ApplicantWebsites(
                id="12345",
                type="primary",
                url="http://example.com",
            ),
        ],
    ),
    raw=False,
    x_apideck_app_id="perferendis",
    x_apideck_consumer_id="ipsam",
    x_apideck_service_id="repellendus",
)
    
res = s.applicants.applicants_add(req, operations.ApplicantsAddSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.create_applicant_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->