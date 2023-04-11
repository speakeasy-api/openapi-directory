import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyReplicationInstanceXAmzTargetEnum {
    AmazonDMSv20160101ModifyReplicationInstance = "AmazonDMSv20160101.ModifyReplicationInstance"
}
export declare class ModifyReplicationInstanceRequest extends SpeakeasyBase {
    modifyReplicationInstanceMessage: shared.ModifyReplicationInstanceMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyReplicationInstanceXAmzTargetEnum;
}
export declare class ModifyReplicationInstanceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * InsufficientResourceCapacityFault
     */
    insufficientResourceCapacityFault?: any;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * Success
     */
    modifyReplicationInstanceResponse?: shared.ModifyReplicationInstanceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsFault
     */
    resourceAlreadyExistsFault?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    /**
     * StorageQuotaExceededFault
     */
    storageQuotaExceededFault?: any;
    /**
     * UpgradeDependencyFailureFault
     */
    upgradeDependencyFailureFault?: any;
}
