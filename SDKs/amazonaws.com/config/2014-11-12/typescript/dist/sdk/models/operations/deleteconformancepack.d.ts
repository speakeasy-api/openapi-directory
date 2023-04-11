import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteConformancePackXAmzTargetEnum {
    StarlingDoveServiceDeleteConformancePack = "StarlingDoveService.DeleteConformancePack"
}
export declare class DeleteConformancePackRequest extends SpeakeasyBase {
    deleteConformancePackRequest: shared.DeleteConformancePackRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConformancePackXAmzTargetEnum;
}
export declare class DeleteConformancePackResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * NoSuchConformancePackException
     */
    noSuchConformancePackException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
