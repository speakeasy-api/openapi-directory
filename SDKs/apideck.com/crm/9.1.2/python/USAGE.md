<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ActivitiesAddRequest(
    activity_input=shared.ActivityInput(
        account_id="12345",
        activity_date="2021-05-01",
        activity_datetime="2021-05-01T12:00:00.000Z",
        all_day_event=False,
        archived=False,
        asset_id="12345",
        attendees=[
            shared.ActivityAttendeeInput(
                email_address="elon@musk.com",
                first_name="Elon",
                is_organizer=True,
                last_name="Musk",
                middle_name="D.",
                name="Elon Musk",
                prefix="Mr.",
                status="accepted",
                suffix="PhD",
            ),
            shared.ActivityAttendeeInput(
                email_address="elon@musk.com",
                first_name="Elon",
                is_organizer=True,
                last_name="Musk",
                middle_name="D.",
                name="Elon Musk",
                prefix="Mr.",
                status="accepted",
                suffix="PhD",
            ),
            shared.ActivityAttendeeInput(
                email_address="elon@musk.com",
                first_name="Elon",
                is_organizer=True,
                last_name="Musk",
                middle_name="D.",
                name="Elon Musk",
                prefix="Mr.",
                status="accepted",
                suffix="PhD",
            ),
        ],
        campaign_id="12345",
        case_id="12345",
        child=False,
        company_id="12345",
        contact_id="12345",
        contract_id="12345",
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
        custom_object_id="12345",
        deleted=False,
        description="More info about the meeting",
        done=False,
        duration_seconds=1800,
        end_date="2021-05-01",
        end_datetime="2021-05-01T12:30:00.000Z",
        event_sub_type="debrief",
        group_event=True,
        group_event_type="Proposed",
        lead_id="12345",
        location="Space",
        location_address=shared.Address(
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
        note="An internal note about the meeting",
        opportunity_id="12345",
        owner_id="12345",
        private=True,
        product_id="12345",
        recurrent=False,
        reminder_datetime="2021-05-01T17:00:00.000Z",
        reminder_set=False,
        show_as="busy",
        solution_id="12345",
        start_datetime="2021-05-01T12:00:00.000Z",
        title="Meeting",
        type="meeting",
        user_id="12345",
        video_conference_id="zoom:88120759396",
        video_conference_url="https://us02web.zoom.us/j/88120759396",
    ),
    raw=False,
    x_apideck_app_id="error",
    x_apideck_consumer_id="deserunt",
    x_apideck_service_id="suscipit",
)
    
res = s.activities.activities_add(req, operations.ActivitiesAddSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.create_activity_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->