import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The type of connector, such as Salesforce, Amplitude, and so on.
 */
export declare enum DescribeConnectorProfilesRequestBodyConnectorTypeEnum {
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
export declare class DescribeConnectorProfilesRequestBody extends SpeakeasyBase {
    /**
     * The name of the connector. The name is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.
     */
    connectorLabel?: string;
    /**
     *  The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account.
     */
    connectorProfileNames?: string[];
    /**
     *  The type of connector, such as Salesforce, Amplitude, and so on.
     */
    connectorType?: DescribeConnectorProfilesRequestBodyConnectorTypeEnum;
    /**
     *  Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations).
     */
    maxResults?: number;
    /**
     *  The pagination token for the next page of data.
     */
    nextToken?: string;
}
export declare class DescribeConnectorProfilesRequest extends SpeakeasyBase {
    requestBody: DescribeConnectorProfilesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeConnectorProfilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConnectorProfilesResponse?: shared.DescribeConnectorProfilesResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
