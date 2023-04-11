import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteResourcesByExternalIdXAmzTargetEnum {
    CodeDeploy20141006DeleteResourcesByExternalId = "CodeDeploy_20141006.DeleteResourcesByExternalId"
}
export declare class DeleteResourcesByExternalIdRequest extends SpeakeasyBase {
    deleteResourcesByExternalIdInput: shared.DeleteResourcesByExternalIdInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourcesByExternalIdXAmzTargetEnum;
}
export declare class DeleteResourcesByExternalIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteResourcesByExternalIdOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
