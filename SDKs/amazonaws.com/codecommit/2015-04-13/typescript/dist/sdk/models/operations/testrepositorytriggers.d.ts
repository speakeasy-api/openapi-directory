import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TestRepositoryTriggersXAmzTargetEnum {
    CodeCommit20150413TestRepositoryTriggers = "CodeCommit_20150413.TestRepositoryTriggers"
}
export declare class TestRepositoryTriggersRequest extends SpeakeasyBase {
    testRepositoryTriggersInput: shared.TestRepositoryTriggersInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TestRepositoryTriggersXAmzTargetEnum;
}
export declare class TestRepositoryTriggersResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RepositoryDoesNotExistException
     */
    repositoryDoesNotExistException?: any;
    /**
     * RepositoryNameRequiredException
     */
    repositoryNameRequiredException?: any;
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
    /**
     * RepositoryTriggersListRequiredException
     */
    repositoryTriggersListRequiredException?: any;
    /**
     * Success
     */
    testRepositoryTriggersOutput?: shared.TestRepositoryTriggersOutput;
}
