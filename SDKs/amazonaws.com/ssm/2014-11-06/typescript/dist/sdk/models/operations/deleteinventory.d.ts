import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteInventoryXAmzTargetEnum {
    AmazonSSMDeleteInventory = "AmazonSSM.DeleteInventory"
}
export declare class DeleteInventoryRequest extends SpeakeasyBase {
    deleteInventoryRequest: shared.DeleteInventoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteInventoryXAmzTargetEnum;
}
export declare class DeleteInventoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteInventoryResult?: shared.DeleteInventoryResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDeleteInventoryParametersException
     */
    invalidDeleteInventoryParametersException?: any;
    /**
     * InvalidInventoryRequestException
     */
    invalidInventoryRequestException?: any;
    /**
     * InvalidOptionException
     */
    invalidOptionException?: any;
    /**
     * InvalidTypeNameException
     */
    invalidTypeNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
