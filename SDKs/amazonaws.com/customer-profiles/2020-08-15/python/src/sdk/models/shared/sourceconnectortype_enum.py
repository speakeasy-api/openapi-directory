import dataclasses
from enum import Enum

class SourceConnectorTypeEnum(str, Enum):
    SALESFORCE = "Salesforce"
    MARKETO = "Marketo"
    ZENDESK = "Zendesk"
    SERVICENOW = "Servicenow"
    S3 = "S3"

