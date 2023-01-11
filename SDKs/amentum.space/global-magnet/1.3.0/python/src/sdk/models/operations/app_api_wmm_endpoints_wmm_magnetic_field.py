import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AppAPIWmmEndpointsWmmMagneticFieldQueryParams:
    altitude: float = dataclasses.field(metadata={'query_param': { 'field_name': 'altitude', 'style': 'form', 'explode': True }})
    latitude: float = dataclasses.field(metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    longitude: float = dataclasses.field(metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    year: float = dataclasses.field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONDeclination:
    r"""AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONDeclination
    The angle in the horizontal plane between magnetic north and true north. Declination is positive when magnetic north is east of true north.
    
    """
    
    units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONGridVariation:
    r"""AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONGridVariation
    Referenced to grid north, referenced to 0 deg meridian of a polar stereographic projection.  Only defined for latitudes greater than 55 degrees and less than -55 degrees (arctic and antarctic).
    
    """
    
    units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONInclination:
    r"""AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONInclination
    Also known as 'dip', is the angle made between the horizontal plane and the magnetic field vector at some position. Positive inclination corresponds to a downward pointing. 
    
    """
    
    units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONTotalIntensity:
    r"""AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONTotalIntensity
    Total magnetic field intensity in nano Teslas.
    
    """
    
    units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class AppAPIWmmEndpointsWmmMagneticField200ApplicationJSON:
    declination: Optional[AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONDeclination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('declination') }})
    grid_variation: Optional[AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONGridVariation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grid_variation') }})
    inclination: Optional[AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONInclination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inclination') }})
    total_intensity: Optional[AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONTotalIntensity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_intensity') }})
    

@dataclasses.dataclass
class AppAPIWmmEndpointsWmmMagneticFieldRequest:
    query_params: AppAPIWmmEndpointsWmmMagneticFieldQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AppAPIWmmEndpointsWmmMagneticFieldResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_api_wmm_endpoints_wmm_magnetic_field_200_application_json_object: Optional[AppAPIWmmEndpointsWmmMagneticField200ApplicationJSON] = dataclasses.field(default=None)
    
