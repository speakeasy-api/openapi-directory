import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
 */
export declare class PutIntegrationRequestBodyFlowDefinition extends SpeakeasyBase {
    description?: string;
    flowName?: string;
    kmsArn?: string;
    sourceFlowConfig?: shared.SourceFlowConfig;
    tasks?: shared.Task[];
    triggerConfig?: shared.TriggerConfig;
}
export declare class PutIntegrationRequestBody extends SpeakeasyBase {
    /**
     * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
     */
    flowDefinition?: PutIntegrationRequestBodyFlowDefinition;
    /**
     * The name of the profile object type.
     */
    objectTypeName?: string;
    /**
     * A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event. It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>, <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.
     */
    objectTypeNames?: Record<string, string>;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Record<string, string>;
    /**
     * The URI of the S3 bucket or any other type of data source.
     */
    uri?: string;
}
export declare class PutIntegrationRequest extends SpeakeasyBase {
    /**
     * The unique name of the domain.
     */
    domainName: string;
    requestBody: PutIntegrationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutIntegrationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    putIntegrationResponse?: shared.PutIntegrationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
