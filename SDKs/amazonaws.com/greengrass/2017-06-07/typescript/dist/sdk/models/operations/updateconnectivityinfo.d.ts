import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateConnectivityInfoRequestBody extends SpeakeasyBase {
    /**
     * A list of connectivity info.
     */
    connectivityInfo?: shared.ConnectivityInfo[];
}
export declare class UpdateConnectivityInfoRequest extends SpeakeasyBase {
    requestBody: UpdateConnectivityInfoRequestBody;
    /**
     * The thing name.
     */
    thingName: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateConnectivityInfoResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateConnectivityInfoResponse?: shared.UpdateConnectivityInfoResponse;
}
