import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status of lenses to be returned.
 */
export declare enum ListLensesLensStatusEnum {
    All = "ALL",
    Draft = "DRAFT",
    Published = "PUBLISHED"
}
/**
 * The type of lenses to be returned.
 */
export declare enum ListLensesLensTypeEnum {
    AwsOfficial = "AWS_OFFICIAL",
    CustomShared = "CUSTOM_SHARED",
    CustomSelf = "CUSTOM_SELF"
}
export declare class ListLensesRequest extends SpeakeasyBase {
    lensName?: string;
    /**
     * The status of lenses to be returned.
     */
    lensStatus?: ListLensesLensStatusEnum;
    /**
     * The type of lenses to be returned.
     */
    lensType?: ListLensesLensTypeEnum;
    maxResults?: number;
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListLensesResponse extends SpeakeasyBase {
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
    listLensesOutput?: shared.ListLensesOutput;
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
