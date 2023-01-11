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
    )
)
    
req = operations.ApplicantsAddRequest(
    security=operations.ApplicantsAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.ApplicantsAddQueryParams(
        raw=False,
    ),
    headers=operations.ApplicantsAddHeaders(
        x_apideck_app_id="et",
        x_apideck_consumer_id="quaerat",
        x_apideck_service_id="ut",
    ),
    request=shared.ApplicantInput(
        addresses=[
            shared.Address(
                city="et",
                contact_name="expedita",
                country="facere",
                county="magni",
                email="sed",
                fax="labore",
                id="consequuntur",
                latitude="magni",
                line1="voluptatum",
                line2="minima",
                line3="necessitatibus",
                line4="totam",
                longitude="et",
                name="ea",
                phone_number="labore",
                postal_code="quasi",
                row_version="eaque",
                salutation="velit",
                state="ullam",
                street_number="cum",
                string="quibusdam",
                type="home",
                website="quisquam",
            ),
            shared.Address(
                city="est",
                contact_name="necessitatibus",
                country="dolorum",
                county="dolores",
                email="perspiciatis",
                fax="ab",
                id="quia",
                latitude="sit",
                line1="necessitatibus",
                line2="molestiae",
                line3="possimus",
                line4="voluptatum",
                longitude="facere",
                name="accusamus",
                phone_number="veritatis",
                postal_code="hic",
                row_version="praesentium",
                salutation="omnis",
                state="qui",
                street_number="voluptatum",
                string="magni",
                type="other",
                website="nam",
            ),
            shared.Address(
                city="quia",
                contact_name="cum",
                country="molestias",
                county="autem",
                email="iure",
                fax="expedita",
                id="nesciunt",
                latitude="eaque",
                line1="corrupti",
                line2="nihil",
                line3="quos",
                line4="eius",
                longitude="impedit",
                name="unde",
                phone_number="quis",
                postal_code="dolorem",
                row_version="quis",
                salutation="rerum",
                state="voluptatem",
                street_number="occaecati",
                string="ut",
                type="home",
                website="corporis",
            ),
        ],
        anonymized=True,
        applications=[
            "laboriosam",
            "enim",
            "natus",
        ],
        archived=True,
        birthday="2008-05-04",
        confidential=True,
        coordinator_id="sit",
        cover_letter="explicabo",
        deleted=True,
        emails=[
            shared.Email(
                email="sapiente",
                id="maxime",
                type="work",
            ),
            shared.Email(
                email="nobis",
                id="necessitatibus",
                type="primary",
            ),
            shared.Email(
                email="minima",
                id="sint",
                type="primary",
            ),
        ],
        first_name="in",
        followers=[
            "sint",
        ],
        headline="veritatis",
        initials="aliquam",
        last_name="voluptates",
        middle_name="est",
        name="omnis",
        owner_id="aut",
        phone_numbers=[
            shared.PhoneNumber(
                area_code="totam",
                country_code="quidem",
                extension="voluptatum",
                id="qui",
                number="consequuntur",
                type="personal",
            ),
        ],
        photo_url="labore",
        position_id="sed",
        record_url="qui",
        recruiter_id="omnis",
        social_links=[
            shared.ApplicantSocialLinks(
                id="in",
                type="inventore",
                url="nam",
            ),
            shared.ApplicantSocialLinks(
                id="voluptas",
                type="quo",
                url="quaerat",
            ),
            shared.ApplicantSocialLinks(
                id="quae",
                type="dolorem",
                url="qui",
            ),
        ],
        sources=[
            "harum",
        ],
        stage_id="quidem",
        tags=[
            "sint",
            "dolorem",
            "qui",
        ],
        title="esse",
        websites=[
            shared.ApplicantWebsites(
                id="eum",
                type="primary",
                url="animi",
            ),
            shared.ApplicantWebsites(
                id="non",
                type="work",
                url="voluptate",
            ),
            shared.ApplicantWebsites(
                id="modi",
                type="other",
                url="nam",
            ),
        ],
    ),
)
    
res = s.applicants.applicants_add(req)

if res.create_applicant_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Applicants

* `applicants_add` - Create applicant
* `applicants_all` - List applicants
* `applicants_one` - Get applicant

### Jobs

* `jobs_all` - List Jobs
* `jobs_one` - Get Job

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
