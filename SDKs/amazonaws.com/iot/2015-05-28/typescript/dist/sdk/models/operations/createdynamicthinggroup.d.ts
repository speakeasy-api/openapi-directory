import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Thing group properties.
 */
export declare class CreateDynamicThingGroupRequestBodyThingGroupProperties extends SpeakeasyBase {
    attributePayload?: shared.AttributePayload;
    thingGroupDescription?: string;
}
export declare class CreateDynamicThingGroupRequestBody extends SpeakeasyBase {
    /**
     * <p>The dynamic thing group index name.</p> <note> <p>Currently one index is supported: <code>AWS_Things</code>.</p> </note>
     */
    indexName?: string;
    /**
     * <p>The dynamic thing group search query string.</p> <p>See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html">Query Syntax</a> for information about query string syntax.</p>
     */
    queryString: string;
    /**
     * <p>The dynamic thing group query version.</p> <note> <p>Currently one query version is supported: "2017-09-30". If not specified, the query version defaults to this value.</p> </note>
     */
    queryVersion?: string;
    /**
     * Metadata which can be used to manage the dynamic thing group.
     */
    tags?: shared.Tag[];
    /**
     * Thing group properties.
     */
    thingGroupProperties?: CreateDynamicThingGroupRequestBodyThingGroupProperties;
}
export declare class CreateDynamicThingGroupRequest extends SpeakeasyBase {
    requestBody: CreateDynamicThingGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The dynamic thing group name to create.
     */
    thingGroupName: string;
}
export declare class CreateDynamicThingGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDynamicThingGroupResponse?: shared.CreateDynamicThingGroupResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidQueryException
     */
    invalidQueryException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
