import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Indicates the connection mode and specifies whether it is public or private. Private flows use Amazon Web Services PrivateLink to route data over Amazon Web Services infrastructure without exposing it to the public internet.
 */
export declare enum CreateConnectorProfileRequestBodyConnectionModeEnum {
    Public = "Public",
    Private = "Private"
}
/**
 *  Defines the connector-specific configuration and credentials for the connector profile.
 */
export declare class CreateConnectorProfileRequestBodyConnectorProfileConfig extends SpeakeasyBase {
    connectorProfileCredentials?: shared.ConnectorProfileCredentials;
    connectorProfileProperties?: shared.ConnectorProfileProperties;
}
/**
 *  The type of connector, such as Salesforce, Amplitude, and so on.
 */
export declare enum CreateConnectorProfileRequestBodyConnectorTypeEnum {
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
export declare class CreateConnectorProfileRequestBody extends SpeakeasyBase {
    /**
     *  Indicates the connection mode and specifies whether it is public or private. Private flows use Amazon Web Services PrivateLink to route data over Amazon Web Services infrastructure without exposing it to the public internet.
     */
    connectionMode: CreateConnectorProfileRequestBodyConnectionModeEnum;
    /**
     * The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.
     */
    connectorLabel?: string;
    /**
     *  Defines the connector-specific configuration and credentials for the connector profile.
     */
    connectorProfileConfig: CreateConnectorProfileRequestBodyConnectorProfileConfig;
    /**
     *  The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your Amazon Web Services account.
     */
    connectorProfileName: string;
    /**
     *  The type of connector, such as Salesforce, Amplitude, and so on.
     */
    connectorType: CreateConnectorProfileRequestBodyConnectorTypeEnum;
    /**
     *  The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
     */
    kmsArn?: string;
}
export declare class CreateConnectorProfileRequest extends SpeakeasyBase {
    requestBody: CreateConnectorProfileRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateConnectorProfileResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    /**
     * ConnectorAuthenticationException
     */
    connectorAuthenticationException?: any;
    contentType: string;
    /**
     * Success
     */
    createConnectorProfileResponse?: shared.CreateConnectorProfileResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
