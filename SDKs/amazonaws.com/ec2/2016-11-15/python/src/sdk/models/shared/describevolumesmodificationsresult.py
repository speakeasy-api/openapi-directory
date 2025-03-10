"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from datetime import datetime
from enum import Enum
from typing import Optional

class DescribeVolumesModificationsResultVolumesModificationsModificationStateEnum(str, Enum):
    r"""The current modification state. The modification state is null for unmodified volumes."""
    MODIFYING = 'modifying'
    OPTIMIZING = 'optimizing'
    COMPLETED = 'completed'
    FAILED = 'failed'

class DescribeVolumesModificationsResultVolumesModificationsOriginalVolumeTypeEnum(str, Enum):
    r"""The original EBS volume type of the volume."""
    STANDARD = 'standard'
    IO1 = 'io1'
    IO2 = 'io2'
    GP2 = 'gp2'
    SC1 = 'sc1'
    ST1 = 'st1'
    GP3 = 'gp3'

class DescribeVolumesModificationsResultVolumesModificationsTargetVolumeTypeEnum(str, Enum):
    r"""The target EBS volume type of the volume."""
    STANDARD = 'standard'
    IO1 = 'io1'
    IO2 = 'io2'
    GP2 = 'gp2'
    SC1 = 'sc1'
    ST1 = 'st1'
    GP3 = 'gp3'


@dataclasses.dataclass
class DescribeVolumesModificationsResultVolumesModifications:
    r"""<p>Describes the modification status of an EBS volume.</p> <p>If the volume has never been modified, some element values will be null.</p>"""
    
    end_time: Optional[datetime] = dataclasses.field(default=None)  
    modification_state: Optional[DescribeVolumesModificationsResultVolumesModificationsModificationStateEnum] = dataclasses.field(default=None)  
    original_iops: Optional[int] = dataclasses.field(default=None)  
    original_multi_attach_enabled: Optional[bool] = dataclasses.field(default=None)  
    original_size: Optional[int] = dataclasses.field(default=None)  
    original_throughput: Optional[int] = dataclasses.field(default=None)  
    original_volume_type: Optional[DescribeVolumesModificationsResultVolumesModificationsOriginalVolumeTypeEnum] = dataclasses.field(default=None)  
    progress: Optional[int] = dataclasses.field(default=None)  
    start_time: Optional[datetime] = dataclasses.field(default=None)  
    status_message: Optional[str] = dataclasses.field(default=None)  
    target_iops: Optional[int] = dataclasses.field(default=None)  
    target_multi_attach_enabled: Optional[bool] = dataclasses.field(default=None)  
    target_size: Optional[int] = dataclasses.field(default=None)  
    target_throughput: Optional[int] = dataclasses.field(default=None)  
    target_volume_type: Optional[DescribeVolumesModificationsResultVolumesModificationsTargetVolumeTypeEnum] = dataclasses.field(default=None)  
    volume_id: Optional[str] = dataclasses.field(default=None)  
    

@dataclasses.dataclass
class DescribeVolumesModificationsResult:
    r"""Success"""
    
    next_token: Optional[str] = dataclasses.field(default=None)  
    volumes_modifications: Optional[list[DescribeVolumesModificationsResultVolumesModifications]] = dataclasses.field(default=None)  
    