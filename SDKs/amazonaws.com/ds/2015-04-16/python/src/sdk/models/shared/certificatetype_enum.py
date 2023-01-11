import dataclasses
from enum import Enum

class CertificateTypeEnum(str, Enum):
    CLIENT_CERT_AUTH = "ClientCertAuth"
    CLIENT_LDAPS = "ClientLDAPS"

