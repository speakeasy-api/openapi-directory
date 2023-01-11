import dataclasses
from enum import Enum

class KafkaSecurityProtocolEnum(str, Enum):
    PLAINTEXT = "plaintext"
    SSL_AUTHENTICATION = "ssl-authentication"
    SSL_ENCRYPTION = "ssl-encryption"
    SASL_SSL = "sasl-ssl"

