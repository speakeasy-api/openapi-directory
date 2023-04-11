import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSourceRepositoryBranchRequestBody extends SpeakeasyBase {
    /**
     * The commit ID in an existing branch from which you want to create the new branch.
     */
    headCommitId?: string;
}
export declare class CreateSourceRepositoryBranchRequest extends SpeakeasyBase {
    requestBody: CreateSourceRepositoryBranchRequestBody;
    /**
     * The name for the branch you're creating.
     */
    name: string;
    /**
     * The name of the project in the space.
     */
    projectName: string;
    /**
     * The name of the repository where you want to create a branch.
     */
    sourceRepositoryName: string;
    /**
     * The name of the space.
     */
    spaceName: string;
}
export declare class CreateSourceRepositoryBranchResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createSourceRepositoryBranchResponse?: shared.CreateSourceRepositoryBranchResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
