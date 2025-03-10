"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import icprecordalstatus_enum as shared_icprecordalstatus_enum
from typing import Optional


@dataclasses.dataclass
class AliasICPRecordals:
    r"""<p>AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can't configure it yourself.</p> <p>For more information about ICP recordals, see <a href=\\"https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html\\"> Signup, Accounts, and Credentials</a> in <i>Getting Started with AWS services in China</i>.</p>"""
    
    cname: Optional[str] = dataclasses.field(default=None)  
    icp_recordal_status: Optional[shared_icprecordalstatus_enum.ICPRecordalStatusEnum] = dataclasses.field(default=None)  
    