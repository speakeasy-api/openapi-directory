import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetKeystoreRequest extends SpeakeasyBase {
    authorizableId: string;
    intermediatePath: string;
}
export declare class GetKeystoreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    getKeystoreDefaultApplicationOctetStreamBinaryString?: Uint8Array;
}
