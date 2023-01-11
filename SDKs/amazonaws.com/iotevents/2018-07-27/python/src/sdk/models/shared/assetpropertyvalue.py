import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetpropertytimestamp as shared_assetpropertytimestamp
from ..shared import assetpropertyvariant as shared_assetpropertyvariant


@dataclass_json
@dataclasses.dataclass
class AssetPropertyValue:
    r"""AssetPropertyValue
    <p>A structure that contains value information. For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html\">AssetPropertyValue</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyValue</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class=\"title\"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>quality</code> parameter can be <code>'GOOD'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>quality</code> parameter can be <code>$input.TemperatureInput.sensorData.quality</code>.</p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html\">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
    """
    
    quality: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    timestamp: Optional[shared_assetpropertytimestamp.AssetPropertyTimestamp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    value: Optional[shared_assetpropertyvariant.AssetPropertyVariant] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
