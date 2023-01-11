import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onealmaws_1v1_1task_lists_1rs_1lending_requests_get_responses_200_content_application_1json_schema_properties_user_resource_sharing_request_items_properties_shipping_cost as shared_onealmaws_1v1_1task_lists_1rs_1lending_requests_get_responses_200_content_application_1json_schema_properties_user_resource_sharing_request_items_properties_shipping_cost


@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequestsQueryParams:
    library: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'library', 'style': 'form', 'explode': True }})
    partner: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'partner', 'style': 'form', 'explode': True }})
    printed: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'printed', 'style': 'form', 'explode': True }})
    reported: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reported', 'style': 'form', 'explode': True }})
    requested_format: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'requested_format', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    supplied_format: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'supplied_format', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCitationType:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCitationType
    Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCopyrightStatus:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCopyrightStatus
    The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFormat:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFormat
    Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFund:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFund
    The code of the fund. Not relevant for lending requests.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestLevelOfService:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestLevelOfService
    The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPartner:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPartner
    The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPickupLocation:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPickupLocation
    The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPreferredSendMethod:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPreferredSendMethod
    Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestReadingRoom:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestReadingRoom
    The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequestedLanguage:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequestedLanguage
    The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequester:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequester
    The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRsNote:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRsNote
    Specific related note.
    """
    
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    created_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCostCurrency:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCostCurrency
    The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCost:
    currency: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCostCurrency = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    sum: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestStatus:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestStatus
    The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestSuppliedFormat:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestSuppliedFormat
    Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestUserRequest:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestUserRequest
    The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
    """
    
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequest:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequest
    Resource sharing request Object.
    """
    
    additional_barcode: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additional_barcode') }})
    additional_person_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additional_person_name') }})
    agree_to_copyright_terms: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agree_to_copyright_terms') }})
    allow_other_formats: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_other_formats') }})
    author: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    author_initials: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author_initials') }})
    barcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcode') }})
    bib_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bib_note') }})
    call_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_number') }})
    chapter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chapter') }})
    chapter_author: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chapter_author') }})
    chapter_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chapter_title') }})
    citation_type: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCitationType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('citation_type') }})
    copyright_status: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCopyrightStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright_status') }})
    created_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    doi: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doi') }})
    edition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edition') }})
    editor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editor') }})
    end_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_page') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_id') }})
    format: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    fund: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFund] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fund') }})
    has_active_notes: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_active_notes') }})
    isbn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isbn') }})
    issn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issn') }})
    issue: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue') }})
    journal_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('journal_title') }})
    last_interest_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_interest_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lcc_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lcc_number') }})
    level_of_service: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestLevelOfService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level_of_service') }})
    lost_damaged_fee: Optional[shared_onealmaws_1v1_1task_lists_1rs_1lending_requests_get_responses_200_content_application_1json_schema_properties_user_resource_sharing_request_items_properties_shipping_cost.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lost_damaged_fee') }})
    maximum_fee: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximum_fee') }})
    mms_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mms_id') }})
    need_patron_info: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('need_patron_info') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    oclc_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oclc_number') }})
    other_standard_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other_standard_id') }})
    owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    pages: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    part: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('part') }})
    partner: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPartner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partner') }})
    pickup_location: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPickupLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickup_location') }})
    pickup_location_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickup_location_type') }})
    place_of_publication: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('place_of_publication') }})
    pmid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pmid') }})
    preferred_send_method: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPreferredSendMethod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_send_method') }})
    printed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printed') }})
    publisher: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    reading_room: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestReadingRoom] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reading_room') }})
    receive_cost: Optional[shared_onealmaws_1v1_1task_lists_1rs_1lending_requests_get_responses_200_content_application_1json_schema_properties_user_resource_sharing_request_items_properties_shipping_cost.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receive_cost') }})
    remote_record_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_record_id') }})
    reported: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reported') }})
    request_cost: Optional[shared_onealmaws_1v1_1task_lists_1rs_1lending_requests_get_responses_200_content_application_1json_schema_properties_user_resource_sharing_request_items_properties_shipping_cost.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_cost') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    requested_language: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequestedLanguage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_language') }})
    requested_media: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_media') }})
    requester: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequester] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    rs_note: Optional[list[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRsNote]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rs_note') }})
    series_title_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series_title_number') }})
    shipping_cost: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCost] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_cost') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    specific_edition: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specific_edition') }})
    start_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_page') }})
    status: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    supplied_format: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestSuppliedFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplied_format') }})
    text_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_email') }})
    text_postal_1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_postal_1') }})
    text_postal_2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_postal_2') }})
    text_postal_3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_postal_3') }})
    text_postal_4: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_postal_4') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    use_alternative_address: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_alternative_address') }})
    user_request: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestUserRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_request') }})
    volume: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    willing_to_pay: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('willing_to_pay') }})
    year: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSON:
    r"""GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSON
    A list of resource sharing requests.
    """
    
    total_record_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_record_count') }})
    user_resource_sharing_request: Optional[list[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_resource_sharing_request') }})
    

@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequestsRequest:
    query_params: GetAlmawsV1TaskListsRsLendingRequestsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAlmawsV1TaskListsRsLendingRequestsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_almaws_v1_task_lists_rs_lending_requests_200_application_json_object: Optional[GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSON] = dataclasses.field(default=None)
    
