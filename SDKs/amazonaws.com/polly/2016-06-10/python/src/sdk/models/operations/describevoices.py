import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describevoicesoutput as shared_describevoicesoutput

class DescribeVoicesEngineEnum(str, Enum):
    STANDARD = "standard"
    NEURAL = "neural"

class DescribeVoicesLanguageCodeEnum(str, Enum):
    ARB = "arb"
    CMN_CN = "cmn-CN"
    CY_GB = "cy-GB"
    DA_DK = "da-DK"
    DE_DE = "de-DE"
    EN_AU = "en-AU"
    EN_GB = "en-GB"
    EN_GB_WLS = "en-GB-WLS"
    EN_IN = "en-IN"
    EN_US = "en-US"
    ES_ES = "es-ES"
    ES_MX = "es-MX"
    ES_US = "es-US"
    FR_CA = "fr-CA"
    FR_FR = "fr-FR"
    IS_IS = "is-IS"
    IT_IT = "it-IT"
    JA_JP = "ja-JP"
    HI_IN = "hi-IN"
    KO_KR = "ko-KR"
    NB_NO = "nb-NO"
    NL_NL = "nl-NL"
    PL_PL = "pl-PL"
    PT_BR = "pt-BR"
    PT_PT = "pt-PT"
    RO_RO = "ro-RO"
    RU_RU = "ru-RU"
    SV_SE = "sv-SE"
    TR_TR = "tr-TR"
    EN_NZ = "en-NZ"
    EN_ZA = "en-ZA"


@dataclasses.dataclass
class DescribeVoicesQueryParams:
    engine: Optional[DescribeVoicesEngineEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Engine', 'style': 'form', 'explode': True }})
    include_additional_language_codes: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'IncludeAdditionalLanguageCodes', 'style': 'form', 'explode': True }})
    language_code: Optional[DescribeVoicesLanguageCodeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'LanguageCode', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DescribeVoicesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeVoicesRequest:
    headers: DescribeVoicesHeaders = dataclasses.field()
    query_params: DescribeVoicesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeVoicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_voices_output: Optional[shared_describevoicesoutput.DescribeVoicesOutput] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    service_failure_exception: Optional[Any] = dataclasses.field(default=None)
    
