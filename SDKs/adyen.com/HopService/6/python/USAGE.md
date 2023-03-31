<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.GetOnboardingURLRequest(
    account_holder_code="corrupti",
    collect_information=shared.CollectInformation(
        bank_details=False,
        business_details=False,
        individual_details=False,
        legal_arrangement_details=False,
        pci_questionnaire=False,
        shareholder_details=False,
    ),
    edit_mode=False,
    mobile_o_auth_callback_url="provident",
    platform_name="distinctio",
    return_url="quibusdam",
    shopper_locale="unde",
    show_pages=shared.ShowPages(
        bank_details_summary_page=False,
        bank_verification_page=False,
        business_details_summary_page=False,
        checks_overview_page=False,
        individual_details_summary_page=False,
        legal_arrangements_details_summary_page=False,
        manual_bank_account_page=False,
        shareholder_details_summary_page=False,
        welcome_page=False,
    ),
)
    
res = s.hosted_onboarding_page.post_get_onboarding_url(req, operations.PostGetOnboardingURLSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.get_onboarding_url_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->