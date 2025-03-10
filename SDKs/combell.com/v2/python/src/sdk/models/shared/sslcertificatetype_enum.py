"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
from enum import Enum

class SslCertificateTypeEnum(str, Enum):
    r"""The type of the certificate:
    <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
    """
    STANDARD = 'standard'
    MULTI_DOMAIN = 'multi_domain'
    WILDCARD = 'wildcard'
