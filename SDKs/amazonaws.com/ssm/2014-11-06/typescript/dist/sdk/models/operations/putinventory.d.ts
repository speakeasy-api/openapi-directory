import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutInventoryXAmzTargetEnum {
    AmazonSSMPutInventory = "AmazonSSM.PutInventory"
}
export declare class PutInventoryRequest extends SpeakeasyBase {
    putInventoryRequest: shared.PutInventoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutInventoryXAmzTargetEnum;
}
export declare class PutInventoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * CustomSchemaCountLimitExceededException
     */
    customSchemaCountLimitExceededException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    /**
     * InvalidInventoryItemContextException
     */
    invalidInventoryItemContextException?: any;
    /**
     * InvalidItemContentException
     */
    invalidItemContentException?: any;
    /**
     * InvalidTypeNameException
     */
    invalidTypeNameException?: any;
    /**
     * ItemContentMismatchException
     */
    itemContentMismatchException?: any;
    /**
     * ItemSizeLimitExceededException
     */
    itemSizeLimitExceededException?: any;
    /**
     * Success
     */
    putInventoryResult?: shared.PutInventoryResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SubTypeCountLimitExceededException
     */
    subTypeCountLimitExceededException?: any;
    /**
     * TotalSizeLimitExceededException
     */
    totalSizeLimitExceededException?: any;
    /**
     * UnsupportedInventoryItemContextException
     */
    unsupportedInventoryItemContextException?: any;
    /**
     * UnsupportedInventorySchemaVersionException
     */
    unsupportedInventorySchemaVersionException?: any;
}
