import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Firmware:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def firmware_accounts_firmware_firmware_hash_accounts_get(self, request: operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest) -> operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse:
        r"""Get default accounts and password hashes of a firmware
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firmware/{firmware_hash}/accounts", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.DefaultAccount]])
                res.default_accounts = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def firmware_config_issues_firmware_firmware_hash_config_issues_get(self, request: operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest) -> operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse:
        r"""Get default OS configuration issues of a device firmware
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firmware/{firmware_hash}/config-issues", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ConfigIssue]])
                res.config_issues = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def firmware_expired_certs_firmware_firmware_hash_expired_certs_get(self, request: operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest) -> operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse:
        r"""Get expired digital certificates embedded in a device firmware
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firmware/{firmware_hash}/expired-certs", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ExpiredCert]])
                res.expired_certs = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def firmware_private_keys_firmware_firmware_hash_private_keys_get(self, request: operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest) -> operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse:
        r"""Get private crypto keys embedded in a device firmware
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firmware/{firmware_hash}/private-keys", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.CryptoKey]])
                res.crypto_keys = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def firmware_risk_firmware_firmware_hash_risk_get(self, request: operations.FirmwareRiskFirmwareFirmwareHashRiskGetRequest) -> operations.FirmwareRiskFirmwareFirmwareHashRiskGetResponse:
        r"""Get iot device firmware risk analysis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firmware/{firmware_hash}/risk", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FirmwareRiskFirmwareFirmwareHashRiskGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirmwareRisk])
                res.firmware_risk = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def firmware_weak_certs_firmware_firmware_hash_weak_certs_get(self, request: operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest) -> operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse:
        r"""Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firmware/{firmware_hash}/weak-certs", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.WeakCert]])
                res.weak_certs = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def firmware_weak_keys_firmware_firmware_hash_weak_keys_get(self, request: operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest) -> operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse:
        r"""Get weak crypto keys with short length
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firmware/{firmware_hash}/weak-keys", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.CryptoKey]])
                res.crypto_keys = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    