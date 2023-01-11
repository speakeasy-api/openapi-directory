import dataclasses
from typing import Optional
from ..shared import reservednodeofferinglist as shared_reservednodeofferinglist


@dataclasses.dataclass
class GetReservedNodeExchangeOfferingsOutputMessage:
    marker: Optional[str] = dataclasses.field(default=None)
    reserved_node_offerings: Optional[list[shared_reservednodeofferinglist.ReservedNodeOfferingList]] = dataclasses.field(default=None)
    
