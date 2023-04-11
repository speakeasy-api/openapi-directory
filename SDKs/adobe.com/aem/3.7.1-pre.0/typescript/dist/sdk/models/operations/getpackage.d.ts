import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPackageRequest extends SpeakeasyBase {
    group: string;
    name: string;
    version: string;
}
export declare class GetPackageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    getPackageDefaultApplicationOctetStreamBinaryString?: Uint8Array;
}
