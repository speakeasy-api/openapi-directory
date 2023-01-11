import dataclasses
from typing import Optional
from enum import Enum
from ..shared import car_car_type_enum as shared_car_car_type_enum
from ..shared import carfax_1_owner_enum as shared_carfax_1_owner_enum
from ..shared import carfax_clean_title_enum as shared_carfax_clean_title_enum
from ..shared import country_enum as shared_country_enum
from ..shared import dealer_type_enum as shared_dealer_type_enum
from ..shared import error as shared_error
from ..shared import mds as shared_mds


@dataclasses.dataclass
class GetMdsQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    base_exterior_color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'base_exterior_color', 'style': 'form', 'explode': True }})
    base_interior_color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'base_interior_color', 'style': 'form', 'explode': True }})
    body_subtype: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'body_subtype', 'style': 'form', 'explode': True }})
    body_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'body_type', 'style': 'form', 'explode': True }})
    car_type: Optional[shared_car_car_type_enum.CarCarTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'car_type', 'style': 'form', 'explode': True }})
    carfax_1_owner: Optional[shared_carfax_1_owner_enum.Carfax1OwnerEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'carfax_1_owner', 'style': 'form', 'explode': True }})
    carfax_clean_title: Optional[shared_carfax_clean_title_enum.CarfaxCleanTitleEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'carfax_clean_title', 'style': 'form', 'explode': True }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    city_mpg_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city_mpg_range', 'style': 'form', 'explode': True }})
    country: Optional[shared_country_enum.CountryEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    cylinders: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cylinders', 'style': 'form', 'explode': True }})
    dealer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dealer_id', 'style': 'form', 'explode': True }})
    dealer_type: Optional[shared_dealer_type_enum.DealerTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dealer_type', 'style': 'form', 'explode': True }})
    dealership_group_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dealership_group_name', 'style': 'form', 'explode': True }})
    debug: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'debug', 'style': 'form', 'explode': True }})
    dom_180_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dom_180_range', 'style': 'form', 'explode': True }})
    dom_active_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dom_active_range', 'style': 'form', 'explode': True }})
    dom_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dom_range', 'style': 'form', 'explode': True }})
    doors: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doors', 'style': 'form', 'explode': True }})
    drivetrain: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'drivetrain', 'style': 'form', 'explode': True }})
    engine: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'engine', 'style': 'form', 'explode': True }})
    engine_aspiration: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'engine_aspiration', 'style': 'form', 'explode': True }})
    engine_block: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'engine_block', 'style': 'form', 'explode': True }})
    engine_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'engine_size', 'style': 'form', 'explode': True }})
    exact: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exact', 'style': 'form', 'explode': True }})
    exterior_color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exterior_color', 'style': 'form', 'explode': True }})
    finance_down_payment: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'finance_down_payment', 'style': 'form', 'explode': True }})
    finance_down_payment_per: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'finance_down_payment_per', 'style': 'form', 'explode': True }})
    finance_emp: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'finance_emp', 'style': 'form', 'explode': True }})
    finance_loan_apr: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'finance_loan_apr', 'style': 'form', 'explode': True }})
    finance_loan_term: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'finance_loan_term', 'style': 'form', 'explode': True }})
    fuel_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fuel_type', 'style': 'form', 'explode': True }})
    highway_mpg_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'highway_mpg_range', 'style': 'form', 'explode': True }})
    include_sold: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_sold', 'style': 'form', 'explode': True }})
    interior_color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interior_color', 'style': 'form', 'explode': True }})
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    lease_down_payment: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lease_down_payment', 'style': 'form', 'explode': True }})
    lease_emp: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lease_emp', 'style': 'form', 'explode': True }})
    lease_term: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lease_term', 'style': 'form', 'explode': True }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    make: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'make', 'style': 'form', 'explode': True }})
    miles_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'miles_range', 'style': 'form', 'explode': True }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    msa_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'msa_code', 'style': 'form', 'explode': True }})
    msrp_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'msrp_range', 'style': 'form', 'explode': True }})
    price_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'price_range', 'style': 'form', 'explode': True }})
    radius: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    transmission: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'transmission', 'style': 'form', 'explode': True }})
    trim: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'trim', 'style': 'form', 'explode': True }})
    vehicle_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicle_type', 'style': 'form', 'explode': True }})
    vin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    year: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    ymmt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ymmt', 'style': 'form', 'explode': True }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMdsRequest:
    query_params: GetMdsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMdsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    mds: Optional[shared_mds.Mds] = dataclasses.field(default=None)
    
