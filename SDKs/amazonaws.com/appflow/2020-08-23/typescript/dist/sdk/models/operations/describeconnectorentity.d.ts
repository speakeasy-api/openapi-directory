import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The type of connector application, such as Salesforce, Amplitude, and so on.
 */
export declare enum DescribeConnectorEntityRequestBodyConnectorTypeEnum {
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
export declare class DescribeConnectorEntityRequestBody extends SpeakeasyBase {
    /**
     * The version of the API that's used by the connector.
     */
    apiVersion?: string;
    /**
     *  The entity name for that connector.
     */
    connectorEntityName: string;
    /**
     *  The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account.
     */
    connectorProfileName?: string;
    /**
     *  The type of connector application, such as Salesforce, Amplitude, and so on.
     */
    connectorType?: DescribeConnectorEntityRequestBodyConnectorTypeEnum;
}
export declare class DescribeConnectorEntityRequest extends SpeakeasyBase {
    requestBody: DescribeConnectorEntityRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeConnectorEntityResponse extends SpeakeasyBase {
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
     * Success
     */
    describeConnectorEntityResponse?: shared.DescribeConnectorEntityResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
