import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutRepositoryTriggersXAmzTargetEnum {
    CodeCommit20150413PutRepositoryTriggers = "CodeCommit_20150413.PutRepositoryTriggers"
}
export declare class PutRepositoryTriggersRequest extends SpeakeasyBase {
    putRepositoryTriggersInput: shared.PutRepositoryTriggersInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRepositoryTriggersXAmzTargetEnum;
}
export declare class PutRepositoryTriggersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EncryptionIntegrityChecksFailedException
     */
    encryptionIntegrityChecksFailedException?: any;
    /**
     * EncryptionKeyAccessDeniedException
     */
    encryptionKeyAccessDeniedException?: any;
    /**
     * EncryptionKeyDisabledException
     */
    encryptionKeyDisabledException?: any;
    /**
     * EncryptionKeyNotFoundException
     */
    encryptionKeyNotFoundException?: any;
    /**
     * EncryptionKeyUnavailableException
     */
    encryptionKeyUnavailableException?: any;
    /**
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
    /**
     * InvalidRepositoryTriggerBranchNameException
     */
    invalidRepositoryTriggerBranchNameException?: any;
    /**
     * InvalidRepositoryTriggerCustomDataException
     */
    invalidRepositoryTriggerCustomDataException?: any;
    /**
     * InvalidRepositoryTriggerDestinationArnException
     */
    invalidRepositoryTriggerDestinationArnException?: any;
    /**
     * InvalidRepositoryTriggerEventsException
     */
    invalidRepositoryTriggerEventsException?: any;
    /**
     * InvalidRepositoryTriggerNameException
     */
    invalidRepositoryTriggerNameException?: any;
    /**
     * InvalidRepositoryTriggerRegionException
     */
    invalidRepositoryTriggerRegionException?: any;
    /**
     * MaximumBranchesExceededException
     */
    maximumBranchesExceededException?: any;
    /**
     * MaximumRepositoryTriggersExceededException
     */
    maximumRepositoryTriggersExceededException?: any;
    /**
     * Success
     */
    putRepositoryTriggersOutput?: shared.PutRepositoryTriggersOutput;
    /**
     * RepositoryDoesNotExistException
     */
    repositoryDoesNotExistException?: any;
    /**
     * RepositoryTriggerBranchNameListRequiredException
     */
    repositoryTriggerBranchNameListRequiredException?: any;
    /**
     * RepositoryTriggerDestinationArnRequiredException
     */
    repositoryTriggerDestinationArnRequiredException?: any;
    /**
     * RepositoryTriggerEventsListRequiredException
     */
    repositoryTriggerEventsListRequiredException?: any;
    /**
     * RepositoryTriggerNameRequiredException
     */
    repositoryTriggerNameRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RepositoryNameRequiredException
     */
    repositoryNameRequiredException?: any;
    /**
     * RepositoryTriggersListRequiredException
     */
    repositoryTriggersListRequiredException?: any;
}
