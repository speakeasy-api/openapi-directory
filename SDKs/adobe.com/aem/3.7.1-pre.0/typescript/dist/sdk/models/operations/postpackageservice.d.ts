import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPackageServiceRequest extends SpeakeasyBase {
    cmd: string;
}
export declare class PostPackageServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    postPackageServiceDefaultTextXMLString?: string;
}
