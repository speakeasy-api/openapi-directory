import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateS3ResourcesXAmzTargetEnum {
    MacieServiceDisassociateS3Resources = "MacieService.DisassociateS3Resources"
}
export declare class DisassociateS3ResourcesRequest extends SpeakeasyBase {
    disassociateS3ResourcesRequest: shared.DisassociateS3ResourcesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateS3ResourcesXAmzTargetEnum;
}
export declare class DisassociateS3ResourcesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateS3ResourcesResult?: shared.DisassociateS3ResourcesResult;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
