import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import baiduchannelresponse as shared_baiduchannelresponse


@dataclass_json
@dataclasses.dataclass
class DeleteBaiduChannelResponse:
    baidu_channel_response: shared_baiduchannelresponse.BaiduChannelResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaiduChannelResponse') }})
    
