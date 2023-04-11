import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteConfigurationSetEventDestinationActionEnum {
    DeleteConfigurationSetEventDestination = "DeleteConfigurationSetEventDestination"
}
export declare enum GETDeleteConfigurationSetEventDestinationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDeleteConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    action: GETDeleteConfigurationSetEventDestinationActionEnum;
    /**
     * The name of the configuration set from which to delete the event destination.
     */
    configurationSetName: string;
    /**
     * The name of the event destination to delete.
     */
    eventDestinationName: string;
    version: GETDeleteConfigurationSetEventDestinationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteConfigurationSetEventDestinationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
