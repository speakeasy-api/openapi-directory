import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExpireSessionXAmzTargetEnum {
    PhotonAdminProxyServiceExpireSession = "PhotonAdminProxyService.ExpireSession"
}
export declare class ExpireSessionRequest extends SpeakeasyBase {
    expireSessionRequest: shared.ExpireSessionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExpireSessionXAmzTargetEnum;
}
export declare class ExpireSessionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    expireSessionResult?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
