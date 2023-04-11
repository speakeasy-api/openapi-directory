import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateRepositoryNameXAmzTargetEnum {
    CodeCommit20150413UpdateRepositoryName = "CodeCommit_20150413.UpdateRepositoryName"
}
export declare class UpdateRepositoryNameRequest extends SpeakeasyBase {
    updateRepositoryNameInput: shared.UpdateRepositoryNameInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRepositoryNameXAmzTargetEnum;
}
export declare class UpdateRepositoryNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
    /**
     * RepositoryDoesNotExistException
     */
    repositoryDoesNotExistException?: any;
    /**
     * RepositoryNameExistsException
     */
    repositoryNameExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RepositoryNameRequiredException
     */
    repositoryNameRequiredException?: any;
}
