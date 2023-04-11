import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContainersVersionResponse extends SpeakeasyBase {
    /**
     * OK. A list of the current API and microservices versions is returend.
     */
    containersVersionGetInfo?: shared.ContainersVersionGetInfo;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
