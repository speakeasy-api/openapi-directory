import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import onealmaws_1v1_1task_lists_1rs_1lending_requests_get_responses_200_content_application_1json_schema_properties_user_resource_sharing_request_items_properties_shipping_cost as shared_onealmaws_1v1_1task_lists_1rs_1lending_requests_get_responses_200_content_application_1json_schema_properties_user_resource_sharing_request_items_properties_shipping_cost


@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType
    Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
    """
    
    desc: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus
    The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
    """
    
    desc: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFormat:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFormat
    Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
    """
    
    desc: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFund:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFund
    The code of the fund. Not relevant for lending requests.
    """
    
    desc: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestLevelOfService:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestLevelOfService
    The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
    """
    
    desc: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPartner:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPartner
    The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.
    """
    
    desc: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPickupLocation:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPickupLocation
    The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.
    """
    
    desc: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPreferredSendMethod:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPreferredSendMethod
    Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.
    """
    
    desc: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestReadingRoom:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestReadingRoom
    The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.
    """
    
    desc: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequestedLanguage:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequestedLanguage
    The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.
    """
    
    desc: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequester:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequester
    The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.
    """
    
    desc: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRsNote:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRsNote
    Specific related note.
    """
    
    content: Optional[str] = dataclasses.field(default=None)
    created_by: Optional[str] = dataclasses.field(default=None)
    created_date: Optional[date] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCostCurrency:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCostCurrency
    The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
    """
    
    desc: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCost:
    currency: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCostCurrency = dataclasses.field()
    sum: float = dataclasses.field()
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestStatus:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestStatus
    The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
    """
    
    desc: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestSuppliedFormat:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestSuppliedFormat
    Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.
    """
    
    desc: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestUserRequest:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestUserRequest
    The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
    """
    
    link: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequest:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequest
    Resource sharing request Object.
    """
    
    additional_barcode: Optional[list[str]] = dataclasses.field(default=None)
    additional_person_name: Optional[str] = dataclasses.field(default=None)
    agree_to_copyright_terms: Optional[bool] = dataclasses.field(default=None)
    allow_other_formats: Optional[bool] = dataclasses.field(default=None)
    author: Optional[str] = dataclasses.field(default=None)
    author_initials: Optional[str] = dataclasses.field(default=None)
    barcode: Optional[str] = dataclasses.field(default=None)
    bib_note: Optional[str] = dataclasses.field(default=None)
    call_number: Optional[str] = dataclasses.field(default=None)
    chapter: Optional[str] = dataclasses.field(default=None)
    chapter_author: Optional[str] = dataclasses.field(default=None)
    chapter_title: Optional[str] = dataclasses.field(default=None)
    citation_type: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType] = dataclasses.field(default=None)
    copyright_status: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus] = dataclasses.field(default=None)
    created_date: Optional[date] = dataclasses.field(default=None)
    created_time: Optional[datetime] = dataclasses.field(default=None)
    doi: Optional[str] = dataclasses.field(default=None)
    edition: Optional[str] = dataclasses.field(default=None)
    editor: Optional[str] = dataclasses.field(default=None)
    end_page: Optional[str] = dataclasses.field(default=None)
    external_id: Optional[str] = dataclasses.field(default=None)
    format: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFormat] = dataclasses.field(default=None)
    fund: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFund] = dataclasses.field(default=None)
    has_active_notes: Optional[bool] = dataclasses.field(default=None)
    isbn: Optional[str] = dataclasses.field(default=None)
    issn: Optional[str] = dataclasses.field(default=None)
    issue: Optional[str] = dataclasses.field(default=None)
    journal_title: Optional[str] = dataclasses.field(default=None)
    last_interest_date: Optional[date] = dataclasses.field(default=None)
    last_modified_date: Optional[date] = dataclasses.field(default=None)
    last_modified_time: Optional[datetime] = dataclasses.field(default=None)
    lcc_number: Optional[str] = dataclasses.field(default=None)
    level_of_service: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestLevelOfService] = dataclasses.field(default=None)
    lost_damaged_fee: Optional[shared_onealmaws_1v1_1task_lists_1rs_1lending_requests_get_responses_200_content_application_1json_schema_properties_user_resource_sharing_request_items_properties_shipping_cost.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost] = dataclasses.field(default=None)
    maximum_fee: Optional[float] = dataclasses.field(default=None)
    mms_id: Optional[str] = dataclasses.field(default=None)
    need_patron_info: Optional[bool] = dataclasses.field(default=None)
    note: Optional[str] = dataclasses.field(default=None)
    oclc_number: Optional[str] = dataclasses.field(default=None)
    other_standard_id: Optional[str] = dataclasses.field(default=None)
    owner: Optional[str] = dataclasses.field(default=None)
    pages: Optional[str] = dataclasses.field(default=None)
    part: Optional[str] = dataclasses.field(default=None)
    partner: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPartner] = dataclasses.field(default=None)
    pickup_location: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPickupLocation] = dataclasses.field(default=None)
    pickup_location_type: Optional[str] = dataclasses.field(default=None)
    place_of_publication: Optional[str] = dataclasses.field(default=None)
    pmid: Optional[str] = dataclasses.field(default=None)
    preferred_send_method: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPreferredSendMethod] = dataclasses.field(default=None)
    printed: Optional[bool] = dataclasses.field(default=None)
    publisher: Optional[str] = dataclasses.field(default=None)
    reading_room: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestReadingRoom] = dataclasses.field(default=None)
    receive_cost: Optional[shared_onealmaws_1v1_1task_lists_1rs_1lending_requests_get_responses_200_content_application_1json_schema_properties_user_resource_sharing_request_items_properties_shipping_cost.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost] = dataclasses.field(default=None)
    remote_record_id: Optional[str] = dataclasses.field(default=None)
    reported: Optional[bool] = dataclasses.field(default=None)
    request_cost: Optional[shared_onealmaws_1v1_1task_lists_1rs_1lending_requests_get_responses_200_content_application_1json_schema_properties_user_resource_sharing_request_items_properties_shipping_cost.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost] = dataclasses.field(default=None)
    request_id: Optional[str] = dataclasses.field(default=None)
    requested_language: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequestedLanguage] = dataclasses.field(default=None)
    requested_media: Optional[str] = dataclasses.field(default=None)
    requester: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequester] = dataclasses.field(default=None)
    rs_note: Optional[list[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRsNote]] = dataclasses.field(default=None)
    series_title_number: Optional[str] = dataclasses.field(default=None)
    shipping_cost: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCost] = dataclasses.field(default=None)
    source: Optional[str] = dataclasses.field(default=None)
    specific_edition: Optional[bool] = dataclasses.field(default=None)
    start_page: Optional[str] = dataclasses.field(default=None)
    status: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestStatus] = dataclasses.field(default=None)
    supplied_format: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestSuppliedFormat] = dataclasses.field(default=None)
    text_email: Optional[str] = dataclasses.field(default=None)
    text_postal_1: Optional[str] = dataclasses.field(default=None)
    text_postal_2: Optional[str] = dataclasses.field(default=None)
    text_postal_3: Optional[str] = dataclasses.field(default=None)
    text_postal_4: Optional[str] = dataclasses.field(default=None)
    title: Optional[str] = dataclasses.field(default=None)
    use_alternative_address: Optional[bool] = dataclasses.field(default=None)
    user_request: Optional[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestUserRequest] = dataclasses.field(default=None)
    volume: Optional[str] = dataclasses.field(default=None)
    willing_to_pay: Optional[bool] = dataclasses.field(default=None)
    year: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchema:
    r"""Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchema
    A list of resource sharing requests.
    """
    
    total_record_count: Optional[int] = dataclasses.field(default=None)
    user_resource_sharing_request: Optional[list[Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequest]] = dataclasses.field(default=None)
    
