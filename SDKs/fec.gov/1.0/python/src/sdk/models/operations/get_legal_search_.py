import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetLegalSearchAoCategoryEnum(str, Enum):
    F = "F"
    V = "V"
    D = "D"
    R = "R"
    W = "W"
    C = "C"
    S = "S"


@dataclasses.dataclass
class GetLegalSearchQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    af_committee_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'af_committee_id', 'style': 'form', 'explode': True }})
    af_fd_fine_amount: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'af_fd_fine_amount', 'style': 'form', 'explode': True }})
    af_max_fd_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'af_max_fd_date', 'style': 'form', 'explode': True }})
    af_max_rtb_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'af_max_rtb_date', 'style': 'form', 'explode': True }})
    af_min_fd_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'af_min_fd_date', 'style': 'form', 'explode': True }})
    af_min_rtb_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'af_min_rtb_date', 'style': 'form', 'explode': True }})
    af_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'af_name', 'style': 'form', 'explode': True }})
    af_report_year: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'af_report_year', 'style': 'form', 'explode': True }})
    af_rtb_fine_amount: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'af_rtb_fine_amount', 'style': 'form', 'explode': True }})
    ao_category: Optional[list[GetLegalSearchAoCategoryEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_category', 'style': 'form', 'explode': True }})
    ao_citation_require_all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_citation_require_all', 'style': 'form', 'explode': True }})
    ao_entity_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_entity_name', 'style': 'form', 'explode': True }})
    ao_is_pending: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_is_pending', 'style': 'form', 'explode': True }})
    ao_max_issue_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_max_issue_date', 'style': 'form', 'explode': True }})
    ao_max_request_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_max_request_date', 'style': 'form', 'explode': True }})
    ao_min_issue_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_min_issue_date', 'style': 'form', 'explode': True }})
    ao_min_request_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_min_request_date', 'style': 'form', 'explode': True }})
    ao_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_name', 'style': 'form', 'explode': True }})
    ao_no: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_no', 'style': 'form', 'explode': True }})
    ao_regulatory_citation: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_regulatory_citation', 'style': 'form', 'explode': True }})
    ao_requestor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_requestor', 'style': 'form', 'explode': True }})
    ao_requestor_type: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_requestor_type', 'style': 'form', 'explode': True }})
    ao_status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_status', 'style': 'form', 'explode': True }})
    ao_statutory_citation: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ao_statutory_citation', 'style': 'form', 'explode': True }})
    case_dispositions: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'case_dispositions', 'style': 'form', 'explode': True }})
    case_document_category: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'case_document_category', 'style': 'form', 'explode': True }})
    case_election_cycles: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'case_election_cycles', 'style': 'form', 'explode': True }})
    case_max_close_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'case_max_close_date', 'style': 'form', 'explode': True }})
    case_max_open_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'case_max_open_date', 'style': 'form', 'explode': True }})
    case_min_close_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'case_min_close_date', 'style': 'form', 'explode': True }})
    case_min_open_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'case_min_open_date', 'style': 'form', 'explode': True }})
    case_no: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'case_no', 'style': 'form', 'explode': True }})
    case_respondents: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'case_respondents', 'style': 'form', 'explode': True }})
    from_hit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from_hit', 'style': 'form', 'explode': True }})
    hits_returned: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hits_returned', 'style': 'form', 'explode': True }})
    mur_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mur_type', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdminFinesCommissionVotes:
    action: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    vote_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vote_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdminFinesDocuments:
    category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    document_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    document_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_id') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdminFines:
    challenge_outcome: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge_outcome') }})
    challenge_receipt_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge_receipt_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    check_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_amount') }})
    commission_votes: Optional[list[GetLegalSearchDefaultApplicationJSONAdminFinesCommissionVotes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commission_votes') }})
    committee_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_id') }})
    doc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doc_id') }})
    document_highlights: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_highlights') }})
    documents: Optional[list[GetLegalSearchDefaultApplicationJSONAdminFinesDocuments]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    final_determination_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('final_determination_amount') }})
    final_determination_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('final_determination_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    highlights: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highlights') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    no: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('no') }})
    petition_court_decision_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('petition_court_decision_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    petition_court_filing_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('petition_court_filing_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason_to_believe_action_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason_to_believe_action_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason_to_believe_fine_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason_to_believe_fine_amount') }})
    report_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_type') }})
    report_year: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_year') }})
    treasury_referral_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treasury_referral_amount') }})
    treasury_referral_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treasury_referral_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdrsCommissionVotes:
    action: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    vote_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vote_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdrsDispositionsCitations:
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdrsDispositions:
    citations: Optional[list[GetLegalSearchDefaultApplicationJSONAdrsDispositionsCitations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('citations') }})
    disposition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disposition') }})
    penalty: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('penalty') }})
    respondent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respondent') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdrsDocuments:
    category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    document_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    document_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_id') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdrsParticipants:
    citations: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('citations') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdrs:
    close_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    commission_votes: Optional[list[GetLegalSearchDefaultApplicationJSONAdrsCommissionVotes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commission_votes') }})
    dispositions: Optional[list[GetLegalSearchDefaultApplicationJSONAdrsDispositions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispositions') }})
    doc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doc_id') }})
    document_highlights: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_highlights') }})
    documents: Optional[list[GetLegalSearchDefaultApplicationJSONAdrsDocuments]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    election_cycles: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_cycles') }})
    highlights: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highlights') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    no: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('no') }})
    open_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    participants: Optional[list[GetLegalSearchDefaultApplicationJSONAdrsParticipants]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    respondents: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respondents') }})
    subjects: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjects') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAoCitations:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    no: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('no') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAosCitedBy:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    no: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('no') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsDocuments:
    category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    date_: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    document_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_id') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsEntities:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsRegulatoryCitations:
    part: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('part') }})
    section: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    title: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsStatutoryCitations:
    section: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    title: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONAdvisoryOpinions:
    ao_citations: Optional[list[GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAoCitations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ao_citations') }})
    aos_cited_by: Optional[list[GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAosCitedBy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aos_cited_by') }})
    commenter_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commenter_names') }})
    document_highlights: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_highlights') }})
    documents: Optional[list[GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsDocuments]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    entities: Optional[list[GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsEntities]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    highlights: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highlights') }})
    is_pending: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_pending') }})
    issue_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    no: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('no') }})
    regulatory_citations: Optional[list[GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsRegulatoryCitations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regulatory_citations') }})
    representative_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('representative_names') }})
    request_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requestor_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestor_names') }})
    requestor_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestor_types') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    statutory_citations: Optional[list[GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsStatutoryCitations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statutory_citations') }})
    summary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONMursCommissionVotes:
    action: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    vote_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vote_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONMursDispositionsCitations:
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONMursDispositions:
    citations: Optional[list[GetLegalSearchDefaultApplicationJSONMursDispositionsCitations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('citations') }})
    disposition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disposition') }})
    penalty: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('penalty') }})
    respondent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respondent') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONMursDocuments:
    category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    document_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    document_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_id') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class GetLegalSearchDefaultApplicationJSONMursMurTypeEnum(str, Enum):
    CURRENT = "current"
    ARCHIVED = "archived"


@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONMursParticipants:
    citations: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('citations') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONMurs:
    close_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    commission_votes: Optional[list[GetLegalSearchDefaultApplicationJSONMursCommissionVotes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commission_votes') }})
    dispositions: Optional[list[GetLegalSearchDefaultApplicationJSONMursDispositions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispositions') }})
    doc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doc_id') }})
    document_highlights: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_highlights') }})
    documents: Optional[list[GetLegalSearchDefaultApplicationJSONMursDocuments]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    election_cycles: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_cycles') }})
    highlights: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highlights') }})
    mur_type: Optional[GetLegalSearchDefaultApplicationJSONMursMurTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mur_type') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    no: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('no') }})
    open_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    participants: Optional[list[GetLegalSearchDefaultApplicationJSONMursParticipants]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    respondents: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respondents') }})
    subjects: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjects') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONRegulations:
    doc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doc_id') }})
    document_highlights: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_highlights') }})
    highlights: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highlights') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    no: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('no') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSONStatutes:
    chapter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chapter') }})
    doc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doc_id') }})
    document_highlights: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_highlights') }})
    highlights: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highlights') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    no: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('no') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLegalSearchDefaultApplicationJSON:
    admin_fines: Optional[list[GetLegalSearchDefaultApplicationJSONAdminFines]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin_fines') }})
    adrs: Optional[list[GetLegalSearchDefaultApplicationJSONAdrs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adrs') }})
    advisory_opinions: Optional[list[GetLegalSearchDefaultApplicationJSONAdvisoryOpinions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advisory_opinions') }})
    murs: Optional[list[GetLegalSearchDefaultApplicationJSONMurs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('murs') }})
    regulations: Optional[list[GetLegalSearchDefaultApplicationJSONRegulations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regulations') }})
    statutes: Optional[list[GetLegalSearchDefaultApplicationJSONStatutes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statutes') }})
    total_admin_fines: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_admin_fines') }})
    total_adrs: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_adrs') }})
    total_advisory_opinions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_advisory_opinions') }})
    total_all: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_all') }})
    total_murs: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_murs') }})
    total_regulations: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_regulations') }})
    total_statutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_statutes') }})
    

@dataclasses.dataclass
class GetLegalSearchRequest:
    query_params: GetLegalSearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLegalSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_legal_search_default_application_json_object: Optional[GetLegalSearchDefaultApplicationJSON] = dataclasses.field(default=None)
    
