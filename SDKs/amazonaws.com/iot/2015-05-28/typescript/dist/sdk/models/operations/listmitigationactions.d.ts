import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specify a value to limit the result to mitigation actions with a specific action type.
 */
export declare enum ListMitigationActionsActionTypeEnum {
    UpdateDeviceCertificate = "UPDATE_DEVICE_CERTIFICATE",
    UpdateCaCertificate = "UPDATE_CA_CERTIFICATE",
    AddThingsToThingGroup = "ADD_THINGS_TO_THING_GROUP",
    ReplaceDefaultPolicyVersion = "REPLACE_DEFAULT_POLICY_VERSION",
    EnableIotLogging = "ENABLE_IOT_LOGGING",
    PublishFindingToSns = "PUBLISH_FINDING_TO_SNS"
}
export declare class ListMitigationActionsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Specify a value to limit the result to mitigation actions with a specific action type.
     */
    actionType?: ListMitigationActionsActionTypeEnum;
    /**
     * The maximum number of results to return at one time. The default is 25.
     */
    maxResults?: number;
    /**
     * The token for the next set of results.
     */
    nextToken?: string;
}
export declare class ListMitigationActionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listMitigationActionsResponse?: shared.ListMitigationActionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
