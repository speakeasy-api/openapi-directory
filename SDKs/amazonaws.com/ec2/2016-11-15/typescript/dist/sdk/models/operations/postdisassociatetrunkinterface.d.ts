import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisassociateTrunkInterfaceActionEnum {
    DisassociateTrunkInterface = "DisassociateTrunkInterface"
}
export declare enum POSTDisassociateTrunkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisassociateTrunkInterfaceRequest extends SpeakeasyBase {
    action: POSTDisassociateTrunkInterfaceActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisassociateTrunkInterfaceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisassociateTrunkInterfaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
