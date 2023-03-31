# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/appflow/2020-08-23/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_connector_profile` -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.
* `create_flow` -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* `delete_connector_profile` -  Enables you to delete an existing connector profile. 
* `delete_flow` -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* `describe_connector` - Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.
* `describe_connector_entity` -  Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. 
* `describe_connector_profiles` - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* `describe_connectors` -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* `describe_flow` -  Provides a description of the specified flow. 
* `describe_flow_execution_records` -  Fetches the execution history of the flow. 
* `list_connector_entities` -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* `list_connectors` - Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. 
* `list_flows` -  Lists all of the flows associated with your account. 
* `list_tags_for_resource` -  Retrieves the tags that are associated with a specified flow. 
* `register_connector` - Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.
* `start_flow` -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* `stop_flow` -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* `tag_resource` -  Applies a tag to the specified flow. 
* `unregister_connector` - Unregisters the custom connector registered in your account that matches the connector label provided in the request.
* `untag_resource` -  Removes a tag from the specified flow. 
* `update_connector_profile` -  Updates a given connector profile associated with your account. 
* `update_connector_registration` - <p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>
* `update_flow` -  Updates an existing flow. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
