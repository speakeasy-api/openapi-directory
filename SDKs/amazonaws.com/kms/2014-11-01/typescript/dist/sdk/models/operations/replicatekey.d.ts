import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ReplicateKeyXAmzTargetEnum {
    TrentServiceReplicateKey = "TrentService.ReplicateKey"
}
export declare class ReplicateKeyRequest extends SpeakeasyBase {
    replicateKeyRequest: shared.ReplicateKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReplicateKeyXAmzTargetEnum;
}
export declare class ReplicateKeyResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    contentType: string;
    /**
     * DisabledException
     */
    disabledException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * KMSInvalidStateException
     */
    kmsInvalidStateException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * MalformedPolicyDocumentException
     */
    malformedPolicyDocumentException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    replicateKeyResponse?: shared.ReplicateKeyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagException
     */
    tagException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
