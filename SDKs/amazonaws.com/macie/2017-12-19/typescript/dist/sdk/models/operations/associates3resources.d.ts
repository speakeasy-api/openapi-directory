import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateS3ResourcesXAmzTargetEnum {
    MacieServiceAssociateS3Resources = "MacieService.AssociateS3Resources"
}
export declare class AssociateS3ResourcesRequest extends SpeakeasyBase {
    associateS3ResourcesRequest: shared.AssociateS3ResourcesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateS3ResourcesXAmzTargetEnum;
}
export declare class AssociateS3ResourcesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    associateS3ResourcesResult?: shared.AssociateS3ResourcesResult;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
