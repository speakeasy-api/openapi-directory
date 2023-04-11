import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPreviewRotationShiftsXAmzTargetEnum {
    SSMContactsListPreviewRotationShifts = "SSMContacts.ListPreviewRotationShifts"
}
export declare class ListPreviewRotationShiftsRequest extends SpeakeasyBase {
    listPreviewRotationShiftsRequest: shared.ListPreviewRotationShiftsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPreviewRotationShiftsXAmzTargetEnum;
}
export declare class ListPreviewRotationShiftsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listPreviewRotationShiftsResult?: shared.ListPreviewRotationShiftsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
