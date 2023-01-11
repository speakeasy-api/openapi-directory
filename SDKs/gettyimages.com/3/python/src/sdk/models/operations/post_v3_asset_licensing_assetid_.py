import dataclasses
from typing import Optional
from ..shared import acquireassetlicensesrequest as shared_acquireassetlicensesrequest
from ..shared import assetlicensingresponse as shared_assetlicensingresponse


@dataclasses.dataclass
class PostV3AssetLicensingAssetIDPathParams:
    asset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV3AssetLicensingAssetIDHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV3AssetLicensingAssetIDRequests:
    acquire_asset_licenses_request: Optional[shared_acquireassetlicensesrequest.AcquireAssetLicensesRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    acquire_asset_licenses_request1: Optional[shared_acquireassetlicensesrequest.AcquireAssetLicensesRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    acquire_asset_licenses_request2: Optional[shared_acquireassetlicensesrequest.AcquireAssetLicensesRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    acquire_asset_licenses_request3: Optional[shared_acquireassetlicensesrequest.AcquireAssetLicensesRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostV3AssetLicensingAssetIDRequest:
    headers: PostV3AssetLicensingAssetIDHeaders = dataclasses.field()
    path_params: PostV3AssetLicensingAssetIDPathParams = dataclasses.field()
    request: Optional[PostV3AssetLicensingAssetIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostV3AssetLicensingAssetIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_licensing_response: Optional[shared_assetlicensingresponse.AssetLicensingResponse] = dataclasses.field(default=None)
    
