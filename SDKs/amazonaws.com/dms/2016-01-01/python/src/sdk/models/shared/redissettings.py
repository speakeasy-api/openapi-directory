import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import redisauthtypevalue_enum as shared_redisauthtypevalue_enum
from ..shared import sslsecurityprotocolvalue_enum as shared_sslsecurityprotocolvalue_enum


@dataclass_json
@dataclasses.dataclass
class RedisSettings:
    r"""RedisSettings
    Provides information that defines a Redis target endpoint.
    """
    
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    server_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    auth_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthPassword') }})
    auth_type: Optional[shared_redisauthtypevalue_enum.RedisAuthTypeValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthType') }})
    auth_user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthUserName') }})
    ssl_ca_certificate_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SslCaCertificateArn') }})
    ssl_security_protocol: Optional[shared_sslsecurityprotocolvalue_enum.SslSecurityProtocolValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SslSecurityProtocol') }})
    
