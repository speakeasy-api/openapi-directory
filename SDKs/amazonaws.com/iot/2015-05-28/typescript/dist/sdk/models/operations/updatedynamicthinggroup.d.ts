import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Thing group properties.
 */
export declare class UpdateDynamicThingGroupRequestBodyThingGroupProperties extends SpeakeasyBase {
    attributePayload?: shared.AttributePayload;
    thingGroupDescription?: string;
}
export declare class UpdateDynamicThingGroupRequestBody extends SpeakeasyBase {
    /**
     * The expected version of the dynamic thing group to update.
     */
    expectedVersion?: number;
    /**
     * <p>The dynamic thing group index to update.</p> <note> <p>Currently one index is supported: <code>AWS_Things</code>.</p> </note>
     */
    indexName?: string;
    /**
     * The dynamic thing group search query string to update.
     */
    queryString?: string;
    /**
     * <p>The dynamic thing group query version to update.</p> <note> <p>Currently one query version is supported: "2017-09-30". If not specified, the query version defaults to this value.</p> </note>
     */
    queryVersion?: string;
    /**
     * Thing group properties.
     */
    thingGroupProperties: UpdateDynamicThingGroupRequestBodyThingGroupProperties;
}
export declare class UpdateDynamicThingGroupRequest extends SpeakeasyBase {
    requestBody: UpdateDynamicThingGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the dynamic thing group to update.
     */
    thingGroupName: string;
}
export declare class UpdateDynamicThingGroupResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    updateDynamicThingGroupResponse?: shared.UpdateDynamicThingGroupResponse;
    /**
     * VersionConflictException
     */
    versionConflictException?: any;
}
