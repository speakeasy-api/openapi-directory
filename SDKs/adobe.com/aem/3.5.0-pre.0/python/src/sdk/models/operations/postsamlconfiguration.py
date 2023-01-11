import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostSamlConfigurationQueryParams:
    dollar_location: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$location', 'style': 'form', 'explode': True }})
    action: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    add_group_memberships: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'addGroupMemberships', 'style': 'form', 'explode': True }})
    apply: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'apply', 'style': 'form', 'explode': True }})
    assertion_consumer_service_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assertionConsumerServiceURL', 'style': 'form', 'explode': True }})
    clock_tolerance: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clockTolerance', 'style': 'form', 'explode': True }})
    create_user: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createUser', 'style': 'form', 'explode': True }})
    default_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'defaultGroups', 'style': 'form', 'explode': True }})
    default_redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'defaultRedirectUrl', 'style': 'form', 'explode': True }})
    delete: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'delete', 'style': 'form', 'explode': True }})
    digest_method: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'digestMethod', 'style': 'form', 'explode': True }})
    group_membership_attribute: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupMembershipAttribute', 'style': 'form', 'explode': True }})
    handle_logout: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'handleLogout', 'style': 'form', 'explode': True }})
    idp_cert_alias: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'idpCertAlias', 'style': 'form', 'explode': True }})
    idp_http_redirect: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'idpHttpRedirect', 'style': 'form', 'explode': True }})
    idp_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'idpUrl', 'style': 'form', 'explode': True }})
    key_store_password: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyStorePassword', 'style': 'form', 'explode': True }})
    logout_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'logoutUrl', 'style': 'form', 'explode': True }})
    name_id_format: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameIdFormat', 'style': 'form', 'explode': True }})
    path: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    post: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'post', 'style': 'form', 'explode': True }})
    propertylist: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'propertylist', 'style': 'form', 'explode': False }})
    service_ranking: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'service.ranking', 'style': 'form', 'explode': True }})
    service_provider_entity_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serviceProviderEntityId', 'style': 'form', 'explode': True }})
    signature_method: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signatureMethod', 'style': 'form', 'explode': True }})
    sp_private_key_alias: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'spPrivateKeyAlias', 'style': 'form', 'explode': True }})
    synchronize_attributes: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'synchronizeAttributes', 'style': 'form', 'explode': True }})
    use_encryption: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useEncryption', 'style': 'form', 'explode': True }})
    user_id_attribute: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIDAttribute', 'style': 'form', 'explode': True }})
    user_intermediate_path: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIntermediatePath', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostSamlConfigurationRequest:
    query_params: PostSamlConfigurationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostSamlConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    saml_configuration_info: Optional[str] = dataclasses.field(default=None)
    post_saml_configuration_302_text_plain_string: Optional[str] = dataclasses.field(default=None)
    post_saml_configuration_default_text_plain_string: Optional[str] = dataclasses.field(default=None)
    
