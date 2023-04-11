import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDeliveryChannelXAmzTargetEnum {
    StarlingDoveServiceDeleteDeliveryChannel = "StarlingDoveService.DeleteDeliveryChannel"
}
export declare class DeleteDeliveryChannelRequest extends SpeakeasyBase {
    deleteDeliveryChannelRequest: shared.DeleteDeliveryChannelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDeliveryChannelXAmzTargetEnum;
}
export declare class DeleteDeliveryChannelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * LastDeliveryChannelDeleteFailedException
     */
    lastDeliveryChannelDeleteFailedException?: any;
    /**
     * NoSuchDeliveryChannelException
     */
    noSuchDeliveryChannelException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
