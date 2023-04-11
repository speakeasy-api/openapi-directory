import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The type of connector, such as Salesforce, Amplitude, and so on.
 */
export declare enum ListConnectorEntitiesRequestBodyConnectorTypeEnum {
    Salesforce = "Salesforce",
    Singular = "Singular",
    Slack = "Slack",
    Redshift = "Redshift",
    S3 = "S3",
    Marketo = "Marketo",
    Googleanalytics = "Googleanalytics",
    Zendesk = "Zendesk",
    Servicenow = "Servicenow",
    Datadog = "Datadog",
    Trendmicro = "Trendmicro",
    Snowflake = "Snowflake",
    Dynatrace = "Dynatrace",
    Infornexus = "Infornexus",
    Amplitude = "Amplitude",
    Veeva = "Veeva",
    EventBridge = "EventBridge",
    LookoutMetrics = "LookoutMetrics",
    Upsolver = "Upsolver",
    Honeycode = "Honeycode",
    CustomerProfiles = "CustomerProfiles",
    SAPOData = "SAPOData",
    CustomConnector = "CustomConnector",
    Pardot = "Pardot"
}
export declare class ListConnectorEntitiesRequestBody extends SpeakeasyBase {
    /**
     * The version of the API that's used by the connector.
     */
    apiVersion?: string;
    /**
     *  The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account, and is used to query the downstream connector.
     */
    connectorProfileName?: string;
    /**
     *  The type of connector, such as Salesforce, Amplitude, and so on.
     */
    connectorType?: ListConnectorEntitiesRequestBodyConnectorTypeEnum;
    /**
     *  This optional parameter is specific to connector implementation. Some connectors support multiple levels or categories of entities. You can find out the list of roots for such providers by sending a request without the <code>entitiesPath</code> parameter. If the connector supports entities at different roots, this initial request returns the list of roots. Otherwise, this request returns all entities supported by the provider.
     */
    entitiesPath?: string;
    /**
     * The maximum number of items that the operation returns in the response.
     */
    maxResults?: number;
    /**
     * A token that was provided by your prior <code>ListConnectorEntities</code> operation if the response was too big for the page size. You specify this token to get the next page of results in paginated response.
     */
    nextToken?: string;
}
export declare class ListConnectorEntitiesRequest extends SpeakeasyBase {
    requestBody: ListConnectorEntitiesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListConnectorEntitiesResponse extends SpeakeasyBase {
    /**
     * ConnectorAuthenticationException
     */
    connectorAuthenticationException?: any;
    /**
     * ConnectorServerException
     */
    connectorServerException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listConnectorEntitiesResponse?: shared.ListConnectorEntitiesResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
