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