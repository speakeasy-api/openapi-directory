# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateConnectorProfileRequest(
    headers=operations.CreateConnectorProfileHeaders(
        x_amz_algorithm="fuga",
        x_amz_content_sha256="aliquid",
        x_amz_credential="vero",
        x_amz_date="aut",
        x_amz_security_token="et",
        x_amz_signature="voluptatem",
        x_amz_signed_headers="sunt",
    ),
    request=operations.CreateConnectorProfileRequestBody(
        connection_mode="Private",
        connector_profile_config=operations.CreateConnectorProfileRequestBodyConnectorProfileConfig(
            connector_profile_credentials=shared.ConnectorProfileCredentials(
                amplitude=shared.AmplitudeConnectorProfileCredentials(
                    api_key="placeat",
                    secret_key="vitae",
                ),
                datadog=shared.DatadogConnectorProfileCredentials(
                    api_key="rerum",
                    application_key="officiis",
                ),
                dynatrace=shared.DynatraceConnectorProfileCredentials(
                    api_token="commodi",
                ),
                google_analytics=shared.GoogleAnalyticsConnectorProfileCredentials(
                    access_token="sed",
                    client_id="voluptates",
                    client_secret="enim",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="eos",
                        redirect_uri="ipsa",
                    ),
                    refresh_token="cum",
                ),
                honeycode=shared.HoneycodeConnectorProfileCredentials(
                    access_token="sint",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="aut",
                        redirect_uri="eaque",
                    ),
                    refresh_token="facilis",
                ),
                infor_nexus=shared.InforNexusConnectorProfileCredentials(
                    access_key_id="et",
                    datakey="ut",
                    secret_access_key="et",
                    user_id="quam",
                ),
                marketo=shared.MarketoConnectorProfileCredentials(
                    access_token="sit",
                    client_id="voluptate",
                    client_secret="eaque",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="consequuntur",
                        redirect_uri="et",
                    ),
                ),
                redshift=shared.RedshiftConnectorProfileCredentials(
                    password="amet",
                    username="distinctio",
                ),
                sapo_data=shared.SapoDataConnectorProfileCredentials(
                    basic_auth_credentials=shared.BasicAuthCredentials(
                        password="in",
                        username="consectetur",
                    ),
                    o_auth_credentials=shared.OAuthCredentials(
                        access_token="minima",
                        client_id="sequi",
                        client_secret="et",
                        o_auth_request=shared.ConnectorOAuthRequest(
                            auth_code="consequatur",
                            redirect_uri="eum",
                        ),
                        refresh_token="sunt",
                    ),
                ),
                salesforce=shared.SalesforceConnectorProfileCredentials(
                    access_token="cupiditate",
                    client_credentials_arn="quam",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="repellendus",
                        redirect_uri="dolores",
                    ),
                    refresh_token="nihil",
                ),
                service_now=shared.ServiceNowConnectorProfileCredentials(
                    password="ullam",
                    username="architecto",
                ),
                singular=shared.SingularConnectorProfileCredentials(
                    api_key="architecto",
                ),
                slack=shared.SlackConnectorProfileCredentials(
                    access_token="beatae",
                    client_id="consequatur",
                    client_secret="veniam",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="hic",
                        redirect_uri="beatae",
                    ),
                ),
                snowflake=shared.SnowflakeConnectorProfileCredentials(
                    password="veritatis",
                    username="architecto",
                ),
                trendmicro=shared.TrendmicroConnectorProfileCredentials(
                    api_secret_key="voluptas",
                ),
                veeva=shared.VeevaConnectorProfileCredentials(
                    password="voluptatibus",
                    username="maiores",
                ),
                zendesk=shared.ZendeskConnectorProfileCredentials(
                    access_token="consectetur",
                    client_id="modi",
                    client_secret="eos",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="praesentium",
                        redirect_uri="itaque",
                    ),
                ),
            ),
            connector_profile_properties=shared.ConnectorProfileProperties(
                amplitude={
                    "natus": "quas",
                },
                datadog=shared.DatadogConnectorProfileProperties(
                    instance_url="nesciunt",
                ),
                dynatrace=shared.DynatraceConnectorProfileProperties(
                    instance_url="nostrum",
                ),
                google_analytics={
                    "repudiandae": "eius",
                    "totam": "amet",
                },
                honeycode={
                    "unde": "nihil",
                    "asperiores": "quaerat",
                },
                infor_nexus=shared.InforNexusConnectorProfileProperties(
                    instance_url="hic",
                ),
                marketo=shared.MarketoConnectorProfileProperties(
                    instance_url="quo",
                ),
                redshift=shared.RedshiftConnectorProfileProperties(
                    bucket_name="est",
                    bucket_prefix="nostrum",
                    database_url="pariatur",
                    role_arn="enim",
                ),
                sapo_data=shared.SapoDataConnectorProfileProperties(
                    application_host_url="occaecati",
                    application_service_path="possimus",
                    client_number="temporibus",
                    logon_language="laborum",
                    o_auth_properties=shared.OAuthProperties(
                        auth_code_url="voluptas",
                        o_auth_scopes=[
                            "atque",
                            "soluta",
                        ],
                        token_url="tempora",
                    ),
                    port_number=4542131346235756591,
                    private_link_service_name="nihil",
                ),
                salesforce=shared.SalesforceConnectorProfileProperties(
                    instance_url="quas",
                    is_sandbox_environment=True,
                ),
                service_now=shared.ServiceNowConnectorProfileProperties(
                    instance_url="eveniet",
                ),
                singular={
                    "fuga": "error",
                    "autem": "eaque",
                    "omnis": "esse",
                },
                slack=shared.SlackConnectorProfileProperties(
                    instance_url="veritatis",
                ),
                snowflake=shared.SnowflakeConnectorProfileProperties(
                    account_name="voluptas",
                    bucket_name="incidunt",
                    bucket_prefix="sit",
                    private_link_service_name="saepe",
                    region="est",
                    stage="odio",
                    warehouse="delectus",
                ),
                trendmicro={
                    "voluptatem": "et",
                },
                veeva=shared.VeevaConnectorProfileProperties(
                    instance_url="et",
                ),
                zendesk=shared.ZendeskConnectorProfileProperties(
                    instance_url="in",
                ),
            ),
        ),
        connector_profile_name="ipsa",
        connector_type="Salesforce",
        kms_arn="deleniti",
    ),
)
    
res = s.create_connector_profile(req)

if res.create_connector_profile_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_connector_profile` -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. 
* `create_flow` -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* `delete_connector_profile` -  Enables you to delete an existing connector profile. 
* `delete_flow` -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* `describe_connector_entity` -  Provides details regarding the entity used with the connector, with a description of the data model for each entity. 
* `describe_connector_profiles` - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* `describe_connectors` -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* `describe_flow` -  Provides a description of the specified flow. 
* `describe_flow_execution_records` -  Fetches the execution history of the flow. 
* `list_connector_entities` -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* `list_flows` -  Lists all of the flows associated with your account. 
* `list_tags_for_resource` -  Retrieves the tags that are associated with a specified flow. 
* `start_flow` -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* `stop_flow` -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* `tag_resource` -  Applies a tag to the specified flow. 
* `untag_resource` -  Removes a tag from the specified flow. 
* `update_connector_profile` -  Updates a given connector profile associated with your account. 
* `update_flow` -  Updates an existing flow. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
