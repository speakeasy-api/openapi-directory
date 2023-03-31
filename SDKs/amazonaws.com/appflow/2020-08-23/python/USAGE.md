<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateConnectorProfileRequest(
    request_body=operations.CreateConnectorProfileRequestBody(
        connection_mode="Private",
        connector_label="provident",
        connector_profile_config=operations.CreateConnectorProfileRequestBodyConnectorProfileConfig(
            connector_profile_credentials=shared.ConnectorProfileCredentials(
                amplitude=shared.AmplitudeConnectorProfileCredentials(
                    api_key="distinctio",
                    secret_key="quibusdam",
                ),
                custom_connector=shared.CustomConnectorProfileCredentials(
                    api_key=shared.APIKeyCredentials(
                        api_key="unde",
                        api_secret_key="nulla",
                    ),
                    authentication_type="BASIC",
                    basic=shared.BasicAuthCredentials(
                        password="illum",
                        username="Henry.Mueller",
                    ),
                    custom=shared.CustomAuthCredentials(
                        credentials_map={
                            "magnam": "debitis",
                            "ipsa": "delectus",
                        },
                        custom_authentication_type="tempora",
                    ),
                    oauth2=shared.OAuth2Credentials(
                        access_token="suscipit",
                        client_id="molestiae",
                        client_secret="minus",
                        o_auth_request=shared.ConnectorOAuthRequest(
                            auth_code="placeat",
                            redirect_uri="voluptatum",
                        ),
                        refresh_token="iusto",
                    ),
                ),
                datadog=shared.DatadogConnectorProfileCredentials(
                    api_key="excepturi",
                    application_key="nisi",
                ),
                dynatrace=shared.DynatraceConnectorProfileCredentials(
                    api_token="recusandae",
                ),
                google_analytics=shared.GoogleAnalyticsConnectorProfileCredentials(
                    access_token="temporibus",
                    client_id="ab",
                    client_secret="quis",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="veritatis",
                        redirect_uri="deserunt",
                    ),
                    refresh_token="perferendis",
                ),
                honeycode=shared.HoneycodeConnectorProfileCredentials(
                    access_token="ipsam",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="repellendus",
                        redirect_uri="sapiente",
                    ),
                    refresh_token="quo",
                ),
                infor_nexus=shared.InforNexusConnectorProfileCredentials(
                    access_key_id="odit",
                    datakey="at",
                    secret_access_key="at",
                    user_id="maiores",
                ),
                marketo=shared.MarketoConnectorProfileCredentials(
                    access_token="molestiae",
                    client_id="quod",
                    client_secret="quod",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="esse",
                        redirect_uri="totam",
                    ),
                ),
                pardot=shared.PardotConnectorProfileCredentials(
                    access_token="porro",
                    client_credentials_arn="dolorum",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="dicta",
                        redirect_uri="nam",
                    ),
                    refresh_token="officia",
                ),
                redshift=shared.RedshiftConnectorProfileCredentials(
                    password="occaecati",
                    username="Buck_Lind52",
                ),
                sapo_data=shared.SAPODataConnectorProfileCredentials(
                    basic_auth_credentials=shared.BasicAuthCredentials(
                        password="beatae",
                        username="Haskell18",
                    ),
                    o_auth_credentials=shared.OAuthCredentials(
                        access_token="impedit",
                        client_id="cum",
                        client_secret="esse",
                        o_auth_request=shared.ConnectorOAuthRequest(
                            auth_code="ipsum",
                            redirect_uri="excepturi",
                        ),
                        refresh_token="aspernatur",
                    ),
                ),
                salesforce=shared.SalesforceConnectorProfileCredentials(
                    access_token="perferendis",
                    client_credentials_arn="ad",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="natus",
                        redirect_uri="sed",
                    ),
                    refresh_token="iste",
                ),
                service_now=shared.ServiceNowConnectorProfileCredentials(
                    password="dolor",
                    username="Lexie_Howe68",
                ),
                singular=shared.SingularConnectorProfileCredentials(
                    api_key="in",
                ),
                slack=shared.SlackConnectorProfileCredentials(
                    access_token="corporis",
                    client_id="iste",
                    client_secret="iure",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="saepe",
                        redirect_uri="quidem",
                    ),
                ),
                snowflake=shared.SnowflakeConnectorProfileCredentials(
                    password="architecto",
                    username="Andy_Wisozk67",
                ),
                trendmicro=shared.TrendmicroConnectorProfileCredentials(
                    api_secret_key="dolores",
                ),
                veeva=shared.VeevaConnectorProfileCredentials(
                    password="dolorem",
                    username="Florian.Champlin60",
                ),
                zendesk=shared.ZendeskConnectorProfileCredentials(
                    access_token="nemo",
                    client_id="minima",
                    client_secret="excepturi",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="accusantium",
                        redirect_uri="iure",
                    ),
                ),
            ),
            connector_profile_properties=shared.ConnectorProfileProperties(
                amplitude={
                    "doloribus": "sapiente",
                    "architecto": "mollitia",
                    "dolorem": "culpa",
                },
                custom_connector=shared.CustomConnectorProfileProperties(
                    o_auth2_properties=shared.OAuth2Properties(
                        o_auth2_grant_type="CLIENT_CREDENTIALS",
                        token_url="repellat",
                        token_url_custom_properties={
                            "occaecati": "numquam",
                            "commodi": "quam",
                            "molestiae": "velit",
                        },
                    ),
                    profile_properties={
                        "quia": "quis",
                        "vitae": "laborum",
                        "animi": "enim",
                    },
                ),
                datadog=shared.DatadogConnectorProfileProperties(
                    instance_url="odit",
                ),
                dynatrace=shared.DynatraceConnectorProfileProperties(
                    instance_url="quo",
                ),
                google_analytics={
                    "tenetur": "ipsam",
                },
                honeycode={
                    "possimus": "aut",
                    "quasi": "error",
                    "temporibus": "laborum",
                },
                infor_nexus=shared.InforNexusConnectorProfileProperties(
                    instance_url="quasi",
                ),
                marketo=shared.MarketoConnectorProfileProperties(
                    instance_url="reiciendis",
                ),
                pardot=shared.PardotConnectorProfileProperties(
                    business_unit_id="voluptatibus",
                    instance_url="vero",
                    is_sandbox_environment=False,
                ),
                redshift=shared.RedshiftConnectorProfileProperties(
                    bucket_name="nihil",
                    bucket_prefix="praesentium",
                    cluster_identifier="voluptatibus",
                    data_api_role_arn="ipsa",
                    database_name="omnis",
                    database_url="voluptate",
                    is_redshift_serverless=False,
                    role_arn="cum",
                    workgroup_name="perferendis",
                ),
                sapo_data=shared.SAPODataConnectorProfileProperties(
                    application_host_url="doloremque",
                    application_service_path="reprehenderit",
                    client_number="ut",
                    logon_language="maiores",
                    o_auth_properties=shared.OAuthProperties(
                        auth_code_url="dicta",
                        o_auth_scopes=[
                            "dolore",
                            "iusto",
                        ],
                        token_url="dicta",
                    ),
                    port_number=688661,
                    private_link_service_name="enim",
                ),
                salesforce=shared.SalesforceConnectorProfileProperties(
                    instance_url="accusamus",
                    is_sandbox_environment=False,
                    use_private_link_for_metadata_and_authorization=False,
                ),
                service_now=shared.ServiceNowConnectorProfileProperties(
                    instance_url="commodi",
                ),
                singular={
                    "quae": "ipsum",
                    "quidem": "molestias",
                    "excepturi": "pariatur",
                    "modi": "praesentium",
                },
                slack=shared.SlackConnectorProfileProperties(
                    instance_url="rem",
                ),
                snowflake=shared.SnowflakeConnectorProfileProperties(
                    account_name="voluptates",
                    bucket_name="quasi",
                    bucket_prefix="repudiandae",
                    private_link_service_name="sint",
                    region="veritatis",
                    stage="itaque",
                    warehouse="incidunt",
                ),
                trendmicro={
                    "consequatur": "est",
                    "quibusdam": "explicabo",
                },
                veeva=shared.VeevaConnectorProfileProperties(
                    instance_url="deserunt",
                ),
                zendesk=shared.ZendeskConnectorProfileProperties(
                    instance_url="distinctio",
                ),
            ),
        ),
        connector_profile_name="quibusdam",
        connector_type="Googleanalytics",
        kms_arn="modi",
    ),
    x_amz_algorithm="qui",
    x_amz_content_sha256="aliquid",
    x_amz_credential="cupiditate",
    x_amz_date="quos",
    x_amz_security_token="perferendis",
    x_amz_signature="magni",
    x_amz_signed_headers="assumenda",
)
    
res = s.create_connector_profile(req)

if res.create_connector_profile_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->