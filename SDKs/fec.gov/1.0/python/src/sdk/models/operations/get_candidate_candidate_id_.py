"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import candidatedetailpage as shared_candidatedetailpage
from enum import Enum
from typing import Optional

class GetCandidateCandidateIDCandidateStatusEnum(str, Enum):
    UNKNOWN = ''
    C = 'C'
    F = 'F'
    N = 'N'
    P = 'P'

class GetCandidateCandidateIDIncumbentChallengeEnum(str, Enum):
    UNKNOWN = ''
    I = 'I'
    C = 'C'
    O = 'O'

class GetCandidateCandidateIDOfficeEnum(str, Enum):
    UNKNOWN = ''
    H = 'H'
    S = 'S'
    P = 'P'


@dataclasses.dataclass
class GetCandidateCandidateIDRequest:
    
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    r"""API key for https://api.data.gov. Get one at https://api.data.gov/signup."""  
    candidate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'candidate_id', 'style': 'simple', 'explode': False }})
    r"""A unique identifier assigned to each candidate registered with the FEC.
    If a person runs for several offices, that person will have separate candidate IDs for each office.
    """  
    candidate_status: Optional[list[GetCandidateCandidateIDCandidateStatusEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'candidate_status', 'style': 'form', 'explode': True }})
    r"""One-letter code explaining if the candidate is:
            - C present candidate
            - F future candidate
            - N not yet a candidate
            - P prior candidate
    """  
    cycle: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    r"""Two-year election cycle in which a candidate runs for office.
    Calculated from Form 2. The cycle begins with
    an odd year and is named for its ending, even year. This cycle follows
    the traditional house election cycle and subdivides the presidential
    and Senate elections into comparable two-year blocks. To retrieve data for
    the entire four years of a presidential term or six years of a senatorial term,
    you will need the `election_full` flag.
    """  
    district: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'district', 'style': 'form', 'explode': True }})
    r"""Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00."""  
    election_year: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'election_year', 'style': 'form', 'explode': True }})
    r"""Year of election"""  
    federal_funds_flag: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'federal_funds_flag', 'style': 'form', 'explode': True }})
    r"""A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates."""  
    has_raised_funds: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'has_raised_funds', 'style': 'form', 'explode': True }})
    r"""A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)"""  
    incumbent_challenge: Optional[list[GetCandidateCandidateIDIncumbentChallengeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'incumbent_challenge', 'style': 'form', 'explode': True }})
    r"""One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open."""  
    name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    r"""Name (candidate or committee) to search for. Alias for 'q'."""  
    office: Optional[list[GetCandidateCandidateIDOfficeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    r"""Federal office candidate runs for: H, S or P"""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""For paginating through results, starting at page 1"""  
    party: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'party', 'style': 'form', 'explode': True }})
    r"""Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party."""  
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    r"""The number of results returned per page. Defaults to 20."""  
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    r"""Provide a field to sort by. Use `-` for descending order."""  
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    r"""Hide null values on sorted column(s)."""  
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    r"""Toggle that filters out all rows having sort column that is non-null"""  
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    r"""Toggle that sorts null values last"""  
    state: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    r"""US state or territory where a candidate runs for office"""  
    year: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    r"""Retrieve records pertaining to a particular election year. The list of election years is based on a candidate filing a statement of candidacy (F2) for that year."""  
    

@dataclasses.dataclass
class GetCandidateCandidateIDResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    candidate_detail_page: Optional[shared_candidatedetailpage.CandidateDetailPage] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    