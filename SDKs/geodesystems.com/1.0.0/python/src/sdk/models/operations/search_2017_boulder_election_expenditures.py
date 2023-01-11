import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class Search2017BoulderElectionExpendituresQueryParams:
    changedate_from: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'changedate.from', 'style': 'form', 'explode': True }})
    changedate_to: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'changedate.to', 'style': 'form', 'explode': True }})
    createdate_from: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdate.from', 'style': 'form', 'explode': True }})
    createdate_to: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdate.to', 'style': 'form', 'explode': True }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    filesuffix: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filesuffix', 'style': 'form', 'explode': True }})
    fromdate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    maxlatitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxlatitude', 'style': 'form', 'explode': True }})
    maxlongitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxlongitude', 'style': 'form', 'explode': True }})
    minlatitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minlatitude', 'style': 'form', 'explode': True }})
    minlongitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minlongitude', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    search_db_2017_boulder_election_expenditures_city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_2017_boulder_election_expenditures.city', 'style': 'form', 'explode': True }})
    search_db_2017_boulder_election_expenditures_committee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_2017_boulder_election_expenditures.committee', 'style': 'form', 'explode': True }})
    search_db_2017_boulder_election_expenditures_expenditure: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_2017_boulder_election_expenditures.expenditure', 'style': 'form', 'explode': True }})
    search_db_2017_boulder_election_expenditures_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_2017_boulder_election_expenditures.name', 'style': 'form', 'explode': True }})
    search_db_2017_boulder_election_expenditures_purpose: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_2017_boulder_election_expenditures.purpose', 'style': 'form', 'explode': True }})
    search_db_2017_boulder_election_expenditures_state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_2017_boulder_election_expenditures.state', 'style': 'form', 'explode': True }})
    search_db_2017_boulder_election_expenditures_street: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_2017_boulder_election_expenditures.street', 'style': 'form', 'explode': True }})
    search_db_2017_boulder_election_expenditures_transaction_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_2017_boulder_election_expenditures.transaction_date', 'style': 'form', 'explode': True }})
    search_db_2017_boulder_election_expenditures_zip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_2017_boulder_election_expenditures.zip', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class Search2017BoulderElectionExpendituresRequest:
    query_params: Search2017BoulderElectionExpendituresQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class Search2017BoulderElectionExpendituresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
