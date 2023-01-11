import dataclasses
from typing import Optional
from enum import Enum
from ..shared import usagelimitbreachaction_enum as shared_usagelimitbreachaction_enum
from ..shared import usagelimitfeaturetype_enum as shared_usagelimitfeaturetype_enum
from ..shared import usagelimitlimittype_enum as shared_usagelimitlimittype_enum
from ..shared import usagelimitperiod_enum as shared_usagelimitperiod_enum
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class UsageLimit:
    r"""UsageLimit
    Describes a usage limit object for a cluster. 
    """
    
    amount: Optional[int] = dataclasses.field(default=None)
    breach_action: Optional[shared_usagelimitbreachaction_enum.UsageLimitBreachActionEnum] = dataclasses.field(default=None)
    cluster_identifier: Optional[str] = dataclasses.field(default=None)
    feature_type: Optional[shared_usagelimitfeaturetype_enum.UsageLimitFeatureTypeEnum] = dataclasses.field(default=None)
    limit_type: Optional[shared_usagelimitlimittype_enum.UsageLimitLimitTypeEnum] = dataclasses.field(default=None)
    period: Optional[shared_usagelimitperiod_enum.UsageLimitPeriodEnum] = dataclasses.field(default=None)
    tags: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    usage_limit_id: Optional[str] = dataclasses.field(default=None)
    
