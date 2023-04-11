import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteBranchRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The unique ID for an Amplify app.
     */
    appId: string;
    /**
     *  The name for the branch.
     */
    branchName: string;
}
export declare class DeleteBranchResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteBranchResult?: shared.DeleteBranchResult;
    /**
     * DependentServiceFailureException
     */
    dependentServiceFailureException?: any;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
