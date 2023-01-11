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
    
req = operations.ActivitiesAddRequest(
    security=operations.ActivitiesAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.ActivitiesAddQueryParams(
        raw=True,
    ),
    headers=operations.ActivitiesAddHeaders(
        x_apideck_app_id="accusantium",
        x_apideck_consumer_id="ex",
        x_apideck_service_id="tenetur",
    ),
    request=shared.ActivityInput(
        account_id="dolorem",
        activity_date="saepe",
        activity_datetime="in",
        all_day_event=True,
        archived=False,
        asset_id="itaque",
        attendees=[
            shared.ActivityAttendeeInput(
                email_address="vitae",
                first_name="et",
                is_organizer=True,
                last_name="consequuntur",
                middle_name="consequatur",
                name="non",
                prefix="nulla",
                status="accepted",
                suffix="autem",
            ),
        ],
        campaign_id="est",
        case_id="qui",
        child=False,
        company_id="ut",
        contact_id="veniam",
        contract_id="est",
        custom_fields=[
            shared.CustomField(
                description="sunt",
                id="omnis",
                name="officia",
                value="expedita",
            ),
        ],
        custom_object_id="eligendi",
        deleted=False,
        description="assumenda",
        done=False,
        duration_seconds=8187138516846286451,
        end_date="laborum",
        end_datetime="qui",
        event_sub_type="omnis",
        group_event=True,
        group_event_type="enim",
        lead_id="sit",
        location="autem",
        location_address=shared.Address(
            city="reprehenderit",
            contact_name="consequuntur",
            country="sit",
            county="facilis",
            email="iure",
            fax="ad",
            id="nam",
            latitude="dolores",
            line1="id",
            line2="corrupti",
            line3="quod",
            line4="voluptas",
            longitude="dolorem",
            name="molestias",
            phone_number="dolor",
            postal_code="consequatur",
            row_version="rem",
            salutation="ad",
            state="quaerat",
            street_number="quia",
            string="aut",
            type="billing",
            website="sunt",
        ),
        note="eos",
        opportunity_id="odio",
        owner_id="fuga",
        private=True,
        product_id="dicta",
        recurrent=True,
        reminder_datetime="ab",
        reminder_set=True,
        show_as="free",
        solution_id="quis",
        start_datetime="et",
        title="tempora",
        type="meeting",
        user_id="vel",
        video_conference_id="dolor",
        video_conference_url="nisi",
    ),
)
    
res = s.activities.activities_add(req)

if res.create_activity_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Activities

* `activities_add` - Create activity
* `activities_all` - List activities
* `activities_delete` - Delete activity
* `activities_one` - Get activity
* `activities_update` - Update activity

### Companies

* `companies_add` - Create company
* `companies_all` - List companies
* `companies_delete` - Delete company
* `companies_one` - Get company
* `companies_update` - Update company

### Contacts

* `contacts_add` - Create contact
* `contacts_all` - List contacts
* `contacts_delete` - Delete contact
* `contacts_one` - Get contact
* `contacts_update` - Update contact

### Leads

* `leads_add` - Create lead
* `leads_all` - List leads
* `leads_delete` - Delete lead
* `leads_one` - Get lead
* `leads_update` - Update lead

### Notes

* `notes_add` - Create note
* `notes_all` - List notes
* `notes_delete` - Delete note
* `notes_one` - Get note
* `notes_update` - Update note

### Opportunities

* `opportunities_add` - Create opportunity
* `opportunities_all` - List opportunities
* `opportunities_delete` - Delete opportunity
* `opportunities_one` - Get opportunity
* `opportunities_update` - Update opportunity

### Pipelines

* `pipelines_add` - Create pipeline
* `pipelines_all` - List pipelines
* `pipelines_delete` - Delete pipeline
* `pipelines_one` - Get pipeline
* `pipelines_update` - Update pipeline

### Users

* `users_add` - Create user
* `users_all` - List users
* `users_delete` - Delete user
* `users_one` - Get user
* `users_update` - Update user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
